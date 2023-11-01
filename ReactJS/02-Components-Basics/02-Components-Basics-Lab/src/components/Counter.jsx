import { useState } from 'react'

export default function Counter(){
    const [count, setCount] = useState(0)

    let message = null;

    if(count == 0){
        message = 'Start incrementing!'
    }
    else if(count == 100){
        message = 'Oops a hundred!!!'
        alert('You have reached 100. Do you wanna continue?')
    }
    else if(count <= 0){
        message = 'INVALID NUMBER!!!'
    }
    else {
        message = 'Keep on incrementing...'
    }

    return(
        <div>

        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>clear</button>
        <button onClick={() => setCount(count + 1)}>+</button>
        <h2>{message}</h2>
        <p>count: {count}</p>
      </div>
    )
}