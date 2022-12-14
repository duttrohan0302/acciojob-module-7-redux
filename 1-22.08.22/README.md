Hi people,

I am Rohan
I am going to take your class today


We'll start by 8:10-15

- Revision of React Hooks
- useContext & useReducer
- Redux Intro 

## useState
Input - Default value
Output - A variable & a func which can change the variable

## useEffect
1. No dependency passed - Infinite rendering(Reruns on every render)
2. An empty array is passed as the dependency array - Only on initial render
3. props or state values are passed

## useRef
- The useRef hook allows us to persist values between renders
- It does not cause re-renders
- Can be used a DOM element directly (e.g. inputElementRef.focus)

## useMemo
- Used to memoize expensive functions

## useCallback
- Even if we use memo(ChildComponent) which has a function being sent down as props from the parent
- Whenever parent re-renders, functions are recreated which re-renders the child component as well
- Even if directly no change is happening there

## useContext
- We create a new context(stored it in Number Context)
- This is an object with 2 properties - Provider, Consumer
- Rendering the NumberContext.Provider with some contents, & passing value prop to it. 
- This will make sure that this "value" is available to all of its descendants(and so on)
- You can use this with the consumer inside the Display
- useContext simplifies the approach by not needing to use Consumer which is a lifesaver when it comes to Nested Consumers