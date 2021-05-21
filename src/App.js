import React, { Component,Fragment } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from './Components/Header/Header'
import MainInfo from './Components/Maininfo/Maininfo'
import Information from './Components/Information/Information'
import BoostLink from './Components/BoostLinkSection/GetStarted'
import Footer from './Components/Footer/Footer'

 class App extends Component {
  // componentDidMount(){
  //   axios
  //     .get("info", {
  //       headers: {token: 'this is normal token'}
  //     })
  //     .then((response) => this.setState({posts: response.data}))
  //     .catch((err) => console.log(err.response));
  // }
  render() {
    return (
      <Fragment>
      <BrowserRouter>
        <Header/>
        <MainInfo/>
        <Information/>
        <BoostLink/>
        <Footer/>
      </BrowserRouter>
      </Fragment>
    )
  }
}

export default App
