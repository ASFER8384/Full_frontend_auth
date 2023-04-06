import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dash from "./Pages/Dashboard/Dash.js";
import Forget from "./Pages/Forgetpassword/Forget.js";
import Home from "./Pages/Home/Home.js";
import Login from "./Pages/Login/Login.js";
import Register from "./Pages/Register/Register.js";
import {useEffect, useState} from "react"


function App() {



  const [loggedin,setLoggedin]=useState(false)

 useEffect((e)=>{
  if(localStorage.getItem("email")){
    setLoggedin(true)
  }
 },[])



  console.log(loggedin)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login  />} />
          <Route path='/register' element={<Register />} />           
          <Route path='/dash' element={<Dash/>} />        
          <Route path='/' element={<Login  />} />
          <Route path='/forgetpassword' element={<Forget  />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
