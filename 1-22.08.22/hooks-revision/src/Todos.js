import React,{memo} from "react";

const Todos = ({todos, addTodo}) => {
    console.log("Child Render")
    return(
        <div>
            <h3>My Todos</h3>
                {
                    todos.map((todo,index)=>{
                        return <p key={index} >{todo}</p>
                    })
                }
                <button onClick={addTodo}>Add Todo</button>
            
        </div>
    )

}

export default memo(Todos);