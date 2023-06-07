import React from 'react'
import styled from 'styled-components'
import image from './Image/illustration-working.svg'

export default function Maininfo() {
    const Wapper =styled.div `
    display:flex;
    width:1050px;
    margin:0 auto;
    ${'' /* background-color:red;  */}
    padding:8rem 0;
    @media(max-width:375px){
    display:initial;
    margin:0 auto;
    text-align:center;
    }
    `;

    const Left=styled.div `
    height:auto;
    width:auto;
    @media(max-width:375px){
    margin-top:80%;
    }
    `;

    const Heading= styled.h1 `
    font-size:70px;
    font-weight:700;
    color:#232127;
    line-height:80px;
    letter-spacing: -2px;
    @media(max-width:375px){
    font-size:40px;
    line-height:50px;
    }
    `;

    const Para =styled.p `
    width:60%;
    font-size: 1.2em;
    margin-top:0.5em;
    text-align: Left;
    line-height:27px;
    color:#bfbfbf;
    font-weight:500;
    @media(max-width:375px){
    width:90%;
    height:30%;
    margin:0 auto;
    text-align:center;
    }
    `;

    const Button =styled.button `
    color:#fff;
    font-weight:500;
    font-size: 0.9em;
    margin-top:2em;
    padding: 0.8em 2.5em;
    border:none;
    font-weight:700;
    border-radius:50px;
    background-color:#2acfcf;
    `;

    const Right=styled.div `
    margin-left:-350px;
    margin-top:-40px;
    width:20%;
    height:20%;
    @media(max-width:375px){
    margin-left:-20px;
    margin-top:0px;
    background-color:red;
    }
    `;

    const Image =styled.img `
    width:50%;
    height:auto;
    position:absolute;
    @media(max-width:375px){
    top:70px;
    width:90%;
    }
    `;
    return (
        <Wapper >
        <Left>
        <Heading>
                More than just<br/>Rajiv Rocksshorter links
            </Heading>
            <Para>Build your brand's recognition and get detailed insights on how your links are performing.</Para>
            <Button>Get Started</Button>
        </Left>
        <Right>
            <Image src={image} alt="" />
        </Right>
        </Wapper>
    )
}
