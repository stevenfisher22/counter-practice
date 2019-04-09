// React Elements
import React from 'react';

// Redux
import { connect } from 'react-redux';

// Imported Action Creators
import { increment, decrement } from './index';

// ***************************************************


class Counter extends React.Component {
    increment = () => {
        this.props.increment()
    }

    decrement = () => {
        this.props.decrement()
    }

    // OLD WAY BEFORE 'mapDispatchToProps'
    // decrement = () => {
    //     this.props.dispatch(decrement())
    // }

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

// MAP STATE TO PROPS
function mapStateToProps(state) {
    return {
        count: state.count
    }
};
// MAP DISPATCH TO PROPS
// Maps the Action Creators to Props, pre-binding them to the Dispatch function already passed in as a Prop
const mapDispatchToProps = {
    increment: increment,
    // In ES6, if the key and value are the same you don't have to name both separately (decrement: decrement)
    decrement
};

// CONNECT connects the Store to this Component (Counter) and then you can make functions to pull what you need
// from state in (In this case: 'count' from State and the Action Creators 'increment' and 'decrement')
export default connect(mapStateToProps, mapDispatchToProps)(Counter);



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