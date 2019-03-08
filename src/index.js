import React, {Component} from 'react'
import clapping from './images/clapping.png'
import './styles/clap.css';

export default class ReactClapFeedback extends Component {
  constructor(props) {
    super();
    this.state = {
      counter:0
    }
    
  }

  incrementCounter() {
    this.setState((state, props)=>{
      return {
        counter: state.counter + 1
      }

    });
  }



  render() {
    const counter = this.state.counter;

    return <div className="container">
      <div><img src={clapping} className="size" onClick={(e)=>this.incrementCounter(e)}></img></div>
      <div className="counter">{counter}</div>
    </div>
  }
}
