import styled from "styled-components";
import { IRateLibraryProps } from "../Models/RateLibraryProps";
import { useContext, useState } from "react";
import { rateLibraryController } from "../Controllers/ControllerSingletons";
import { CloseRateLibraryModalContext, CloseRateModalContext, RefreshRateLibrariesContext, RefreshRatesContext, UpsertRateContext, UpsertRateLibraryContext, getRates } from "../Hooks/CustomHooks";
import { IRateProps } from "../Models/RateProps";
import { EmptyTableContent, EntityDashboard, EntityTable, FieldsContainer, FormWithTableContainer, PanelContainer, PartialFieldsContainer } from "../CSS/Common";
import { EntityOperationsPanel } from "./Button Panels/EntityOperationsPanel";
import { EntityUpsertPanel } from "./Button Panels/EntityUpsertPanel";
import { RateTableRow, RateView } from "./Rate";
import { ControlledPopup } from "./ControlledPop";
import { reformatDate } from "../Utilities/UtilityFunctions";

export interface IRateLibraryFormProps {
  data : IRateLibraryProps | undefined;
  isInsert : boolean;
}

const FieldLabelsContainer = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: flex-end;
justify-content: space-around;
gap: 0.1rem;
margin-right: 0.5rem;
font-size: 1rem;

& label {
  padding: 0.3rem;
  min-width: 10rem;
  text-align: right;
}
`;

const NoteLabelContainer = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: flex-end;
justify-content: flex-start;
gap: 0.1rem;
margin-right: 0.5rem;
font-size: 1rem;

& label {
  padding: 0.3rem;
}
`;

const FieldInputsContainer = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: flex-start;
justify-content: space-around;
gap: 0.1rem;

& > input {
  color: black;
  background-color: white;
  border-style: solid;
  border-color: grey;
  border-width: 1px;
  font-size: 1rem;

  &:disabled {
    background-color:lightgrey;
    color: darkgrey;
  }

  &#rlName {
    width: 15rem;
  }

  &#rlCode {
    width: 5rem;
  }

  &#rlNotes {
    width: 20rem;
    height: 15rem;
  }

  &.checkbox-wrapper {
    width: 1rem;
    height: 1rem;
  }

  &.display-field {
    border-color: white;
    pointer-events: none;
  }
}
`;

const NoteInputContainer = styled.div`
display: flex;
flex-flow: column nowrap;
align-items: flex-start;
justify-content: flex-start;
gap: 0.1rem;

