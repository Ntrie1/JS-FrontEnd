import { useState } from "react";

export default function Timer() {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)


    setTimeout(() => {
        setSeconds(seconds + 1)

        if (seconds >= 59) {
            setSeconds(0);
            setMinutes(minutes + 1);
        }
    }, 1000);

    return (
        <>

            <h3>Timer:</h3>
            <p>the passed time is: {minutes < 10 ? '0' + minutes : minutes}m:{seconds < 10 ? '0' + seconds : seconds}s</p>

        </>
    );
}