import React, { useState,useCallback } from 'react';
import Todos from "./Todos"

const UseCallbackComp = () => {

    // initialization
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])


    const increment = () => {
        setCount(c=>c+1)
    }

    // const addTodo = () => {
    //     setTodos((oldArray)=>[...oldArray,"New Todo"])
    // }
    const addTodo = useCallback(()=>{
        setTodos((oldArray)=>[...oldArray,"New Todo"])
    },[todos]);
    
    return(
        <div>
            <h2>useMemo</h2>
            <div>
                <Todos todos={todos} addTodo={addTodo} />
                <hr />
                Count: {count}
                <button onClick={increment}>+</button>
            </div>

        </div>
    )
}


export default UseCallbackComp