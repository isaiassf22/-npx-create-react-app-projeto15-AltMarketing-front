import styled  from 'styled-components'
import { Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState , useContext} from 'react';
import axios from 'axios';
import { UserContext } from './context';

export default function Catalogo(){

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
                    <h2>login</h2>
                </Link>   
            </MenuSuperior>
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
    right: 15px;
    top: 15px;
}
`