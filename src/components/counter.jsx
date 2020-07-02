import React, { Component } from "react";

export default class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    return (
      <div>
        <span className={this.getAlertClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter, true)}
          className="btn ml-3 mr-1 btn-secondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onIncrement(this.props.counter, false)}
          className="btn mr-3 btn-secondary btn-sm"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Remove
        </button>
      </div>
    );
  }

  getAlertClasses() {
    let classes = "alert ml-5 pb-2 pt-2 alert-";
    classes += this.props.counter.value === 0 ? "primary" : "success";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}
