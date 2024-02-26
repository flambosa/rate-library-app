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

export const ButtonPanelContainer = styled.div`
display: flex;
flex-flow: column nowrap;
background-color: white;
`;