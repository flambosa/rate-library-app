import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { RateLibraryTable } from './Components/RateLibraryTable';

export default function App() {

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
      <RateLibraryTable></RateLibraryTable>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
