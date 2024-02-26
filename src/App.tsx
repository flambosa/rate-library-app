import './App.css'
import 'reactjs-popup';
import 'reactjs-popup/dist/index.css'
import { RateLibrariesView } from './Components/RateLibraryTable';

export default function App() {

  return (
    <>
      <h1>Rate Libraries</h1>
      {<RateLibrariesView></RateLibrariesView>}
    </>
  )
}
