import React, { useState,useEffect } from 'react';

// class HooksRevision extends React.Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             color: "red",
//             counter:0
//         }
//     }
//     render(){
//         return(
//             <div>
//                 <h2>Hooks Revision</h2>
//                 The color is {this.state.color}
//                 <br />
//                 <button onClick={()=>this.setState({color:"blue"})}>Change the color to blue</button>
//             </div>
//         )
//     }
// }

const HooksRevision = () => {

    // initialization
    const [color, setColor] = useState("red")
    const [count, setCount] = useState(0)

    useEffect(() => {
        let timer = setTimeout(()=>{
            setCount((myCount)=>myCount+1)
        },1000)
        return () => clearTimeout(timer)
    },[]);

    
    return(
        <div>
            <h2>Hooks Revision</h2>
            <div>
                <div>
                    <h3>useState</h3>
                    {/* read the value */}

                    The color is {color}

                    {/* Updating the value */}
                    <button onClick={()=>setColor("blue")}>Set color to blue</button>
                </div>
                <div>
                    <h3>useEffect</h3>
                    I've rendered {count} times!
                </div>
                

            </div>

        </div>
    )
}

export default HooksRevision