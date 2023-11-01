import Movie from "./Movie"

export default function Movies(props){
   console.log(props)   
   
   return(
        <>
        <h1>{props.headingText}</h1>
        <Movie movie = {props.movies[0]}></Movie>
        <Movie movie = {props.movies[1]}></Movie>
        <Movie movie = {props.movies[2]}></Movie>
        <Movie movie = {props.movies[3]}></Movie>
        <Movie movie = {props.movies[4]}></Movie>
        <Movie movie = {props.movies[5]}></Movie>
        </>
    )
}