import { MouseEventHandler} from "react";
import Popup from "reactjs-popup";

export interface ControlledPopupProps {
    isOpen : boolean;
    onCloseClick : MouseEventHandler;
    refresh: MouseEventHandler | undefined;
    contentComponent: JSX.Element | null
  }
  
  
  export function ControlledPopup(props: ControlledPopupProps){

    let currentModal =  
    (
      <div>
        <Popup open={props.isOpen} closeOnDocumentClick={false} nested={true}>
          <div className="modal">
            <a className="close" onClick={props.onCloseClick}>
              &times;
            </a>
            {props.contentComponent}
          </div>
          <button onClick = {props.refresh}>REFRESH</button>
        </Popup>
      </div>
    );
  
    return currentModal;
  };