import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import {  ButtonContainer, ButtonPanelContainer } from '../../CSS/Common';

export interface IEntityOperationsProps {
    insertHandler: () => void;
    editHandler: () => void;
    deleteHandler: () => void;
    refreshHandler: () => void;
    disable: boolean;
}

export function EntityOperationsPanel(props: IEntityOperationsProps) {

    return (
        <ButtonPanelContainer>
            <ButtonContainer>
                <Button onClick={props.insertHandler} disabled={props.disable} variant='contained' startIcon={<AddIcon />} className='insert-button'>Insert</Button><br></br>
            </ButtonContainer>
            <ButtonContainer>
                <Button onClick={props.editHandler} disabled={props.disable} variant='contained' startIcon={<EditIcon />} className='edit-button'>Edit</Button><br></br>
            </ButtonContainer>
            <ButtonContainer>
                <Button onClick={props.deleteHandler} disabled={props.disable} variant='contained' startIcon={<ClearIcon />} className='delete-button'>Delete</Button><br></br>
            </ButtonContainer>
            <ButtonContainer>
                <Button onClick={props.refreshHandler} disabled={props.disable} variant='contained' startIcon={<RefreshIcon />} className='refresh-button'>Refresh</Button><br></br>
            </ButtonContainer>
        </ButtonPanelContainer>
    );
}