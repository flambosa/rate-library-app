import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { RateLibraryTable, RateLibraryTableRow } from './Components/RateLibraryTable';
import { useReducer } from 'react';
import { IRateLibraryProps } from './Models/RateLibraryProps';
import GetRateLibrariesController from './Controllers/RateLibraryControllers';
import { getRateLibraries } from './Hooks/CustomHooks';

export default function App() {
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  function handleClick() {
    forceUpdate();
  }

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
      <h1>Rate Libraries</h1>
      {/* <RateLibraryTable refresh={handleClick} rateLibraries={await GetRateLibrariesController()}></RateLibraryTable> */}
      {<RateLibraryTable refresh={handleClick} rateLibraries={[]}></RateLibraryTable>}
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
