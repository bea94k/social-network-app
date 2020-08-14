import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        <h2>Your score: {this.props.count}</h2>
        <button onClick={this.props.onIncCounter}>Click to win!</button>
        <button onClick={this.props.onDecrCounter}>Click to lose!</button>
        <button onClick={this.props.onIncByVALUE}>
          Click to win quickly (+5)!
        </button>
        <button onClick={this.props.onDecrByVALUE}>
          Click to lose quickly (-5)!
        </button>
        <button onClick={this.props.onReset}>Click to reset!</button>
        <div>
          <button onClick={this.props.onStoreResult}>Save your result</button>
        </div>
        <ul>
          {this.props.storedResults.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter,
    storedResults: state.results,
  };
};

// actions
const mapDispatchToProps = (dispatch) => {
  return {
    onIncCounter: () => dispatch({ type: "INCREMENT" }),
    onDecrCounter: () => dispatch({ type: "DECREASE" }),
    onIncByVALUE: () => dispatch({ type: "INCREASE_BY_VALUE", value: 5 }),
    onDecrByVALUE: () => dispatch({ type: "DECREASE_BY_VALUE", value: 5 }),
    onReset: () => dispatch({ type: "RESET" }),
    onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
    onDeleteResult: () => dispatch({ type: "DELETE_RESULT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
