import Timer from './components/Timer'
import Header from './components/Heading'
import Counter from './components/Counter'
import Movies from './components/MovieList'
import NameField from './components/NameField'
import moviesData from './assets/movies'
import './App.css'

function App() {




  return (
    <>
    <Header></Header>
    <Timer></Timer>
    <Counter></Counter>
    <Movies movies ={moviesData} headingText="Movie List"></Movies>
    <NameField />
    </>
  )
}

export default App
 