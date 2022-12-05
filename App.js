import { useEffect } from 'react';
import { BrowserRouter as Brows,Routes,Route } from 'react-router-dom';
import './App.css';
import Empbirthday from './Components/Empbirthday';
import Empdetails from './Components/Empdetails';
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound';

function App() {
  useEffect(() =>{
    document.title="Birthday Remaider"
  })
  return (
    <Brows>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Empdetails/>} />
        <Route path='Empbirthday' element={<Empbirthday/>} />
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Brows>
  );
}

export default App;
