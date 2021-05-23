import React,{useState} from 'react'
import styled from 'styled-components'
import shorten from './Image/bg-shorten-desktop.svg'
import Mobileshorten from './Image/bg-shorten-mobile.svg'
import brand from './Image/icon-brand-recognition.svg'
import detail from './Image/icon-detailed-records.svg'
import fully from './Image/icon-fully-customizable.svg'
import axios from "../../utils/axiosconfiguration";




function Information() {
const initialState={
    data:[

    ],
    url:''
};
const [state,setstate] =useState(initialState);
let apicall= ()=>{
    axios
        .post("/shorten?url="+state.url,state.url)
        .then((response) =>{
            let copyData =[...state.data]
             copyData.push(response.data.result)
            setstate((ps)=>({
                ...ps,
                data:copyData
            }))
            getUrl(response.data.result.code)

        })
        .catch((err) => console.log(err.response));
};
let getUrl=(code)=>{
    axios
    .get("/info?code="+code)
    .then((response) => {
        console.log(response)

    })
    .catch((err) => console.log(err.response));
}

let onchangeurl =(e)=>{
 e.persist()
setstate((ps)=>({...ps,[e.target.name]:e.target.value}))
}
    const Wapper =styled.div `
    width:100%;
    margin-top:10%;
    background-color:#f3f3f3; 
    padding:5rem 8rem;
    @media(max-width:375px){
    margin-top:50%;
    text-align:center;
    padding:0rem 2rem;
    }
    `;

    const InputBackground = styled.div `
    margin-top:-13%;
    margin-bottom:10px;
    float: left;
    width:100%;
    padding:2rem 0;
    border-radius:8px;
    text-align: center;
    background-color:#3b3054;
    background-position: center;
    background-size: cover;
    background-image: url(${shorten});
    @media(max-width:375px){
    margin-top:-20%;
    padding:1rem 0;
    background-image: url(${Mobileshorten});
    }
    `;

    const Input = styled.input `
    width:70%;
    padding: 0.8em 3em;
    border-radius:7px;
    border:2px solid #f3f3f3;
    outline:none;
    @media(max-width:375px){
    padding: 0.8em 0.3em;
    width:90%;
    }
    `;
    const Button=styled.button `
    width:150px;
    height:45px;
    color:#ffff;
    margin-left:40px;
    border:none;
    border-radius:7px;
    background-color:#2acfcf;
    @media(max-width:375px){
    margin-left:0px;
    margin-top:30px;
    width:90%;
    }
    `;

    const ShortenLink=styled.div `
    display:flex;
    justify-content: space-between;
    align-items: center;
    clear: both;
    font-size:8px;
    margin-top:10px;
    width:100%;
    height:50px;
    border-radius:8px;
    background-color:#fff;
    padding:0 2rem;
    @media(max-width:375px){
    display:block;
    margin-top:-20%;
    padding:4rem 5rem;
    text-align:center;
    }
    `;

    const ShortenButton=styled.button `
    width:100px;
    height:30px;
    font-size:12px;
    color:#ffff;
    margin-left:40px;
    border:none;
    border-radius:7px;
    background-color:#2acfcf;
    @media(max-width:375px){
     margin-left:0px;
    margin-top:10px;
     
    `;
   const ShortenHeading= styled.h1 `
    color:#2acfcf;
    margin-left:50%;
    @media(max-width:375px){
    margin-top:10px;
    text-align:center;
    margin-left:0%;
    }
    `;
    const Fullylink=styled.h1 `
     @media(max-width:375px){
    margin-top:-30%;
    text-align:center;
    margin-left:-10%;

    }
    `;
    const Content =styled.div `
    clear: both;    
    padding:4rem 0 0 0;
    text-align: center;
    `;

    const ContentHeading=styled.h1 `
    font-weight:700;
    font-size:2.2rem;
    color:#232127;
    `;

    const ContentPara=styled.p `
    text-align: center;
    margin-left:30%;
    width:40%;
    color:#bfbfbf;
    margin-top:15px;
    @media(max-width:375px){
    width:100%;
    margin-left:0%;

    }
    `;
    const Line=styled.div `
    margin-top:25%;
    z-index: 1;
    border: 3px solid #2acfcf;
    @media(max-width:375px){
    display:initial;
    border:none;
    border-left: 6px solid #2acfcf;
    height: 900px;
    position: absolute;
    left: 50%;
    margin-left: -3px;
    ${'' /* margin-top:30%; */}
    z-index: 0;
    }
    `;

    const Cards=styled.div `
    margin-top:-10%;
    display:flex;
    width:100%;
    text-align: center;
    @media(max-width:375px){
        display:initial;
        position:relative;
    }
    `;

    
    const Card =styled.div `
    &:nth-child(1){
    margin-top:-4%;
    margin-right:30px;
    }
     &:nth-child(3){
    margin-top:4%;
    margin-left:30px;
    }
    position:relative;
    padding:4rem 2rem;
    width:33%;
    height:20%;
    text-align:left;
    border-radius:5px;
    background-color:#fff;
    @media(max-width:375px){  
    width:100%;
    &:nth-child(3){
    margin-top:30%;
    margin-left:0px;
    }
    &:nth-child(2){
    margin-top:30%;
    margin-right:0px;
    }
    &:nth-child(1){
    margin-top:30%;
    margin-right:0px;
    }
    }
    `;
    
    const Circle =styled.div `
    position:absolute;
    top:-15%;
    left:10%;
    width:80px;
    height:80px;
    border-radius:50%;
    background-color: #3b3054;
    display:flex;
    justify-content:center;
    align-items:center;
    @media(max-width:375px){
    left:50%;
    transform:translate(-50%,0%)
    }
    `;

    const Cardpara=styled.p `
    color:#bfbfbf;
    `;

    return (
        <Wapper>
        <InputBackground>
        <Input 
        name='url'
        value={state.url} 
        onChange={onchangeurl}
        type="text" 
        placeholder="Shorten a link here"/>
        <Button onClick={apicall}>Shorten It!</Button>
        </InputBackground>
         {state.data.map((d)=>
         <ShortenLink>
         <Fullylink>{d.full_short_link}</Fullylink>
         <ShortenHeading>{d.short_link}</ShortenHeading>
         <ShortenButton>Copy</ShortenButton>
         </ShortenLink>)}
        <Content>
        <ContentHeading>Advanced statistics</ContentHeading>
        <ContentPara>Track how your links are performing across the web with our advanced statistics dashboard.</ContentPara>
        </Content>
        <Line></Line>
        <Cards>
        <Card>
        <Circle>
            <img src={brand} alt="" />
        </Circle>
        <h3>Brand Recognition</h3>
        <Cardpara>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content. </Cardpara>
        </Card>
        <Card>
        <Circle>
            <img src={detail} alt="" />
        </Circle>
        <h3>Detailed Records</h3>
        <Cardpara>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content. </Cardpara>
        </Card>
        <Card>
        <Circle>
            <img src={fully} alt="" />
        </Circle>
        <h3>Fully Customizable</h3>
        <Cardpara>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content. </Cardpara>
        </Card>
        </Cards>
        </Wapper>
    )
}

export default Information
