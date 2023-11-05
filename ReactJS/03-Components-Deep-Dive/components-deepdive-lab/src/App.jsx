import { useEffect, useState } from 'react';
import GoT from './GoT';
import './App.css'

function App() {
    let [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    let [arrState, setArrState] = useState(false);


    useEffect(() =>{
        console.log('Component Mounted');
    }, [])

    useEffect(()=>{
        console.log('Component Updated');
    },[numbers])


    const onClick = () => {
        if (numbers.length > 0){
            setNumbers(oldState => oldState.slice(1));
        } else {
            setArrState(arrState => arrState = true)
        }
    }

    return (
        <>
            <ul>
                {numbers.map((number, index) => <li key={index}>{number * 2}</li>)}
            </ul>

            <button onClick={onClick}>Remove</button>
            <p>{arrState ? 'You cannot longer remove!' : null}</p>


            <GoT></GoT>
        </>
    )

    // let numbers = [1, 2, 3, 4, 5, 6];
    // let doubledArr = numbers.map((number, index) => <li key={index}>{number * 2}</li>);
    // let [doubled, setDoubled] = useState(doubledArr);

    // function onClick(){
    //   setDoubled(state => state.slice(1))
    // }

    // return (
    //   <>
    //     <ul>
    //       {doubled}
    //     </ul>

    //     <button onClick={onClick}>Remove</button>
    //   </>
    // )
}

export default App
