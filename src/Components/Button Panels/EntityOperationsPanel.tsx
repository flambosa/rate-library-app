import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import {  ButtonPanelContainer } from '../../CSS/Common';
import styled from 'styled-components';

export interface IEntityOperationsProps {
    insertHandler: () => void;
    editHandler: () => void;
    deleteHandler: () => void;
    refreshHandler: () => void;
}

export const ButtonContainer = styled.div`
padding: 5px 10px 5px 10px;

& button {
    border-style: solid;
    border-width: 1px;
    border-color: grey;
    background-color: lightgrey;
    color: black;
    width: 100%;
    text-transform: capitalize;

    & span.MuiTouchRipple-root {
        border-style: none;

        &:active, &:focus, &:visited {
            border-style: none;
        } 
    }

    &.insert-button svg {
        color: green;
    }
    &.edit-button svg {
        color: black;
    }
    &.delete-button svg {
        color: red;
    }
    &.refresh-button svg {
        color: blue;
    }
}
`;

export function EntityOperationsPanel(props: IEntityOperationsProps) {

    return (
        <ButtonPanelContainer>
            <ButtonContainer>
                <Button onClick={props.insertHandler} variant='contained' startIcon={<AddIcon />} className='insert-button'>Insert</Button><br></br>
            </ButtonContainer>
            <ButtonContainer>
                <Button onClick={props.editHandler} variant='contained' startIcon={<EditIcon />} className='edit-button'>Edit</Button><br></br>
            </ButtonContainer>
            <ButtonContainer>
                <Button onClick={props.deleteHandler} variant='contained' startIcon={<ClearIcon />} className='delete-button'>Delete</Button><br></br>
            </ButtonContainer>
            <ButtonContainer>
                <Button onClick={props.refreshHandler} variant='contained' startIcon={<RefreshIcon />} className='refresh-button'>Refresh</Button><br></br>
            </ButtonContainer>
        </ButtonPanelContainer>
    );
}