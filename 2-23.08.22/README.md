## useContext Revision

1. Context - React Concept - Provider, Consumer
2. useContext - helps us use Consumer easily(still you have to use Provider)

## useReducer

### Reducer
- It's a function that takes 2 values and returns one value

### useReducer
- Takes currentState and action as input and returns stateName, dispatch as output
- Whatever we pass in dispatch is the action
- usually Action contains 2 properties
  - type => What type of action do you want to perform
  - payload => Any data you want to send, you send here
- Then after performing the action you return the new state

## Redux
### Packages
- Redux
  - It creates a global state for the whole application which can be used by any component
  - It's a state management library
  - You have only state for your whole app and not states for each of your components
- React-Redux
  - This is used so we can access Redux's data and modify it by sending actions to Redux (not exactly to Redux (dispatch))

### Concepts
- actions:
  - These are objects that should have 2 properties
  - One describing the type of action
  - Other one describing what should be changed in the app state
- reducers:
  - These are the functions that implement the behavior of the actions.
  - They change the state of the app based on the action description & state change description
- store:
  - It brings actions and reducers together, holding and changing the state for the whole app
  - There is only one store
  - We used createStore function from redux to create a store
  - For that we created and exported configureStore which takes a default state and we create the store using the created reducer and the default state
- connect
  - This connects our component to our redux store
  - Synatx export default connect(mapStateToProps, mapDispatchToProps)(App)
- mapStateToProps 
  - This is used to retrieve the store state
- mapDispatchToProps
  - This is used to retrieve the actions and dispatch them to the store
- Provider - imported from react-redux in index.js
    - We need to tell our react app that we have a global state
- CombineReducers 
  - Combines multiple reducers and gives the same property names inside which you have your state
  - state becomes {operate : {num: 5}, rotate: {rotating : true}}
  - Must provide initital state to reducers in this case