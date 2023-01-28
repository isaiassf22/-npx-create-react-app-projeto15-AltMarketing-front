
import styled  from 'styled-components'
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState , useContext} from 'react';
import axios from 'axios';
import { UserContext } from './context';

export default function Cart(){

    const produtos = [
        {nome:'Camisa Social',preco: 49.90,estoque:5,imagem:'https://a-static.mlcdn.com.br/280x210/camisa-masculina-hard-adventure-safari-cinza-azulado-uv50/thabel2/rdtx54vps-cinza-g/2a9c4814cf0aeec33b64a9c2b477185e.jpeg'},
        {nome:'Camisa Social',preco: 49.90,estoque:5,imagem:'https://a-static.mlcdn.com.br/280x210/camisa-masculina-hard-adventure-safari-cinza-azulado-uv50/thabel2/rdtx54vps-cinza-g/2a9c4814cf0aeec33b64a9c2b477185e.jpeg'},
        {nome:'Camisa Social',preco: 49.90,estoque:5,imagem:'https://a-static.mlcdn.com.br/280x210/camisa-masculina-hard-adventure-safari-cinza-azulado-uv50/thabel2/rdtx54vps-cinza-g/2a9c4814cf0aeec33b64a9c2b477185e.jpeg'},
        {nome:'Camisa Social',preco: 49.90,estoque:5,imagem:'https://a-static.mlcdn.com.br/280x210/camisa-masculina-hard-adventure-safari-cinza-azulado-uv50/thabel2/rdtx54vps-cinza-g/2a9c4814cf0aeec33b64a9c2b477185e.jpeg'},
        {nome:'Camisa Social',preco: 49.90,estoque:5,imagem:'https://a-static.mlcdn.com.br/280x210/camisa-masculina-hard-adventure-safari-cinza-azulado-uv50/thabel2/rdtx54vps-cinza-g/2a9c4814cf0aeec33b64a9c2b477185e.jpeg'},
        {nome:'Camisa Social',preco: 49.90,estoque:5,imagem:'https://a-static.mlcdn.com.br/280x210/camisa-masculina-hard-adventure-safari-cinza-azulado-uv50/thabel2/rdtx54vps-cinza-g/2a9c4814cf0aeec33b64a9c2b477185e.jpeg'},
        {nome:'Camisa Social',preco: 49.90,estoque:5,imagem:'https://a-static.mlcdn.com.br/280x210/camisa-masculina-hard-adventure-safari-cinza-azulado-uv50/thabel2/rdtx54vps-cinza-g/2a9c4814cf0aeec33b64a9c2b477185e.jpeg'},
        {nome:'Camisa Social',preco: 49.90,estoque:5,imagem:'https://a-static.mlcdn.com.br/280x210/camisa-masculina-hard-adventure-safari-cinza-azulado-uv50/thabel2/rdtx54vps-cinza-g/2a9c4814cf0aeec33b64a9c2b477185e.jpeg'},
        {nome:'Camisa Social',preco: 49.90,estoque:5,imagem:'https://a-static.mlcdn.com.br/280x210/camisa-masculina-hard-adventure-safari-cinza-azulado-uv50/thabel2/rdtx54vps-cinza-g/2a9c4814cf0aeec33b64a9c2b477185e.jpeg'},
        {nome:'Camisa Social',preco: 49.90,estoque:5,imagem:'https://a-static.mlcdn.com.br/280x210/camisa-masculina-hard-adventure-safari-cinza-azulado-uv50/thabel2/rdtx54vps-cinza-g/2a9c4814cf0aeec33b64a9c2b477185e.jpeg'},
        {nome:'Camisa Social',preco: 49.90,estoque:5,imagem:'https://a-static.mlcdn.com.br/280x210/camisa-masculina-hard-adventure-safari-cinza-azulado-uv50/thabel2/rdtx54vps-cinza-g/2a9c4814cf0aeec33b64a9c2b477185e.jpeg'},
        {nome:'Camisa Social',preco: 49.90,estoque:5,imagem:'https://a-static.mlcdn.com.br/280x210/camisa-masculina-hard-adventure-safari-cinza-azulado-uv50/thabel2/rdtx54vps-cinza-g/2a9c4814cf0aeec33b64a9c2b477185e.jpeg'},
        {nome:'Camisa Social',preco: 49.90,estoque:5,imagem:'https://a-static.mlcdn.com.br/280x210/camisa-masculina-hard-adventure-safari-cinza-azulado-uv50/thabel2/rdtx54vps-cinza-g/2a9c4814cf0aeec33b64a9c2b477185e.jpeg'},
        {nome:'Camisa Social',preco: 49.90,estoque:5,imagem:'https://a-static.mlcdn.com.br/280x210/camisa-masculina-hard-adventure-safari-cinza-azulado-uv50/thabel2/rdtx54vps-cinza-g/2a9c4814cf0aeec33b64a9c2b477185e.jpeg'},
        {nome:'Camisa Social',preco: 49.90,estoque:5,imagem:'https://a-static.mlcdn.com.br/280x210/camisa-masculina-hard-adventure-safari-cinza-azulado-uv50/thabel2/rdtx54vps-cinza-g/2a9c4814cf0aeec33b64a9c2b477185e.jpeg'},
        {nome:'Camisa Social',preco: 49.90,estoque:5,imagem:'https://a-static.mlcdn.com.br/280x210/camisa-masculina-hard-adventure-safari-cinza-azulado-uv50/thabel2/rdtx54vps-cinza-g/2a9c4814cf0aeec33b64a9c2b477185e.jpeg'},
        {nome:'Camisa Social',preco: 49.90,estoque:5,imagem:'https://a-static.mlcdn.com.br/280x210/camisa-masculina-hard-adventure-safari-cinza-azulado-uv50/thabel2/rdtx54vps-cinza-g/2a9c4814cf0aeec33b64a9c2b477185e.jpeg'},
    ]


    return(
        <Tela>
            <MenuSuperior>
                <h1>AltMart</h1>
                <Link to="/sign-in">
                <Icon><ion-icon name="cart-outline"></ion-icon></Icon>
                    <h2>login</h2>
                </Link> 
                <Link to="/">
                    <h3>Carrinho</h3>
                    
                </Link> 
            </MenuSuperior>
            <Carrinho>
            <MenuCarrinho>
                <h1>Meu Carrinho</h1>
                </MenuCarrinho>
                <Link to="/">
                <Icon2><ion-icon name="chevron-back-outline"></ion-icon></Icon2>   
                </Link> 
            </Carrinho>
            <Produtos>
                {produtos.map(p=>{
                    
                    return(
                        <Produto>
                        <img src={p.imagem}></img>
                        <h1>{p.nome}</h1>
                        <h2>Preço: R$ {p.preco}</h2>
                        <Itens>
                            <>
                            
                            <button>Comprar</button>
                            
                            </>
                            <>
                            <Estoque>
                                <h3>Disponível</h3>
                                <h3>{p.estoque}</h3>
                            </Estoque>
                            </>
                        </Itens>
                    </Produto>
                    )
                   

                })}
                
            
            </Produtos>
        </Tela>
    )
}


