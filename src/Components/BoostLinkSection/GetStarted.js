import React from 'react'
import styled from 'styled-components'
import boost from './Image/bg-boost-desktop.svg'
import Mobileboost from './Image/bg-boost-mobile.svg'


function GetStarted() {
    const Wapper=styled.div `
    padding:3rem;
    text-align: center;
    background-color:#3b3054;
    background-position: center;
    background-size: cover;
    background-image: url(${boost});
    color:#fff;
    font-size: 20px;
    @media(max-width:375px){
    background-image: url(${Mobileboost});

    }
    `;
    const Button =styled.button `
    font-size: 15px;
    font-weight:700;
    margin-top: 2em;
    border-radius: 50px;
    background:none;
    border:none;
    outline:none;
    color:#fff;
    padding: 1em 3.5rem;
    background-color:#2acfcf;
    `;
    const StyleHeading=styled.h1 `
    @media(max-width:375px){
        font-size:20px
    }
    
    `;
    return (
        <Wapper>
            <StyleHeading>Boost your links today </StyleHeading>
            <Button>Get Started</Button>
        </Wapper>
    )
}

export default GetStarted
