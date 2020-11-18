import React from 'react';

export default class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      counter: this.props.initial_value
    };
  }

  increment(){
    this.setState((prev_state) => {
      return {
        counter: prev_state.counter + 1
      };
    });
  }

  decrement(){
    if (this.state.counter > this.props.initial_value)
      this.setState((prev_state) => {
        return {
          counter: prev_state.counter - 1
        };
      });
  }

  render(){
    return (
      <div>
        <span>{ this.state.counter }</span>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}