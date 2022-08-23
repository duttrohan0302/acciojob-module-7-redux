import './App.css';
import React,{useRef, useReducer} from "react";

const ShoppingList = () => {

    const inputRef = useRef();

    const [items, dispatch] = useReducer((state,action)=>{
        /*
        action={
            type: "Some type",
            payload: "Some data"
        }
        */
        switch(action.type){
            case 'add':
                return [...state,{
                    id: state.length,
                    name: action.payload.name
                }]
            case 'deleteItem':
                return state.filter((item,index)=>index!==action.payload.index)
            default:
                return state
        }
    },[])
    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            name: inputRef.current.value
        }
        const action = {
            type: 'add',
            payload: payload
        }
        dispatch(action)
        inputRef.current.value = ''

    }

    return(
        <div>
            <h1>
                Shopping List
            </h1>
            
                <div >
                    <input type="text" ref={inputRef}/>
                    <button onClick={handleSubmit}>Add Item</button>
                </div>
                <ul>
                    {
                        items.map((item,index)=>(
                            <li key={item.id}>
                                {item.name}
                                <button
                                    onClick={()=>dispatch({type:'deleteItem',payload:{index:index}})}
                                >
                                    X
                                </button>
                            </li>
                        ))
                    }
                </ul>
        </div>
    )
}

export default ShoppingList