import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components'
import 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import Popup from 'reactjs-popup'

const RedParagraph = styled.p`
  color: red;
`;

interface RateLibraryProps {
  name: string;
  key: string;
  code: string | undefined;
}

function RateLibraryTableRow({name, key, code = undefined}: RateLibraryProps) {
  
  function handleClick() {
    let i = 1;
    return (
    <>{ControlledPopup({name, key, code})}</>
    );
  }
  
  return (
  <tr onClick={handleClick}>
    <td>{name}</td>
    <td>{code}</td>
  </tr>
  );
}

function RateLibraryTable() {
  const ControlledPopup = () => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const name: string = "blah";
    return (
      <div>
        <button type="button" className="button" onClick={() => setOpen(o => !o)}>
          Controlled Popup
        </button>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <div className="modal">
            <a className="close" onClick={closeModal}>
              &times;
            </a>
             {name}
          </div>
        </Popup>
      </div>
    );
  };

  const libraries: Array<RateLibraryProps> = [{name: 'My First Rate Library', key: "123456", code: undefined}, {name: 'My 2nd Rate Library',key: "123456", code: '1234'}];
  
  const tableRows = libraries.map((tableRowProps, index) =>
  RateLibraryTableRow(tableRowProps));

  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Code</th>
      </tr>
      {tableRows}
    </table>
  );
}

interface MyButtonProps {
  count: number;
  toggle: boolean;
}

function MyButton({}: MyButtonProps) {
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)
  
  function handleClick() {
    setCount((count) =>  count + 1);
    setToggle((toggle) => !toggle);
  }

  return (
  <button onClick={handleClick}>
    count is {count}
  </button>    
  );
}

export default function App() {
  const count = 0;
  const toggle = false;

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <RateLibraryTable></RateLibraryTable>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
