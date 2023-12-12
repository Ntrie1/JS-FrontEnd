import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import CharacterList from './components/CharacterList'
import CharacterItemDetails from './components/CharacterItemDetails'
import NotFound from './components/NotFound'
import Login from './components/Login'
import Footer from './components/Footer'
import Register from './components/Register'

 
function App() {

  return (
    <>

   <Navigation />
<div className="content">


   <Routes>
    <Route path='/' element ={<Home/>} />
    <Route path='/login' element = {<Login/>} />
    <Route path='/register' element = {<Register/>} />
    <Route path='/about' element ={<About/>} />
    <Route path='/characters' element={<CharacterList />} />
    <Route path='/characters/:id' element={<CharacterItemDetails />} />
    <Route path='*' element={<NotFound/>} />
   </Routes>
 
 
  <Footer />
</div>

    </>
  )
}

export default App
