import { useState } from 'react'
import Header from './components/Header'
import Feature from './components/Feature'
import Amezing from './components/AmezingBanner'
import Customer from './components/Customer'
import Request from './components/Request'
import Footer from './components/Footer'

function App() {


  return (
    <>
      

      <div className="loader_bg">
      <div className="loader"><img src="images/loading.gif" alt="#" /></div>
      </div>
      
      <Header />
      <Feature />
      <Amezing />
      <Customer />
      <Request />
     <Footer />
  
    </>
  )
}

export default App
