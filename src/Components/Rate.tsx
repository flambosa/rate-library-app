import styled from "styled-components";

export interface RateRowProps {
  itemCode : string;
  description : string;
  rate: number;
  onClick: ((a: RateRowProps) => void) | undefined;
}

export function RateTableRow(props: RateRowProps) {
  return (
    <tr onClick={() => {if(props.onClick !== undefined) {props.onClick(props)};}}>
      <td>{props.itemCode}</td>
      <td>{props.description}</td>
      <td>{props.rate}</td>
    </tr>
    );
}

export function RateForm(rateProps: RateRowProps | undefined) {
  const BlackDiv = styled.div`
  color: black;
  `;

  return (
      <>
      <BlackDiv>
      <div>
        {rateProps?.itemCode}
      </div>
      <div>
        {rateProps?.description}
      </div>
      <div>
        {rateProps?.rate}
      </div>
      </BlackDiv>
      </>
    )
}