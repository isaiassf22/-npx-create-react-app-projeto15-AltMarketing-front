import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/signIn.js";
import SignUp from "./components/signUp.js";
import Globalstyle from "./components/globalstyle.js";
import { UserContext } from "./components/context.js";
import { useState } from "react";

export default function App() {
  const [User, setUser] = useState({});

  const [usuname,setusuname] = useState('fulano')
  

  return (
    
    <BrowserRouter>
    <UserContext.Provider value={{User, setUser}}>
    <Globalstyle/>
      <Routes>
        <Route path="/" element={<SignIn setusuname={setusuname}/>}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
    
  );
}