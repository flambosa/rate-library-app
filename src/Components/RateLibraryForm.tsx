import { useState } from "react";
import { RateForm, RateRowProps, RateTableRow } from "./Rate";
import { RateLibraryProps } from "./RateLibraryTable";
import { ControlledPopup } from "./ControlledPop";
import styled from "styled-components";

export function RateLibraryForm(props: RateLibraryProps | undefined) {
    
    const BlackDiv = styled.div`
    color: black;
    `;
    
    const rates: Array<RateRowProps> = [
      {itemCode: "1", description: "Item 1", rate: 2.0, onClick: undefined},
      {itemCode: "2", description: "Item 2", rate: 4.0, onClick: undefined}
    ]
  
    return (
      <>
      <BlackDiv>
      <div>
        {props?.name}
      </div>
      <div>
        {props?.code}
      </div>
      <div>
        {props?.key}
      </div>
      {RatesTable(props)}
      </BlackDiv>
      </>
    );
  }

 export function RatesTable(props: RateLibraryProps | undefined) {
    const [isOpen, setIsOpen] = useState(false);
    const [rate, setRate] = useState<RateRowProps | undefined>(undefined);
    
    function OpenModalWithRow(row: RateRowProps) {
      setRate(row);
      setIsOpen(true);
    }
  
    function CloseModal() {
      setIsOpen(false);
    }
  
    const rates: Array<RateRowProps> = [
      {itemCode: "1", description: "Item 1", rate: 2.0, onClick: undefined},
      {itemCode: "2", description: "Item 2", rate: 4.0, onClick: undefined}
    ];
  
    const tableRows = rates.map((tableRowProps, index) => RateTableRow({itemCode: tableRowProps.itemCode, description: tableRowProps.description, rate: tableRowProps.rate, onClick: OpenModalWithRow}));
  
    const BlackTableText = styled.table`
    color: black;
    `;   

    return (
      <BlackTableText>
        <tr>
          <th>Item Code</th>
          <th>Description</th>
          <th>Rate</th>
        </tr>
        {tableRows}
        <ControlledPopup isOpen = {isOpen} contentComponent ={RateForm(rate)} onCloseClick = {CloseModal} refresh={undefined}/>
      </BlackTableText>
    );
  
  }