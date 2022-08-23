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