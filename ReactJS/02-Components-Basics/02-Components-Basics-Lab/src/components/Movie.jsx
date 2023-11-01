export default function Movie(props) {
    console.log(props)
    return (
        <>
            <ul>
                <h4>{props.movie.Title}</h4>
                <li>Genre: {props.movie.Genre}</li>
                <li>Metascore: {props.movie.Metascore}</li>
                <li>Rated: {props.movie.Rated}</li>
                <li>Released Date: {props.movie.Released}</li>
                <li>RunTime: {props.movie.Runtime}</li>
            </ul>
        
           

        </>
    );
}