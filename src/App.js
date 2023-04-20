import Navb from './components/Navb';
import Listmota from './components/Listmota';
import Searchmota from './components/Searchmota';
import Home from './components/Home';
import Header from './components/Header';
import Footerr from './components/Footerr';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import axios from 'axios'


function App() {
  const [listdonors, setlistdonors] = useState([]);
  const [donors, setdonors] = useState([]);
  const [wilayas, setwilayas] = useState([]);
  const [dairas, setdairas] = useState([]);
  const [blods, setblods] = useState([]);

const adddonors = async (data) =>{
  axios.post('http://127.0.0.1:8000/donors/',data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

  const getlistdonors = async () => {
    const listdnr = await axios.get("http://127.0.0.1:8000/donors/");
    setlistdonors(listdnr.data);
  }

  const getdonors = async (bldnum, wilayanum, dairanum) => {
    let url;
    if (bldnum && wilayanum && dairanum) {
      url = `http://127.0.0.1:8000/donors/${bldnum}/${wilayanum}/${dairanum}/`;
    } else if (bldnum && wilayanum) {
      url = `http://127.0.0.1:8000/donors/${bldnum}/${wilayanum}/`;
    } else {
      url = 'http://127.0.0.1:8000/donors/';
    }
    const donrbywdb = await axios.get(url);
    setdonors(donrbywdb.data);
  }

  const getallwilaya = async () => {
    const wil = await axios.get("http://127.0.0.1:8000/wilaya/")
    setwilayas(wil.data)
  }

  const getalldairaofwilaya = async (numero_wilaya) => {
    const dair = await axios.get(`http://127.0.0.1:8000/wilaya/${numero_wilaya}/`)
    setdairas(dair.data)
  }
  const getallblod = async () => {
    const bld = await axios.get("http://127.0.0.1:8000/bloodTypes/")
    setblods(bld.data)
  }

  useEffect(() => {
    adddonors()
    getlistdonors()
    getallwilaya()
    getallblod()

  }, []);

  return (
    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Navb adddonors={adddonors} wilayas={wilayas} dairas={dairas} blods={blods} getalldairaofwilaya={getalldairaofwilaya} /><Home adddonors={adddonors} getdonors={getdonors} wilayas={wilayas} dairas={dairas} blods={blods} getalldairaofwilaya={getalldairaofwilaya} /></>} />
          <Route path='/listeofmotabari3in' element={<><Navb adddonors={adddonors} wilayas={wilayas} dairas={dairas} blods={blods} getalldairaofwilaya={getalldairaofwilaya} /><Header getdonors={getdonors} wilayas={wilayas} dairas={dairas} blods={blods} getalldairaofwilaya={getalldairaofwilaya} /><Listmota listdonors={listdonors} /></>} />
          <Route path='/searchmotabari3in' element={<><Navb adddonors={adddonors} wilayas={wilayas} dairas={dairas} blods={blods} getalldairaofwilaya={getalldairaofwilaya} /><Header getdonors={getdonors} wilayas={wilayas} dairas={dairas} blods={blods} getalldairaofwilaya={getalldairaofwilaya} /><Searchmota donors={donors} /></>} />
        </Routes>
      </BrowserRouter>
      <Footerr />
    </div>
  );
}

export default App;
