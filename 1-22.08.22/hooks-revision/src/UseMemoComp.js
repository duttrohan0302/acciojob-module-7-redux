import React, { useState,useEffect,useMemo } from 'react';


const UseMemoComp = () => {

    // initialization
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([])

    // const calculation = expensiveCalculation(count);

    const calculation = useMemo(()=>expensiveCalculation(count),[count])
    const increment = () => {
        setCount(c=>c+1)
    }

    const addTodo = () => {
        setTodos((oldArray)=>[...oldArray,"New Todo"])
    }
    return(
        <div>
            <h2>useMemo</h2>
            <div>
                <h3>My Todos</h3>
                {
                    todos.map((todo,index)=>{
                        return <p key={index} >{todo}</p>
                    })
                }
                <button onClick={addTodo}>Add Todo</button>
                <hr />
                Count: {count}
                <button onClick={increment}>+</button>
                <h3>Expensive Calculation</h3>
                {calculation}
                

            </div>

        </div>
    )
}

const expensiveCalculation = (num) => {
    console.log("Calculating")
    for(let i=0;i<1000000000;i++){
        num+=1
    }
    return num;
}

export default UseMemoComp