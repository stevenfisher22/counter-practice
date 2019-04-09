// React Elements
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Counter from './Counter';

// Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// CSS
import './index.css';

// ********************************************************

// ACTION CONSTANTS
// Variables named to make it easier than writing/copying the string all over the app
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// ACTION CREATORS
// Functions that return these Action objects so we don't have to manually write them all over the app 
export function increment() {
    return { type: INCREMENT };
};
export function decrement() {
    return { type: DECREMENT };
};

// Initial State
const initialState = {
    count: 0
};

// Reducer
function reducer(state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            };
        case DECREMENT:
            return {
                count: state.count - 1
            };
        default: 
            return state;
    }
}

// Redux Stote 
const store = createStore(reducer);


const App = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))