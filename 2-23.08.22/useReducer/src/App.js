import './App.css';
import React from "react";
import ReducerExample from './useReducerSimpleExample';
import ShoppingList from './ShoppingList';

const App = () => {

    return(
        <div>
            <ReducerExample />
            <ShoppingList />
        </div>
    )
}

export default App