const Icon2 = styled.div`
ion-icon{
    position: absolute;
    font-size: 30px;
    color: #40E0D0;
    right: 300px;
    top: 9px;
}
`

const MenuCarrinho = styled.div`

h1{
    font-family: 'Saira Stencil One', cursive;
    position: absolute;
    top:10px;
    right: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
      font-weight: 400;
      font-size: 25px;
      color: #40E0D0;
}
`
const Carrinho = styled.div`
position: absolute;
right: 0;
width:350px;
height: 100vh;
background-color: black;
opacity: 0.98;
`

const Icon = styled.div`
ion-icon{
    font-size: 50px;
    color: #40E0D0;
}
`

const Estoque = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-left: 25px;
h3{
   font-size: 15px;
}
`
const Itens = styled.div`
margin: 5px;
display: flex;

button{
    font-family: 'Raleway', sans-serif;
    font-size: 15px;
    font-weight: 700; 
    background-color: #40E0D0;
    border-radius: 5px;
}
`
const Produtos = styled.div`
margin-top: 70px;
margin-left:30px;
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-wrap: wrap;
`
const Produto = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 250px ;
height: 300px;
background-color: white;
margin: 20px;
box-sizing: border-box;
border-radius: 5px;
border: 5px solid black;
h1{
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 700; 
    margin: 5px;
}
img{
    width: 200px;
}
`
const Tela = styled.div`

display:flex;
flex-direction: column;
align-items:flex-start;
justify-content: start;
width: 100%;
height: 100vh;
background-color: #40E0D0;
position: relative;
`
const MenuSuperior = styled.div `
width: 100%;
height: 50px;
background-color: black;
position: absolute;
top: 0;
color: white;
display: flex;
align-items: center;
justify-content: center;


h1{
    font-family: 'Saira Stencil One', cursive;

    display: flex;
    align-items: center;
    justify-content: center;
      font-weight: 400;
      font-size: 35px;
      color: #40E0D0;
}
h2{
    color: #40E0D0;
    text-decoration: none;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 700;
    position: absolute;
    right: 25px;
    top: 15px;
}
h3{
    color: #40E0D0;
    text-decoration: none;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    font-weight: 700;
    position: absolute;
    right: 115px;
    top: 15px;
}
`