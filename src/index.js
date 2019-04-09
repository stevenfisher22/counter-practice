// React Elements
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Counter from './Counter';

// CSS
import './index.css';


const App = () => {
    return (
        <div>
            <Counter />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))