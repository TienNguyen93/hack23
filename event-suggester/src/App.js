import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';

function App() {
  
  return (
    <div className="App">
      <div className ="searchBar">
      </div>
      <Routes>
        <Route path='/'>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
