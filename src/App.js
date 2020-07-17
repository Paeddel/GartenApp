import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";
class App extends Component {
  state = {
    counter_id: 0,
    counters: [],
    sum: 0
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  handleAdd = counterAdd => {
    const counter_id = this.state.counter_id + 1;
    const counters = this.state.counters.push({
      id: this.state.counter_id + 1,
      value: 1,
      counter_name: window.prompt("welches Item? ")
    });
    this.setState({ counter_id });
  };
  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  handleDeleteAll = counterDeleteAll => {
    const counter_id = 1;
    const counters = [];
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
          totalItems={this.state.counters.reduce((currentTotal, item) => {
            return item.value + currentTotal;
          }, 0)}
        />

        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onAdd={this.handleAdd}
            onDecrement={this.handleDecrement}
            onDeleteAll={this.handleDeleteAll}
            onSum={this.sumAllItems}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
