import { useContext, useState } from "react";
import { IRateLibraryProps } from "../Models/RateLibraryProps";
import { UpsertRowContext, RefreshRateLibrariesContext, getRateLibraries } from "../Hooks/CustomHooks";
import { ControlledPopup } from "./ControlledPop";
import { RateLibraryDetail } from "./RateLibraryForm";
import { EntityOperationsPanel } from "./Button Panels/EntityOperationsPanel";
import { EntityDashboard, EntityTable, PanelContainer } from "../CSS/Common";

export interface IRateLibraryTableRowProps {
  data: IRateLibraryProps;
  isActive: boolean;
  activateRow: (event: React.MouseEvent<HTMLTableRowElement>, rateLibraryProps: IRateLibraryProps) => void;
  //onClick: ((event: React.MouseEvent<HTMLTableRowElement>, a: IRateLibraryTableRowProps) => void) | undefined;
}

export interface IRateLibraryTableProps {
  items: IRateLibraryProps[];
  activeItem: IRateLibraryProps | undefined;
  activateRow: (event: React.MouseEvent<HTMLTableRowElement>, rateLibraryProps: IRateLibraryProps) => void;
}

export function RateLibrariesView() {
  const { items, setItems, activeItem, setActiveItem, refreshItems } = getRateLibraries();
  const [isOpen, setIsOpen] = useState(false);
  const [isInsert, setIsInsert] = useState(false);
  const refreshRateLibraries = useContext(RefreshRateLibrariesContext);

  function CloseModal() {
    setIsOpen(false);
  }

  function ActivateRow(event: React.MouseEvent<HTMLTableRowElement>, rateLibraryProps: IRateLibraryProps) {

    if (rateLibraryProps !== activeItem) {
      setActiveItem(rateLibraryProps);
    }

    const isDoubleClick: boolean = event.detail === 2;
    if (isDoubleClick) {
      setIsOpen(true);
    }
  }

  function UpsertItem(rateLibraryProps: IRateLibraryProps) {

    const itemIndex = items.findIndex(item => item.rateLibraryKey === rateLibraryProps.rateLibraryKey)

    let itemsCopy = [...items];
    // update
    if (itemIndex >= 0) {
      itemsCopy[itemIndex] = rateLibraryProps;
    }
    // insert
    else {
      itemsCopy.push(rateLibraryProps);
    }
    setItems(itemsCopy);
    setActiveItem(rateLibraryProps);
    CloseModal();
  }

  function InsertRateLibrary() {
    setIsOpen(true);
    setIsInsert(true);
  }

  function EditRateLibrary() {
    setIsOpen(true)
    setIsInsert(false);
  }

  return (
    <RefreshRateLibrariesContext.Provider value={refreshItems}>
      <UpsertRowContext.Provider value={UpsertItem}>
        <EntityDashboard>
          <RateLibraryTable items={items} activeItem={activeItem} activateRow={ActivateRow}></RateLibraryTable>
          <PanelContainer>
            <EntityOperationsPanel insertHandler={InsertRateLibrary} editHandler={EditRateLibrary} deleteHandler={() => { }} refreshHandler={refreshItems}></EntityOperationsPanel>
          </PanelContainer>
        </EntityDashboard>
        <ControlledPopup isOpen={isOpen} title="Rate Library Properties" contentComponent={<RateLibraryDetail data={activeItem} isInsert={isInsert}></RateLibraryDetail>} onCloseClick={CloseModal} />
      </UpsertRowContext.Provider>
    </RefreshRateLibrariesContext.Provider>
  );
}

export function RateLibraryTable(props: IRateLibraryTableProps) {

  return (
    <>
      <EntityTable>
        <tr>
          <th>Name</th>
          <th>Code</th>
        </tr>
        {props.items.map((tableRowProps: IRateLibraryProps) => (
          <RateLibraryTableRow
            key={tableRowProps.rateLibraryKey}
            data={tableRowProps}
            isActive={tableRowProps === props.activeItem}
            activateRow={props.activateRow}>
          </RateLibraryTableRow>))}
      </EntityTable>
    </>
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