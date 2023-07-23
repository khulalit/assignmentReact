import { Component } from 'react'
import ButtonComponent from '../Button';
import './style.css'

interface CounterState {
    count: number;
  }
  
export default class CounterComponent extends Component<{}, CounterState> {

    constructor(props: {}) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    increment = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1
      }));
    };
  
    decrement = () => {
      this.setState((prevState) => ({
        count: prevState.count - 1
      }));
    };

    render(){
        const { count } = this.state;
        return <div className='counterMain'>
            Count is : {count}
            <ButtonComponent label='Increment' onClickHandler={this.increment}/>
            <ButtonComponent label='Decrement' onClickHandler={this.decrement}/>
        </div>
    }
}
