import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import GameList from "./components/game-list/GameList"
import GameCreate from "./components/games-create/GamesCreate"
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import GameDetails from "./components/game-details/GameDetails"

function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/games" element ={<GameList/>} />
      <Route path="/games/create" element ={<GameCreate/>} /> 
      <Route path="/games/:gameId" element ={<GameDetails/>} /> 
     </Routes>
    </>
  )
}

export default App
