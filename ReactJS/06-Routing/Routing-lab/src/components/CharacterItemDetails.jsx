import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



const CharacterItemDetails = ({ }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState([]);
    // console.log(`this is the id => ${id}`);

    useEffect(() => {
        fetch(`https://api.gameofthronesquotes.xyz/v1/character/${id}`)
            .then(res => res.json())
            .then(setCharacter)
            .catch((err) => {
                navigate('/404')
            })
    }, [id])

    console.log(character.map(x => console.log([...x.quotes])));
    return (
        <div>
            <h2>{character.name}</h2>
            <ul>
        <h3>All of their famous quotes:</h3>
        {character.map(x => (
          x.quotes.map((quote, index) => (
            <li key={index}>{quote}</li>
          ))
        ))}
      </ul>
        </div>
    );

}

export default CharacterItemDetails;