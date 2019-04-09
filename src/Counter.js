import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0
    };

    render() {
        return (
            <div className="counter">
                <h2>Counter</h2>
                <div>
                    <button>-</button>
                    <span className="count">0</span>
                    <button>+</button>
                </div>
            </div>
        )
    }
}

export default Counter;