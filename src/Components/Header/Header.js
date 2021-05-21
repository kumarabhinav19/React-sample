import {React} from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import Images from './Images/menu-line.png'


function Header() {

const Navigation =styled.div `
display:flex;
justify-content: space-between;
align-items: center;
width:100%;
height:60px;
padding:3rem 10em;
${'' /* background-color:red; */}
@media(max-width:375px){
    ${'' /* width:79%; */}
    padding:0 1rem;
    }
`;

const Barimg=styled.img `
display:none;
@media(max-width:375px){
  display:initial;
  margin-left:50px;
    }
`;
const HeadingLinks =styled.div `
display:flex;
justify-content: space-between;
align-items: center;
width:100%;
@media(max-width:375px){
    display:none;
    }
`;

const Header =styled.h1`
    color:#232127;
    margin-right:1em;
    align-item:center;
    @media(max-width:375px){

    }
`;

const Links=styled.div `
display:flex;
justify-content: space-between;
align-items: center;
@media(max-width:375px){
display:none
}
`;

const StyledLink = styled(NavLink)`
&:hover{
    color:#232127;
}
  color:#9e9aa7;
  font-weight:700;
  text-decoration: none;
  font-size:12px;
  margin: 0.5rem;
  position: relative;
  outline:none;

`;

const Button = styled.button`
  &:nth-child(2){
    color:#fff;
    padding: 0.7em 2em;
    background-color:#2acfcf;
  }
  color:#9e9aa7;
  font-size: 0.6em;
  font-weight:700;
  margin: 1em;
  border-radius: 50px;
  background:none;
  border:none;
  outline:none;
  @media(max-width:375px){
display:none
}
`;

    return (
        <div>
            <Navigation>
                <Header>Shortly</Header>
                <Barimg src={Images} alt="" />
                <HeadingLinks>
                <Links>
                <StyledLink to="#">Features</StyledLink>
                <StyledLink to='#'>Pricing</StyledLink>
                <StyledLink to='#'>Resources</StyledLink>
                </Links>
               <div>
                   <Button>Login</Button>
                   <Button primary>Sign Up</Button> 
               </div>
                </HeadingLinks> 
            
            </Navigation>
        </div>
    )
}

export default Header
