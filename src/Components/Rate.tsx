import styled from "styled-components";
import { IRateProps } from "../Models/RateProps";
import { useContext, useState } from "react";
import { CloseRateModalContext, RefreshRateLibrariesContext, UpsertRateContext } from "../Hooks/CustomHooks";
import { IRateLibraryProps } from "../Models/RateLibraryProps";
import { rateController } from "../Controllers/ControllerSingletons";
import { EntityDashboard, PanelContainer } from "../CSS/Common";
import { EntityUpsertPanel } from "./Button Panels/EntityUpsertPanel";
import { reformatDate } from "../Utilities/UtilityFunctions";

export interface IRatesTableRowProps {
  data: IRateProps;
  isActive: boolean;
  activateRow: (event: React.MouseEvent<HTMLTableRowElement>, rateProps: IRateProps) => void;
}

export interface IRateFormProps {
  data : IRateProps | undefined;
  rateLibrary: IRateLibraryProps;
  isInsert : boolean;
}

const FormInputs = styled.div`
display: flex;
color: black;
flex-flow: column nowrap;
justify-content: flex-start; 
align-items: flex-start;
border-style: solid;
border-color: grey;
border-width: 1px;
`;

const FormInputRow = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: flex-start; 
align-items: flex-start;
margin: 0.5rem;

& > label {
  width: 8rem;
  text-align: right;
  display: inline-block;
  margin-right: 0.5rem;
}

& > input, & > select, & > textarea {

  font-size: 0.8rem;

  &.display-field {
    border-color: white;
    border-style: solid;
    pointer-events: none;
    color: black;
  }
}

