import { MouseEventHandler } from "react";
import styled from "styled-components";

export interface IButtonProps {
    name: string;
    onclick: MouseEventHandler<HTMLButtonElement>;
}

const ButtonContainer = styled.div`
color: black;
background-color: white;
text-align: left;
width: 70vw;
`;

function Button(props: IButtonProps) {
    return (
        <ButtonContainer>
            <button onClick={props.onclick}>{props.name}</button>
        </ButtonContainer>
    );
}