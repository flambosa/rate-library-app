import { MouseEventHandler } from "react";
import Popup from "reactjs-popup";
import ClearIcon from '@mui/icons-material/Clear';
import styled from "styled-components";

export interface ControlledPopupProps {
  isOpen: boolean;
  title: string,
  onCloseClick: MouseEventHandler;
  contentComponent: JSX.Element | null
}

const ControlledPopupContainer = styled.div`
& div.popup-content {
  padding: 0px;
}
`;

const ControlledPopupContent = styled.div`
`
const ControlledPopupHeader = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
align-items: center;
background-color: lightgrey;

& > h2 {
  font-size: 15px;
  color: grey;
  margin: 0;
}

& svg {
  color: grey;

  &:hover {
    cursor: pointer;
    background-color: red;
    color: white;    
  }
}
`;

export function ControlledPopup(props: ControlledPopupProps) {

  let currentModal =
    (
      <ControlledPopupContainer>
        <Popup open={props.isOpen} closeOnDocumentClick={false} nested={true}>
          <ControlledPopupContent className="modal">
            <ControlledPopupHeader>
              <h2>{props.title}</h2>
              <ClearIcon onClick={props.onCloseClick}></ClearIcon>
            </ControlledPopupHeader>
            {props.contentComponent}
          </ControlledPopupContent>
        </Popup>
      </ControlledPopupContainer>
    );

  return currentModal;
};