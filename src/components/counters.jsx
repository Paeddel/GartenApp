import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onAdd,
      onDecrement,
      onDeleteAll
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m2">
          Reset
        </button>
        <button onClick={onAdd} className="btn btn-warning btn-sm m-2">
          Add
        </button>
        <button onClick={onDeleteAll} className="btn btn-danger btn-sm m-2">
          Delete All
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
