import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/signIn.js";
import SignUp from "./components/signUp.js";
import Globalstyle from "./components/globalstyle.js";
import { UserContext } from "./components/context.js";
import { useState } from "react";
import Catalogo from "./components/catalogo.js";
import Cart from "./components/cart.js";
import CheckOut from "./components/CheckOut.js"
import Teste from "./components/Teste"

export default function App() {
  const [User, setUser] = useState({});

  const [usuname,setusuname] = useState('fulano')
  

  return (
    
    <BrowserRouter>
    <UserContext.Provider value={{User, setUser}}>
    <Globalstyle/>
      <Routes>
        <Route path="/" element={<Catalogo />}></Route>
        <Route path="/sign-in" element={<SignIn setusuname={setusuname}/>}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/CheckOut" element={<CheckOut />} />
        <Route path="/Teste" element={<Teste />} />


      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
    
  );
}