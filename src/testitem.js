import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Testitem extends Component {
  handlerClick(){
    console.log(this.props);
    this.props.deleteList(this.props.index)
  } 

  shouldComponentUpdate(nextProps, nextState){ 
    console.log(this.props,nextProps, nextState);
    if(nextProps.content === this.props.content) {
      return true
    }
    return false
  } 
  render(){
    console.log('child-render');
    return <div onClick={this.handlerClick.bind(this)}>{this.props.content + this.props.name}</div>
  }
}

Testitem.propTypes = {
  content: PropTypes.string,
  deleteList: PropTypes.func,
  index: PropTypes.number
}

Testitem.defaultProps = {
  name: 'c'
}
export default Testitem