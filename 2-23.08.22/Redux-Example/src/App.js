import logo from './logo.svg';
import React from "react"
import './App.css';
import { connect } from "react-redux";
import { startAction } from "actions/startAction";
import { stopAction } from "actions/stopAction";
import { incrementAction } from "actions/incrementAction";
import { decrementAction } from "actions/decrementAction";

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <header className="App-header">
        <img 
          src={logo} 
          className={`App-logo ${props.rotate.rotating ? "" : "App-logo-paused"}`}
          // className={"App-logo" + (props.rotating ? "" : "App-logo-paused")}
          alt="logo" 
          onClick={
            props.rotate.rotating ?
              props.stopAction :
              props.startAction 
          }
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          Current Value : {
            props.operate.num
          }
          <br />
          <button onClick={props.incrementAction}>Increment by 1</button>
          <button onClick={props.decrementAction}>Decrement by 1</button>
        </div>
      </header>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction),
  incrementAction: () => dispatch(incrementAction),
  decrementAction: () => dispatch(decrementAction)
  
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
