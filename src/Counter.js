// React Elements
import React from 'react';

// Redux
import { connect } from 'react-redux';

// ***************************************************


class Counter extends React.Component {
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' })
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' })
    }

    render() {
        return (
            <div className="counter">
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span className="count">{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter);



// **********************
// OLD REACT-ONLY VERSION
// **********************

// class Counter extends React.Component {
//     state = {
//         count: 0
//     };

//     increment = () => {
//         this.setState(state => ({
//             count: state.count + 1
//         }))
//     }

//     decrement = () => {
//         this.setState(state => ({
//             count: state.count - 1
//         }))
//     }

//     render() {
//         return (
//             <div className="counter">
//                 <h2>Counter</h2>
//                 <div>
//                     <button onClick={this.decrement}>-</button>
//                     <span className="count">{this.state.count}</span>
//                     <button onClick={this.increment}>+</button>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Counter;