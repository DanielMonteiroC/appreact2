import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #f0f2f5;
`;

const CadastroBox = styled.div`
width: 400px;
padding: 40px;
background-color: white;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
border-radius: 10px;
text-align: center;
`;

const Title = styled.h2`
margin-bottom: 20px;
color: #333;
`;

const Input = styled.input`
width: 100%;
padding: 10px;
margin: 10px 0;
border: 1px solid #ddd;
border-radius: 5px;
font-size: 16px;
`;

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: #333;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
&:hover {
background-color: #0056b3;
}
`;

const Styledlink = styled(Link)`
margin-top: 15px;
display: block;
color: #0056b3;
text-decoration: none;
&:hover {
    background-color: #0056b3;
}
`;

function Cadastro() {
    return(
        <Container>
            <CadastroBox>
                <Title>Cadastre-se Aqui</Title>
                <form>
                    <Input type="text" placeholder="Nome" required/>
                    <Input type="email" placeholder="Email" required/>
                    <Input type="password" placeholder="Senha" required/>
                    <Input type="password" placeholder="Confirme a Senha" required/>
                    <Button type="Submit">Cadastre-se</Button>
                </form>
                <Styledlink to="./Login">Já tem uma conta? Faça login</Styledlink>
            </CadastroBox>
        </Container>
    )
};

export default Cadastro;