& > textarea {
  height: 7rem;
}
`;

const StyledRateTableRow = styled.tr`
& > td.ratetablerow-description {
  width: 30rem;
}
`;

export function RateTableRow(props: IRatesTableRowProps) {
  return (
    <StyledRateTableRow
      onClick={(e) => { setTimeout(() => props.activateRow(e, props.data), 50) }}
      onDoubleClick={(e) => { props.activateRow(e, props.data) }}
      className={props.isActive ? 'active-row' : ''}>
      <td>{props.data.itemCode}</td>
      <td className="ratetablerow-description">{props.data.description}</td>
      <td>{props.data.rateGroup}</td>
      <td>{props.data.value}</td>
      <td>{props.data.unitOfMeasure}</td>
      <td>{reformatDate(props.data.dateAdded)}</td>
      <td>{reformatDate(props.data.dateModified)}</td>
    </StyledRateTableRow>
  );
}

export function RateForm(props: IRateFormProps) {
  const [ itemCode, setItemCode ] = useState(props.data?.itemCode ?? '');
  const [ location, setLocation ] = useState(props.data?.locationKey ?? '');
  const [ description, setDescription ] = useState(props.data?.description ?? '');
  const [ rateGroup, setRateGroup ] = useState(props.data?.rateGroup ?? '');
  const [ unitOfMeasure, setUnitOfMeasure ] = useState(props.data?.unitOfMeasure ?? '');
  const [ rate, setRate ] = useState(props.data?.value ?? 0.0000);
  const [ rateItem, setRateItem ] = useState(props.data);
  const upsertRow = useContext(UpsertRateContext);

  function submitRateLibrary(e: React.FormEvent<HTMLFormElement>) {
    // prevent page reload
    e.preventDefault();
    // only submit if any values are changed
    if ( rateItem?.itemCode !== itemCode 
      || rateItem?.locationKey !== location
      || rateItem?.description !== description
      || rateItem?.rateGroup !== rateGroup
      || rateItem?.unitOfMeasure !== unitOfMeasure
      || rateItem?.value !== rate) {

        let updatedRate : IRateProps = props.isInsert ? getNewRate() : {...(rateItem!)};
        updatedRate.itemCode = itemCode
        updatedRate.locationKey = location;
        updatedRate.description = description;
        updatedRate.rateGroup = rateGroup;
        updatedRate.unitOfMeasure = unitOfMeasure;
        updatedRate.value = rate;
        
        if(!props.isInsert) {
          updatedRate.dateModified = new Date().toLocaleString();
        }
        // POST request to update rate library
        rateController.updateRate(updatedRate)
        .then(returnedRate => {
          upsertRow(returnedRate);
        })
        .catch((e) => {
          // need error message
          setItemCode(rateItem?.itemCode ?? '');
          setLocation(rateItem?.locationKey ?? '');
          setDescription(rateItem?.description ?? '');
          setRateGroup(rateItem?.rateGroup ?? '');
          setUnitOfMeasure(rateItem?.unitOfMeasure ?? '');
          setRate(rateItem?.value ?? 0.0000);
        })
      }
  }
  
  function getNewRate() {
    let date = new Date().toLocaleString();
    let newRate : IRateProps = {
      rateKey: "",
      rateLibraryKey: props.rateLibrary.rateLibraryKey,
      itemCode: itemCode,
      locationKey: location,
      description: description,
      unitOfMeasure: unitOfMeasure,
      value: 0.0000,
      rateGroup: "",
      dateAdded: date,
      dateModified: date
    }

    return newRate
  }

  return (
    <form onSubmit={(e) => submitRateLibrary(e)} id="rate-upsert">
      <FormInputs>
        <FormInputRow>
          <label htmlFor="rRateLibrary">Rate Library:</label>
          <input id="rRateLibrary" className="display-field" name="rRateLibrary" type="text" value={props.rateLibrary?.name} readOnly={true} disabled={true}></input>
        </FormInputRow>
        <FormInputRow>
          <label htmlFor="rItemCode">Item Code:</label>
          <input id="rItemCode" name="rItemCode" type="text" value={itemCode} readOnly={!props.isInsert} onChange={(e) => setItemCode(e.target.value)}></input>
        </FormInputRow>
        <FormInputRow>
          <label htmlFor="rLocation">Location:</label>
          <select id="rLocation" name="rLocation" value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value={1}>Brisbane</option>
            <option value={2}>Melbourne</option>
          </select>
        </FormInputRow>
        <FormInputRow>
          <label htmlFor="rDescription">Description:</label>
          <textarea id="rDescription" name="rDescription" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </FormInputRow>
        <FormInputRow>
          <label htmlFor="rRateGroup">Rate Group:</label>
          <select id="rRateGroup" name="rRateGroup" value={rateGroup} onChange={(e) => setRateGroup(e.target.value)}>
            <option value={1}>Group 1</option>
            <option value={2}>Group 2</option>
          </select>
        </FormInputRow>
        <FormInputRow>
          <label htmlFor="rUnitOfMeasure">UOM:</label>
          <select id="rUnitOfMeasure" name="rUnitOfMeasure" value={unitOfMeasure} onChange={(e) => setUnitOfMeasure(e.target.value)}>
            <option value={1}>ft</option>
            <option value={2}>ft 2</option>
            <option value={3}>ft 2</option>
          </select>
        </FormInputRow>            
        <FormInputRow>
          <label htmlFor="rRate">Rate:</label>
          <input id="rRate" name="rRate" type="text" value={rate} readOnly={!props.isInsert}></input>
        </FormInputRow>                                           
      </FormInputs>
    </form>
  );
}

export function RateView(props: IRateFormProps) {
  const refreshRateLibraries = useContext(RefreshRateLibrariesContext);
  const closeRateModalContext = useContext(CloseRateModalContext);

  return (
          <EntityDashboard>
            <RateForm isInsert={props.isInsert} data={props.data} rateLibrary={props.rateLibrary}></RateForm>
            <PanelContainer>
              <EntityUpsertPanel isInsert={props.isInsert} upsertFormName="rate-upsert" cancelHandler={closeRateModalContext}></EntityUpsertPanel>
            </PanelContainer>
          </EntityDashboard>
  );
  }