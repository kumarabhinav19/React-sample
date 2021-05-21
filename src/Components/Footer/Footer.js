import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import facebook from './Images/icon-facebook.svg'
import twitter from './Images/icon-twitter.svg'
import pinterest from './Images/icon-pinterest.svg'
import instagram from './Images/icon-instagram.svg'



function Footer() {
    const Wapper =styled.div `
    display:flex;  
    width:100%;
    padding:3rem 7rem;
    background-color:#232127;
    color:#fff;
    @media(max-width:375px){
    display:row;
    padding:6rem 7rem;

    }
    `;
    const FooterHeabing=styled.h1 `
    @media(max-width:375px){
    margin-top:-60%;
    }
    `;
    const Links =styled.div `
    display:flex;  
    margin-left:20%;
    @media(max-width:375px){
        display:initial;
        margin-left:-70%;
    }
    `;
    const StyledLink =styled(NavLink) `
    display:block;
    text-decoration:none;
    color:#bfbfbf;
    font-size:13px;
    margin-top:8px;
    @media(max-width:375px){
        text-align:center;
    }
    `;
    const Resources=styled.div `
    margin-left:35%;
    @media(max-width:375px){
        margin-left:0%;
        margin-top:20%;
    }
    `;
    const Company=styled.div `
    margin-left:35%;
    @media(max-width:375px){
        margin-left:0%;
        margin-top:20%;

    }
    `;
    const Icons =styled.div `
    margin-top:10px;
    margin-left:35%;
    width:22px;
    height:22px;
    display:flex;
    @media(max-width:375px){
        margin-left:0%;
        margin-top:20%;

    }

    `;
    const IconImg =styled.img `
    margin-right:20px;
    @media(max-width:375px){
    margin-right:10px;

    }
    `;
    return (
        <Wapper>
        <div>
            <FooterHeabing>Shortly</FooterHeabing>
        </div>
            <Links>
                <div>
                    <h3>Features</h3>
                    <StyledLink to="#">Link Shortening</StyledLink>
                    <StyledLink to="#">Branded Links</StyledLink>
                    <StyledLink to="#">Analytics</StyledLink>
               </div>
               <Resources>
                    <h3>Resources</h3>
                    <StyledLink to="#">Blog</StyledLink>
                    <StyledLink to="#">Developers</StyledLink>
                    <StyledLink to="#">Support</StyledLink>
               </Resources>
               <Company>
                    <h3>Company</h3>
                    <StyledLink to="#">About</StyledLink>
                    <StyledLink to="#">Our Team</StyledLink>
                    <StyledLink to="#">careers</StyledLink>
                    <StyledLink to="#">contact</StyledLink>
               </Company>
               <Icons>
                   <IconImg src={facebook} alt="" />
                   <IconImg src={twitter} alt="" />
                   <IconImg src={pinterest} alt="" />
                   <IconImg src={instagram} alt="" />
               </Icons>
            </Links>
        </Wapper>
    )
}

export default Footer
