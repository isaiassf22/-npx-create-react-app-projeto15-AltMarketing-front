import styled  from 'styled-components'
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState , useContext} from 'react';
import axios from 'axios';
import { UserContext } from './context';

export default function SignIn(setusuname){
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const[email,setemail]=useState('')
    const[senha,setsenha]=useState('')
    const[info,setinfo]=useState(null)
   
  
  function logar (){
  
    const logando = axios.post("http://localhost:5000/sign-in",
    {
      email: email,
      password: senha
    }
    )
    logando.then(respondeu)
    logando.catch((response)=>alert(response.data.message))
    
   
  }
  
  function respondeu(response){
  
    setinfo(response.data)
    setUser(response.data.token)
    setusuname(response.data.user)
    navigate("/home")
     
  }
    return (
        <Tela>
         <Icon><ion-icon name="cart-outline"></ion-icon></Icon>
          <Titulo>MyStore</Titulo>
          <Input>
            <input onChange={event => setemail(event.target.value)} placeholder="E-mail"></input>
          </Input>
          <Input>
            <input onChange={event => setsenha(event.target.value)} placeholder="Senha"></input>
          </Input>
          <Botao>
            <button onClick={logar}>Entrar</button>
          </Botao>
          <Link  to="/cadastro">
            <Cadastro>Primeira vez? Cadastre-se!</Cadastro>
          </Link>
        </Tela>
      );
    }
    
    const Tela = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    width: 375px;
    height: 667px;
    background-color: black;
    `
    const Icon = styled.div`
    ion-icon{
        font-size: 100px;
        color: #40E0D0;
    }
    `
    const Cadastro = styled.div`
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #40E0D0;
    `;
    const Titulo = styled.div`
    font-family: 'Saira Stencil One', cursive;
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
      font-weight: 400;
      font-size: 32px;
      color: #40E0D0;
    `;
    
    const Input = styled.div`
    margin-bottom: 7px;
      input {
        box-sizing: border-box;
        padding-left: 10px;
        font-family: 'Raleway', sans-serif;
    font-size: 15px;
    font-weight: 700;
        margin-bottom:5px ;
        border-radius: 5px;
        border: 1px solid #d4d4d4;
        width: 303px;
        height: 45px;
      }
    `;
    const Botao = styled.div`
    margin-bottom: 30px;
      button {
        border-radius: 5px;
        font-family: 'Raleway', sans-serif;
        font-size:20px;
        font-weight: 700;
        margin-bottom:5px ;
        border: none;
        width: 303px;
        height: 45px;
        background-color:#40E0D0;
    ;
        color: white;
      }
    `;