import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Detail from './components/Detail';
import {SearchResults} from "./components/Homepage";
import {} from "./components/Homepage";


function App() {
  /*const [results, ] = useState([]);*/
  return (
    <div className="App">
      <div className ="searchBar">
      </div>
      <Routes>
        <Route path='/'>
          <Route index element={<Homepage />} />
          <Route path='/detail' element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
