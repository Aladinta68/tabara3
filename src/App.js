import Navb from './components/Navb';
import Listmota from './components/Listmota';
import Home from './components/Home';
import Header from './components/Header';
import Footerr from './components/Footerr';
import { personnes } from './Dataa';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [personnesdata, setpersonnesdata] = useState(personnes.results);

  return (
    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navb personnesdata={personnesdata} /><Home personnesdata={personnesdata}  /></>} />
          <Route path='/listeofmotabari3in' element={<><Navb personnesdata={personnesdata} /><Header personnesdata={personnesdata}  /><Listmota personnesdata={personnesdata} /></>} />
        </Routes>
      </BrowserRouter>
      <Footerr />
    </div>
  );
}

export default App;
