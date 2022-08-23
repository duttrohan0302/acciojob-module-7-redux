import './App.css';
import React,{useContext} from "react";

// const App = () => {
//   const user = {
//     name: "Rohan"
//   }
//   return(
//     <div>
//       <Comp1 user={user} />
//     </div>
//   )
// }

// const Comp1 = (props) => {
//   const user = props.user
//     return(
//       <Comp2 user={user}/>
//     )
// }

// const Comp2 = (props) => {
//   const user = props.user
//     return(
//       <Comp3 user={user}/>
//     )
// }

// const Comp3 = (props) => {
//   const user = props.user
//     return(
//       <Comp4 user={user}/>
//     )
// }

// const Comp4 = (props) => {
//   const user = props.user
//     return(
//       <div>The user is {user.name}</div>
//     )
// }

const UserContext = React.createContext();
const NumberContext = React.createContext();

const { Provider, Consumer } = UserContext;
const { Provider : NumProvider, Consumer: NumConsumer } = NumberContext;
// same as
// const Provider = NumberContext.Provider;
// const numProvider = Provider

const App = () => {
  const user = {
    name: "Rohan"
  }
  const myNum = {
    num: 5
  }
  return(
    <Provider value={user} >
      <NumProvider value={myNum} >
          <Comp1/>
      </NumProvider>
    </Provider>

  )
}

const Comp1 = () => {
    return(
      <Comp2 />
    )
}

const Comp2 = () => {
    return(
      <Comp3 />
    )
}

const Comp3 = () => {
    return(
      <div>
        <Consumer>
          {
            value => {
              return(
                <NumConsumer>
                  {
                    numValue=> <div> Inside Comp3 the value of username is {value.name} and number is {numValue.num}</div>
                  }
                </NumConsumer>
              )
            }
          }
        </Consumer>
        <Comp4 />

      </div>
    )
}

const Comp4 = () => {
    return(
      // <Consumer>
      //   {
      //     user => <div>The user is {user.name}</div>
      //   }
      // </Consumer>
      <div>
        <Comp5 />
      </div>
    )
}

const Comp5 = () => {
  const user = useContext(UserContext)
  const numValue = useContext(NumberContext)
  return(
    <div>
      The user in Comp 5 is {user.name} and number is {numValue.num}
    </div>
  )
}

export default App;