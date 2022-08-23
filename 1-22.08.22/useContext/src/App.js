import './App.css';
import React,{useContext} from "react";

const NumberContext = React.createContext();
const UserContext = React.createContext();

function App() {
  const data = {
    name:"Rohan"
  }
  // return (
  //   <div>
  //     <h1>Use Context Hooks</h1>
  //     <Comp1  data={data}/>
  //   </div>
  // );
  return(
    <NumberContext.Provider value={data}>
    <UserContext.Provider value={{userPhone:"123456"}}>
      <div>
        <Display />
        <Comp1 />
      </div>
      </UserContext.Provider>
    </NumberContext.Provider>


  )
}

function Display(){
  return (
    <NumberContext.Consumer>
      {
        value=> <div>The value name is {value.name}</div>
      }
    </NumberContext.Consumer>
  )
}

const Comp1 = () => {
    return(
      <Comp2 />
    )
}
const Comp2 = () => {
  const value = useContext(NumberContext)
  const user = useContext(UserContext)
  return(
    <div>
      <h2>Inside comp2</h2>
        The value is {value.name} and Phone is {user.userPhone}
      <h2> comp2 finish</h2>
      <Comp3  />

    </div>
  )
}


// Unnecessary complexity because of Consumer - Simplified approach above using useContext
const Comp3 = () => {
  return(
    <>
        <NumberContext.Consumer>
      {
        value=>
          <UserContext.Consumer>
            {
              user=><div>The answer is {value.name} and phone is {user.userPhone}</div>
            }
          </UserContext.Consumer>
      }
    </NumberContext.Consumer>

    </>

  )
}


export default App;
