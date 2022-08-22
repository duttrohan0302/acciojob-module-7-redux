import React, {useRef,useState,useEffect} from "react"
const Ref = () => {

    const [inputValue,setInputValue] = useState("")

    const previousInputValue = useRef("")

    useEffect(()=>{
        previousInputValue.current = inputValue
    },[inputValue])

    const count = useRef(0);
    const inputElement = useRef();

    const focusInput = ()  => {
        inputElement.current.focus()
    }

    // count = {
    //     current: 0
    // }
    // useEffect(() => {
    //     count.current = count.current +1
    // });


    return(
        <div>
            <h3>Ref</h3>
            <h1>Render Count: {count.current}</h1>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus on Input</button>

            <input type="text" value={inputValue}
                onChange = {(e)=>setInputValue(e.target.value)}
            />
            <h5>Current Value: {inputValue}</h5>
            <h5>Previous Value: {previousInputValue.current}</h5>
        </div>
    )
}

export default Ref