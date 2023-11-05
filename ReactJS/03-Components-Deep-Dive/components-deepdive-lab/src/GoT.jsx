import { useEffect, useState } from "react"
import HousesList from "./HousesList"

export default function GoT() {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        fetch(`https://api.gameofthronesquotes.xyz/v1/houses`)
            .then((res) => res.json())
            .then((data) => {
                setHouses(data);
            })
    }, [])

    return (
        <>
            <h1>Game of Thrones houses:</h1>
            <ul>
            <HousesList houses={houses} />
            </ul>
        </>
    )
}