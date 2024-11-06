import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount() {
    console.log("Counter montado");
  }

  componentDidUpdate() {
    console.log("Counter actualizado");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Contador: {this.state.count}</p>
        <button onClick={this.increment}>Incrementar</button>
      </div>
    );
  }
}

export default Counter;
