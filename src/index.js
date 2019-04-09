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

// Action Constants
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

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