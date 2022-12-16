
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {

  // Alert
  const [alert, setAlert] = useState('null');
  const [mode, setMode] = useState('light');
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    })
    setTimeout(() => {
      setAlert('null');
    }, 2000);
  }
  // Dark Mode
  const darkModeBlue = () => {
    setMode('black');
    document.body.style.backgroundColor = 'blue';
    showAlert("Dark mode is enabled", 'success');
  }
  const darkModeGray = () => {
    setMode('black');
    document.body.style.backgroundColor = '#343a40';
    showAlert("Dark mode is enabled", 'success');
  }
  const darkModeGreen = () => {
    setMode('black');
    document.body.style.backgroundColor = 'green';
    showAlert("Dark mode is enabled", 'success');
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('black');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode is enabled", 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", 'success');
    }
  }

  return (
    <>
      {/* Components link here */}
      {/* <Navbar title='TextUtils' aboutText='About Us'  /> */}
      {/* <Router> */}
      <Navbar title='TextUtils' aboutText='About' mode={mode} toggleMode={toggleMode} darkModeBlue={darkModeBlue} darkModeGray={darkModeGray} darkModeGreen={darkModeGreen} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm heading='Enter text to Analyze' showAlert={showAlert} mode={mode} toggleMode={toggleMode} darkModeBlue={darkModeBlue} darkModeGray={darkModeGray} darkModeGreen={darkModeGreen} />
        {/* <Routes> */}
        {/* <Route exact path="/about"
              element={<About mode={mode} toggleMode={toggleMode} darkModeBlue={darkModeBlue} darkModeGray={darkModeGray} darkModeGreen={darkModeGreen} />} >

            </Route> */}
        {/* <Route exact path="/" */}
        {/* element={<TextForm heading='Enter text to Analyze' showAlert={showAlert} mode={mode} toggleMode={toggleMode} darkModeBlue={darkModeBlue} darkModeGray={darkModeGray} darkModeGreen={darkModeGreen} />}> */}

        {/* </Route> */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