& > textarea {
  color: black;
  background-color: white;
  border-style: solid;
  border-color: grey;
  border-width: 1px;
  font-size: 1rem;
  width: 20rem;
  height: 15rem;
`;

export function RateLibraryView(props: IRateLibraryFormProps) {
  const { items, setItems, activeItem, setActiveItem, refreshItems } = getRates(props.data?.rateLibraryKey ?? '');
  const [isOpen, setIsOpen] = useState(false);
  const [isInsertRate, setIsInsertRate] = useState(false);
  const [sortKey, setSortKey] = useState('');
  const [isInvertedSortKey, invertSortKey] = useState(false);
  const refreshRateLibraries = useContext(RefreshRateLibrariesContext);
  const closeRateLibraryModal = useContext(CloseRateLibraryModalContext);

  function CloseModal() {
    setIsOpen(false);
  }

  function ActivateRow(event: React.MouseEvent<HTMLTableRowElement>, rateProps: IRateProps) {

    if (rateProps !== activeItem) {
      setActiveItem(rateProps);
    }

    const isDoubleClick: boolean = event.detail === 2;
    if (isDoubleClick) {
      EditRate();
    }
  }

  function UpsertItem(rateProps: IRateProps) {

    const itemIndex = items.findIndex(item => item.rateKey === rateProps.rateKey)

    let itemsCopy = [...items];
    // update
    if (itemIndex >= 0) {
      itemsCopy[itemIndex] = rateProps;
    }
    // insert
    else {
      itemsCopy.push(rateProps);
    }
    setItems(itemsCopy);
    setActiveItem(rateProps);
    setIsInsertRate(false);
    CloseModal();
  }

  function InsertRate() {
    setIsOpen(true);
    setIsInsertRate(true);
  }

  function EditRate() {
    setIsOpen(true)
    setIsInsertRate(false);
  }

  function SortItems(propName: string) {
    
    let invertSort : boolean = false;
    if (sortKey == propName) {
      invertSort = !isInvertedSortKey;
      invertSortKey(invertSort);
    }

    const propKey = propName as keyof IRateProps;
    const sortedItems = items.sort((rate1, rate2) => {
      if (rate1[propKey] > rate2[propKey]) {
        return invertSort ? -1 : 1;
      }

      if (rate1[propKey] < rate2[propKey]) {
        return invertSort ? 1 : -1;
      }

      return 0;
    })

    setSortKey(propName);
    setItems(sortedItems);
  }

  return (
    <RefreshRatesContext.Provider value={refreshItems}>
      <UpsertRateContext.Provider value={UpsertItem}>
        <CloseRateModalContext.Provider value = {CloseModal}>
          <EntityDashboard>
            <FormWithTableContainer>
              <RateLibraryForm data={props.isInsert ? undefined : props.data} isInsert={props.isInsert}></RateLibraryForm>
              <RatesTable items={props.isInsert ? [] : items} activeItem={activeItem} activateRow={ActivateRow} sortHandler={SortItems}></RatesTable>
            </FormWithTableContainer>
            <PanelContainer>
              <EntityUpsertPanel isInsert={props.isInsert} upsertFormName="rate-library-upsert" cancelHandler={closeRateLibraryModal}></EntityUpsertPanel>
              <EntityOperationsPanel disable={props.isInsert} insertHandler={InsertRate} editHandler={EditRate} deleteHandler={() => { }} refreshHandler={refreshItems}></EntityOperationsPanel>
            </PanelContainer>
          </EntityDashboard>
          <ControlledPopup isOpen={isOpen} title="Rate Properties" contentComponent={<RateView data={isInsertRate ? undefined : activeItem} rateLibrary={props.data!} isInsert={isInsertRate}></RateView>} onCloseClick={CloseModal} />
        </CloseRateModalContext.Provider>
      </UpsertRateContext.Provider>
    </RefreshRatesContext.Provider>
  );
  }

  export function RateLibraryForm(props: IRateLibraryFormProps) {
    const [ name, setName ] = useState(props.data?.name ?? '');
    const [ code, setCode ] = useState(props.data?.code ?? '');
    const [ locked, setLocked ] = useState(props.data?.locked ?? false);
    const [ notes, setNotes ] = useState(props.data?.notes ?? '');
    const [ rateLibrary, setRateLibrary ] = useState(props.data);
    const upsertRow = useContext(UpsertRateLibraryContext);

    function submitRateLibrary(e: React.FormEvent<HTMLFormElement>) {
      // prevent page reload
      e.preventDefault();
      // only submit if any values are changed
      if ( rateLibrary?.name !== name 
        || rateLibrary?.code !== code
        || rateLibrary?.locked !== locked
        || rateLibrary?.notes !== notes) {

          let updatedRateLibrary : IRateLibraryProps = props.isInsert ? getNewRateLibrary() : {...(rateLibrary!)};
          updatedRateLibrary.name = name
          updatedRateLibrary.code = code;
          updatedRateLibrary.locked = locked;
          updatedRateLibrary.notes = notes;
          
          if(!props.isInsert) {
            updatedRateLibrary.dateModified = new Date().toLocaleString();
          }
          else {
            updatedRateLibrary.rateLibraryKey = crypto.randomUUID();
          }
          // POST request to update rate library
          rateLibraryController.updateRateLibrary(updatedRateLibrary)
          .then(returnedRateLibrary => {
            upsertRow(returnedRateLibrary);
          })
          .catch((e) => {
            // need error message
            setCode(rateLibrary?.code ?? '');
            setLocked(rateLibrary?.locked ?? false);
            setNotes(rateLibrary?.notes ?? '');
            setName(rateLibrary?.name ?? '');
          })
        }
    }
    
    function getNewRateLibrary() {
      let date = new Date().toLocaleString();
      let newRateLibrary : IRateLibraryProps = {
        name: name,
        code: code,
        locked: locked,
        notes: notes,
        ratesVisible: true,
        rateLibraryKey: '',
        dateAdded: date,
        dateModified: date
      }

      return newRateLibrary
    }

    return (
      <form onSubmit={(e) => submitRateLibrary(e)} id="rate-library-upsert">
        <FieldsContainer>
          <PartialFieldsContainer>
            <FieldLabelsContainer>
              <label htmlFor="rlName">Name:</label>
              <label htmlFor="rlCode">Rate Library Code:</label>
              <label htmlFor="rlLocked">Locked:</label>
              <label htmlFor="rlDateAdded">Date Added:</label>
              <label htmlFor="rlDateModified">Date Modified:</label>
            </FieldLabelsContainer>
            <FieldInputsContainer>
              <input id="rlName" name="rlName" type="text" value={props.data?.name} readOnly={!props.isInsert} disabled={!props.isInsert} onChange={(e) => setName(e.target.value)}></input>
              <input id="rlCode" name="rlCode" type="text" value={code} onChange={(e) => setCode(e.target.value)}></input>
              <div className="checkbox-wrapper">
                <input id="rlLocked" name="rlLocked" type="checkbox" value={locked?.toString()} checked={locked} onChange={(e) => setLocked(e.target.checked)}></input>
              </div>
              <input id="rlDateAdded" className="display-field" name="rlDateAdded" type="text" value={reformatDate(props.data?.dateAdded)} readOnly={true}></input>
              <input id="rlDateModified" className="display-field" name="rlDateModified" type="text" value={reformatDate(props.data?.dateModified)} readOnly={true}></input>
            </FieldInputsContainer>
          </PartialFieldsContainer>
          <PartialFieldsContainer>
            <NoteLabelContainer>
              <label htmlFor="rlDateModified">Notes:</label>
            </NoteLabelContainer>
            <NoteInputContainer>
              <textarea id="rlNotes" name="rlNotes" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
            </NoteInputContainer>
          </PartialFieldsContainer>
        </FieldsContainer>
      </form>
    );
  }


  export interface IRatesTableProps {
    items: IRateProps[];
    activeItem: IRateProps | undefined;
    activateRow: (event: React.MouseEvent<HTMLTableRowElement>, rateProps: IRateProps) => void;
    sortHandler: (propKey : string) => void;
  }

  const ScrollableTableWrapper = styled.div`
  max-height: 40vh;
  overflow-y:auto;
  overflow-x: hidden;
  style: overflow-y:scroll;
  width: 70vw;
  font-size: 0.75rem;
  
  & th:hover {
    cursor: pointer;
  }
  `

 export function RatesTable(props: IRatesTableProps) {

  return (
    <ScrollableTableWrapper>
      <EntityTable>
        <tr>
          <th onClick={() => props.sortHandler("itemCode")}>Item Code</th>
          <th onClick={() => props.sortHandler("description")}>Description</th>
          <th onClick={() => props.sortHandler("rateGroup")}>Group</th>
          <th onClick={() => props.sortHandler("value")}>Rate</th>
          <th onClick={() => props.sortHandler("unitOfMeasure")}>UOM</th>
          <th onClick={() => props.sortHandler("dateAdded")}>Date Added</th>
          <th onClick={() => props.sortHandler("dateModified")}>Date Modified</th>
        </tr>
        {(props.items.length == 0) && <EmptyTableContent>No Rates to Display</EmptyTableContent>}
        {props.items.map((tableRowProps: IRateProps) => (
          <RateTableRow
            key={tableRowProps.rateKey}
            data={tableRowProps}
            isActive={tableRowProps === props.activeItem}
            activateRow={props.activateRow}>
          </RateTableRow>))}
      </EntityTable>
    </ScrollableTableWrapper>
  );
  }