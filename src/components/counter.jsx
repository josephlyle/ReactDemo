import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
  };

  render() {
    return (
      <React.Fragment>
        {/* generates a random 200px img */}
        <img src={this.state.imageUrl} alt="" /> {/* now do the buttons */}
        <span className={this.getAlertClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  getAlertClasses() {
    let classes = "alert m-2 alert-";
    classes += this.state.count === 0 ? "primary" : "success";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
