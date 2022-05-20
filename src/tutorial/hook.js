import React,{useState} from 'react';


function Counter(){
    let [count, setCount] = useState(0);

    return(
        <>
        <h1>hasil count {count}</h1>
        <button onClick={() => {setCount(count+1)}}>click me</button>
        </>

    )
}

export default Counter;