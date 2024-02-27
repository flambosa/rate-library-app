import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import {  ButtonContainer, ButtonPanelContainer } from '../../CSS/Common';

export interface IEntityOperationsProps {
    isInsert: boolean;
    //upsertHandler: () => void;
    upsertFormName: string;
    cancelHandler: () => void;
}

export function EntityUpsertPanel(props: IEntityOperationsProps) {

    return (
        <ButtonPanelContainer>
            <ButtonContainer>
                <Button form={props.upsertFormName} type="submit" variant='contained' className='upsert-button'>{props.isInsert ? "Insert" : "Update"}</Button><br></br>
            </ButtonContainer>
            <ButtonContainer>
                <Button onClick={props.cancelHandler} variant='contained' className='cancel-button'>Cancel</Button><br></br>
            </ButtonContainer>
        </ButtonPanelContainer>
    );
}