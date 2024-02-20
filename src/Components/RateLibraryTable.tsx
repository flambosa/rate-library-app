import { useState } from "react";
import { ControlledPopup } from "./ControlledPop";
import { RateLibraryForm } from "./RateLibraryForm";

export interface RateLibraryProps {
  name: string;
  key: string;
  code: string | undefined;
  onClick: ((a: RateLibraryProps) => void) | undefined;
}

export function RateLibraryTable() {
    const [isOpen, setIsOpen] = useState(false);
    const [rateLibrary, setRateLibrary] = useState<RateLibraryProps | undefined>(undefined);
    
    function OpenModalWithRow(row: RateLibraryProps) {
      setRateLibrary(row);
      setIsOpen(true);
    }
  
    function CloseModal() {
      setIsOpen(false);
    }
  
    const libraries: Array<RateLibraryProps> = [{name: 'My First Rate Library', key: "123456", code: undefined, onClick: undefined}, {name: 'My 2nd Rate Library',key: "123456", code: '1234', onClick: undefined}];
    
    const tableRows = libraries.map((tableRowProps, index) => RateLibraryTableRow({name: tableRowProps.name, code: tableRowProps.code, key: tableRowProps.key, onClick: OpenModalWithRow}));
  
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Code</th>
        </tr>
        {tableRows}
        <ControlledPopup isOpen = {isOpen} contentComponent ={RateLibraryForm(rateLibrary)} onCloseClick = {CloseModal}/>
      </table>
    );
  }

  function RateLibraryTableRow(props: RateLibraryProps) {
  
    return (
    <tr onClick={(e) => {if(props.onClick !== undefined) {props.onClick(props)}}}>
      <td>{props.name}</td>
      <td>{props.code}</td>
    </tr>
    );
  }