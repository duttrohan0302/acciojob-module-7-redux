import React, {useState,useEffect} from "react"
import axios from "axios"
const RandomQuote = () => {

    const [quote,setQuote] = useState("")


    const generateQuote = async() => {
        try{
            const data = await axios.get("http://api.quotable.io/random")
            
            setQuote(data.data.content)
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        generateQuote()
    },[])
    return(
        <div>
            <h3>Random Quotes Generator</h3>
            <h4>Quote: {quote}</h4>
            <button onClick={()=>generateQuote()}>Generate</button>
        </div>
    )
}

export default RandomQuote