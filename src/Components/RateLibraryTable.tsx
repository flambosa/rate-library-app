import { useState } from "react";
import { IRateLibraryProps } from "../Models/RateLibraryProps";
import { getRateLibraries } from "../Hooks/CustomHooks";

export interface RateLibraryProps {
  name: string;
  key: string;
  code: string | undefined;
  onClick: ((event: React.MouseEvent<HTMLTableRowElement>, a: RateLibraryProps) => void) | undefined;
  refresh: (() => void) | undefined;
}

export interface RateLibraryTableProps {
  rateLibraries: IRateLibraryProps[]
  refresh: () => void;
}

export function RateLibraryTable(props: RateLibraryTableProps) {
  const { rateLibraries, refreshItems } = getRateLibraries();
  // function OpenModalWithRow(event: React.MouseEvent<HTMLTableRowElement>, row: RateLibraryProps) {
  //   setRateLibrary(row);
  //   setIsOpen(true);
  // }

  // function CloseModal() {
  //   setIsOpen(false);
  // }

  // const getRateLibraries = () => {
  //   RateLibraryService.getRateLibraries()
  //   .then((response: Array<IRateLibraryProps>) => {
  //     setTableRows(state => response.map((tableRowProps : IRateLibraryProps) => RateLibraryTableRow({name: tableRowProps.name, code: tableRowProps.code, key: tableRowProps.rateLibraryKey, onClick: undefined, refresh: props.refresh})));
  //   })
  //   .catch((e : Error) => {
  //     console.log(e);
  //   })
  // }

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Code</th>
      </tr>
      {rateLibraries.map((tableRowProps: IRateLibraryProps) => (<RateLibraryTableRow name={tableRowProps.name} code={tableRowProps.code} key={tableRowProps.rateLibraryKey} onClick={undefined} refresh={props.refresh}></RateLibraryTableRow>))}
      {/* <ControlledPopup isOpen = {isOpen} contentComponent ={RateLibraryForm(rateLibrary)} onCloseClick = {CloseModal} refresh={props.refresh}/> */}
    </table>
  );
}

export function RateLibraryTableRow(props: RateLibraryProps) {
  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  function OpenModalWithRow(event: React.MouseEvent<HTMLTableRowElement>) {
    setIsOpen(true);
  }

  function CloseModal() {
    setIsOpen(false);
  }

  return (
    <tr onClick={(e) => { if (props.onClick !== undefined) { props.onClick(e, props) } }}>
      <td>{props.name}</td>
      <td>{props.code}</td>
    </tr>
  );
}