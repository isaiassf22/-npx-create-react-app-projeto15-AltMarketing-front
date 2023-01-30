import styled from "styled-components"
import { Link } from "react-router-dom"
import React, { useState } from 'react';


export default function CheckOut(){
    const [Confirma, setConfirma] = useState(false);

    function handleShow(e){   
    e.preventDefault()
    setConfirma(true);
    }
    
    return(<>
    <HeaderCheckout>
    <Link to="/cart">
    <Back >
         <ion-icon name="arrow-back-outline"/>
          Voltar 
    </Back>
    </Link>
    <A href="/"> AltMart<ion-icon name="cart-outline" > </ion-icon></A>
    <div/>
    </HeaderCheckout>

    <BoxEntrega>
       Endereço de entrega
    </BoxEntrega>
    <Form onSubmit={handleShow} > 
        <Box>Nome completo
        <Inputs type="text" required />
        </Box>
        <Box>
        Endereço
        <Inputs type="text" required/></Box>
        <Box>
        Complemento
        <Inputs type="text" /></Box>
        <Box>
        CEP 
        <Inputs type="number" required /></Box>
        <Box>
        Numero de Contato
        <Inputs type="number" required /></Box>

        <Button type="submit">Comprar</Button>
        {Confirma && (
            <PopUpBack>
            <PopUpFront>
          <h1>COMPRA FINALIZADA COM SUCESSO</h1>
          </PopUpFront>
          </PopUpBack>
        )}
    </Form>
        <Rodape>
            Total foi de R$: 
        </Rodape>
    </>)
}
const Rodape = styled.div`
margin-left: 20px;
font-size: 25px;
`

const Button = styled.button`
width: 55%;
margin-top: 30px;
margin-bottom: 50px;
`

const A = styled.a`
margin-top:10px;
font-size: 30px;
`

const PopUpBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`
const PopUpFront = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #888;
  max-width: 500px;
  width: 80%;
`

const Box = styled.div`
display:flex;
flex-wrap:wrap;
flex-direction:column;
margin-left:20px;
margin-top:5px;`

const Inputs = styled.input`
border: 2px solid #ccc;
border-radius: 4px;
height: 25px;
width: 300px;
`

const Form = styled.form`
display: column;
width: 60%;
height: auto;
margin-left: 350px;
justify-content:center;
`

const BoxEntrega= styled.div`
display: flex;
justify-content: center;
font-size: 20px;
`

const HeaderCheckout = styled.div`
width:100%;
height: 100px;
display: flex; 
justify-content: space-between;
` 

const Back = styled.div`
margin-left: 25px;
margin-top: 10px;
`