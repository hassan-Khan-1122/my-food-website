

 

import React from 'react'

import Header from './componens/Header'
 import Footer from './componens/Footer'
 import { BrowserRouter, Routes,Route } from 'react-router-dom'
 import Menu from './componens/Menu'
 import Slidres from './componens/Slidres'
 import Form from './componens/Form'
import About from './componens/About'
import Home from './componens/Home'

export default function App() {
  return (
    <div>
      <div>
      <BrowserRouter>
      <Header/>
      <Routes>
   <Route path='/' element ={<Home/>} />
   <Route path='/Menu' element ={<Slidres/>} />
   <Route path='/Offer' element ={<Menu/>} />
   <Route path='/Form' element ={<Form/>} />
   <Route path='/About' element ={<About/>} />
 </Routes>
 <Footer/>
</BrowserRouter>
  </div> 
    </div>
  )
}













 