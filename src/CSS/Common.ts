import styled from "styled-components";

export const EntityTable = styled.table`
color: black;
background-color: white;
text-align: left;
width: 70vw;
min-width: 0px;
border-style: solid;
border-color: grey;
border-width: 1px;
border-spacing: 0px;

& tr {
    margin: 0px;
    border-width: 0px;
    border-style: none;

    &.active-row{
        background-color: blue;
    }
}

& th {
    background-color: lightgrey;
    border-style: solid;
    border-color: grey;
    border-width: 1px;
}

& td {
    background-color: inherit;
    border-style: solid;
    border-color: lightgrey;
    border-width: 1px;
}
`;

export const EntityDashboard = styled.div`
display: flex;
flex-flow: row nowrap;
align-items: flex-start;
justify-content: flex-start;
background-color: white;
border-style: solid;
border-color: grey;
border-width: 1px;
padding: 2px;
`;

export const PanelContainer = styled.div`
display: flex;
flex-flow: column nowrap;
border-style: solid;
border-color: grey;
border-width: 1px;
margin-left: 2px;
`;

export const FormWithTableContainer = styled.div`
display: flex;
flex-flow: column nowrap;
border-style: solid;
border-color: grey;
border-width: 1px;
margin-left: 2px;
`;

export const ButtonPanelContainer = styled.div`
display: flex;
flex-flow: column nowrap;
background-color: white;
`;

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

    &.insert-button:not([disabled]) svg {
        color: green;
    }
    &.edit-button:not([disabled]) svg {
        color: black;
    }
    &.delete-button:not([disabled]) svg {
        color: red;
    }
    &.refresh-button:not([disabled]) svg {
        color: blue;
    }
}
`;

export const FieldsContainer = styled.div`
display: flex;
color: black;
flex-flow: row nowrap;
justify-content: flex-start; 
align-items: flex-start;
gap: 0.5rem;
margin: 0.75rem;
`;

export const PartialFieldsContainer = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: center; 
`;

export const EmptyTableContent = styled.tr`
height: 4rem;
text-align: center;
vertical-align: middle;
line-height: 4rem;
`;