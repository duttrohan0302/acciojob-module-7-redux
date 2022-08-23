import './App.css';
import React,{useReducer} from "react";

const App = () => {

  // let numbers = [1,2,3];

  // let sum = numbers.reduce((total, num)=>{
  //   return total+num;
  // },0)
  // initially, total = 0;
  // total = 0, num = 1 => total = 1,
  // total = 1, num = 2 => total = 3
  // total = 3, num =3 => total = 6 => sum = 6

  // const [sum, dispatch] = useReducer((state,action)=>{
  //   const newState = state+action;
  //   return newState
  // },0)

  const [sum, dispatch] = useReducer((state,action)=>{
    if(action.operation==='+'){
      return state+action.value
    }else if(action.operation==='-'){
      return state-action.value;
    }else{
      return state;
    }
  },0)

  return(
    <div>
      <h1>Reducer</h1>
      Current Sum : {sum}
      <br />
      <button onClick={()=> dispatch({operation:'+',value:1})}>
        Add 1
      </button>
      <button onClick={()=> dispatch({operation:'-',value:1})}>
        Subtract 1
      </button>

    </div>
  )
}


export default App;