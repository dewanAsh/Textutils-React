import "./App.css";

import Navbar from "./components/Navbar"
// import About from "./components/About"
import TextForm from "./components/TextForm"
import Alert from "./components/Alert"
import React,{useState} from "react"

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not.
  const [alert, setAlert] = useState(null) 


  const showAlert =(message,type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled" , "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled" , "success")
    }
  }

    return (
    <>
      {/* <Router> */}
      <Navbar title = "Textutils" mode = {mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <Alert alert = {alert}/>
      <div className="container my-3">
      {/* <Routes> */}
          {/* <Route exact path="/about" element={<About mode = {mode}/>}/> */}
          {/* <Route exact path="/" index element={<TextForm showAlert = {showAlert} heading = "Textutils - Word Counter,Character Counter,Remove Extra Spaces" mode = {mode}/>}/> */}
          {<TextForm showAlert = {showAlert} heading = "Textutils - Word Counter,Character Counter,Remove Extra Spaces" mode = {mode}/>}
      {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;

