import { useState } from "react";
import { IRateLibraryProps } from "../Models/RateLibraryProps";
import { getRateLibraries2 } from "../Hooks/CustomHooks";
import { ControlledPopup } from "./ControlledPop";
import { RateLibraryForm } from "./RateLibraryForm";

export interface IRateLibraryTableRowProps {
  data: IRateLibraryProps;
  isActive: boolean;
  activateRow: (event: React.MouseEvent<HTMLTableRowElement>, rateLibraryProps: IRateLibraryProps) => void;
  //onClick: ((event: React.MouseEvent<HTMLTableRowElement>, a: IRateLibraryTableRowProps) => void) | undefined;
  refresh: (() => void) | undefined;
}

export interface RateLibraryTableProps {
  rateLibraries: IRateLibraryProps[]
  refresh: () => void;
}

export function RateLibraryTable(props: RateLibraryTableProps) {
  const { items, activeItem, setActiveItem, refreshItems } = getRateLibraries2();
  //const [activeRow, setActiveRow] = useState<IRateLibraryProps>();
  const [isOpen, setIsOpen] = useState(false);


  function OpenModalWithRow(rateLibraryProps: IRateLibraryProps) {
    setIsOpen(true);
    setActiveItem(rateLibraryProps);
  }

  function CloseModal() {
    setIsOpen(false);
  }

  function ActivateRow(event: React.MouseEvent<HTMLTableRowElement>, rateLibraryProps: IRateLibraryProps) {
    
    if (rateLibraryProps !== activeItem) {
      setActiveItem(rateLibraryProps);
    }

    const isDoubleClick : boolean = event.detail  === 2;
    if (isDoubleClick) {
      setIsOpen(true);
    }
  }

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Code</th>
      </tr>
      {items.map((tableRowProps: IRateLibraryProps, index) => (
        <RateLibraryTableRow 
          data = {tableRowProps}
          isActive = {tableRowProps === activeItem}
          activateRow = {ActivateRow}
          refresh={props.refresh}>
        </RateLibraryTableRow>))}
      <ControlledPopup isOpen = {isOpen} contentComponent ={RateLibraryForm(activeItem)} onCloseClick = {CloseModal} refresh={props.refresh}/>
    </table>
  );
}

export function RateLibraryTableRow(props: IRateLibraryTableRowProps) {

  return (
    <tr 
    onClick={(e) => { setTimeout(() => props.activateRow(e, props.data), 50) }} 
    onDoubleClick={(e) => { props.activateRow(e, props.data) }}
    className={props.isActive ? 'active-row' : ''}>
      <td>{props.data.name}</td>
      <td>{props.data.code}</td>
    </tr>
  );
}