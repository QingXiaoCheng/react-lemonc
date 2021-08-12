import React, { Component } from 'react';
import './style.css'
import { CSSTransition } from 'react-transition-group'
class Boss extends Component {
  constructor(props){
    super(props)
    this.state = {
      isShow: false
    }
    this.toToggle = this.toToggle.bind(this)
  }
  render() { 
    return ( <div>
      <CSSTransition in={this.state.isShow} timeout={2000} classNames='boss-text' unmountOnExit>
        <div>BOSS CSSTransition</div>
      </CSSTransition>
      {/* <div className={this.state.isShow ? 'show': 'hidden'}>大Boss</div> */}
      <div>
        <button onClick={this.toToggle}>召唤</button>
      </div>
    </div> );
  }
  toToggle(){
    this.setState({
      isShow: this.state.isShow ? false:true
    })
  }
}
 
export default Boss;