import { useEffect, useState } from "react"
import styles from './CharacterList.module.css'
import CharacterItem from "./CharacterItem";

const baseUrl = 'https://api.gameofthronesquotes.xyz/v1';

const CharacterList = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();
    
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseUrl}/characters`, { signal: abortController.signal });
                const data = await response.json();
                setCharacters(data);
            } catch (error) {
                if (error.name === 'AbortError') {
                    console.log('Fetch aborted:', error.message);
                } else {
                    console.error('Fetch error:', error);
                }
            }
        };
    
        fetchData();
    
        return () => {
            abortController.abort();
        };
    }, []);
    // console.log(characters.map(character => console.log(character.house.name)));

    return (
        <>
            <h1>Characters in GoT:</h1>



            <div className="flex items-center justify-center bg-gray-200">
                <div className="flex flex-wrap justify-center gap-4" style={{ marginBottom: '4em', maxWidth: '1600px' }}>

                    {characters.map((character, index) =>
                        <CharacterItem
                            key={`${index}-${character.name}-${Math.random() * 1000}`}
                            id={character.slug}
                            name={character.name}
                            quote={character.quotes[0]}
                            house={character?.house?.name}

                        />)}
                </div>

            </div>

        </>
    )
}

export default CharacterList;