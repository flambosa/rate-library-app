import styled from "styled-components";
import { IRateLibraryProps } from "../Models/RateLibraryProps";
import { useContext, useState } from "react";
import { rateLibraryController } from "../Controllers/ControllerSingletons";
import { UpsertRowContext } from "../Hooks/CustomHooks";

export interface IRateLibraryFormProps {
  data : IRateLibraryProps | undefined;
  isInsert : boolean;
}

const FieldsContainer = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: space-between; 
`;

const PartialFieldsContainer = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: center; 
`;

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

const BlackDiv = styled.div`
color: black;
`;

export function RateLibraryDetail(props: IRateLibraryFormProps) {
  
    return (
      <>
      <BlackDiv>
        <RateLibraryForm data={props.isInsert ? undefined : props.data} isInsert={props.isInsert}></RateLibraryForm>
      {/* {RatesTable(props)} */}
      </BlackDiv>
      </>
    );
  }

  export function RateLibraryForm(props: IRateLibraryFormProps) {
    const [ name, setName ] = useState(props.data?.name ?? '');
    const [ code, setCode ] = useState(props.data?.code ?? '');
    const [ locked, setLocked ] = useState(props.data?.locked ?? false);
    const [ notes, setNotes ] = useState(props.data?.notes ?? '');
    const [ rateLibrary, setRateLibrary ] = useState(props.data);
    const upsertRow = useContext(UpsertRowContext);

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
          
          if(props.isInsert) {
            updatedRateLibrary.dateModified = new Date().toLocaleString();
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
      <form onSubmit={(e) => submitRateLibrary(e)}>
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
              <input id="rlName" name="rlName" type="text" value={props.data?.name} readOnly={!props.isInsert} onChange={(e) => setName(e.target.value)}></input>
              <input id="rlCode" name="rlCode" type="text" value={code} onChange={(e) => setCode(e.target.value)}></input>
              <div className="checkbox-wrapper">
                <input id="rlLocked" name="rlLocked" type="checkbox" value={locked?.toString()} checked={locked} onChange={(e) => setLocked(e.target.checked)}></input>
              </div>
              <input id="rlDateAdded" className="display-field" name="rlDateAdded" type="text" value={props.data?.dateAdded} readOnly={true}></input>
              <input id="rlDateModified" className="display-field" name="rlDateModified" type="text" value={props.data?.dateAdded} readOnly={true}></input>
            </FieldInputsContainer>
          </PartialFieldsContainer>
          <PartialFieldsContainer>
            <FieldLabelsContainer>
              <label htmlFor="rlDateModified">Notes:</label>
            </FieldLabelsContainer>
            <FieldInputsContainer>
              <input id="rlNotes" name="rlNotes" type="text" value={notes} onChange={(e) => setNotes(e.target.value)}></input>
            </FieldInputsContainer>
          </PartialFieldsContainer>
        </FieldsContainer>
      </form>
    );
  }



//  export function RatesTable(props: RateLibraryProps | undefined) {
//     const [isOpen, setIsOpen] = useState(false);
//     const [rate, setRate] = useState<RateRowProps | undefined>(undefined);
    
//     function OpenModalWithRow(row: RateRowProps) {
//       setRate(row);
//       setIsOpen(true);
//     }
  
//     function CloseModal() {
//       setIsOpen(false);
//     }
  
//     const rates: Array<RateRowProps> = [
//       {itemCode: "1", description: "Item 1", rate: 2.0, onClick: undefined},
//       {itemCode: "2", description: "Item 2", rate: 4.0, onClick: undefined}
//     ];
  
//     const tableRows = rates.map((tableRowProps, index) => RateTableRow({itemCode: tableRowProps.itemCode, description: tableRowProps.description, rate: tableRowProps.rate, onClick: OpenModalWithRow}));
  
//     const BlackTableText = styled.table`
//     color: black;
//     `;   

//     return (
//       <BlackTableText>
//         <tr>
//           <th>Item Code</th>
//           <th>Description</th>
//           <th>Rate</th>
//         </tr>
//         {tableRows}
//         <ControlledPopup isOpen = {isOpen} contentComponent ={RateForm(rate)} onCloseClick = {CloseModal} refresh={undefined}/>
//       </BlackTableText>
//     );
  
//   }