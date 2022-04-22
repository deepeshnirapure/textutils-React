import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert'
import React, { useState } from 'react';

// react router
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light') // whether darkmode is enable or not
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#0f2d41'
      showAlert("Darkmode has been enabled", "success");
    }
    else{
     setMode('light')
     document.body.style.backgroundColor = 'white'
     showAlert("Lightmode has been enabled", "success");
    }
  }

  // ALert mode
  const [alert, setAlert] = useState(null);
 
  const showAlert = (message, type)=>{
    setAlert({
      message : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null)
    },1000);
    }
  
  return (
    <>
  
    {/* <Navbar title="Textultis" abouttext= "About us" /> */}
    {/* <Navbar /> [default proptype ko use kiya tha isliye comment use kara tha]  */}

    <Navbar title="Textultis" abouttext= "About us"  mode={mode } toggleMode ={toggleMode} />
    <Alert  alert ={alert}/>
   {/* use of routes from router */}
    <Routes>
        <Route path="/" element={<Textform showAlert={showAlert} heading="Try Textultis To Convert your Text | Uppercase to Lowercase - Check Word Count & Character count " mode={mode}/>}/>
        
        <Route path="about/" element={<About mode={mode }/> }/>
    </Routes>
   </>
  );
}

export default App;
