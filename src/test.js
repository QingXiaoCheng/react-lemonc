 
import React, {Component,Fragment} from 'react' 
import Testitem from './testitem'
import Boss from './boss'
import axios from 'axios'

import { CSSTransition, TransitionGroup } from 'react-transition-group'
class Test extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue:'',
      list:['item1', 'item2','item3', 'item4'],
      testitem:'testitem12900'
    }
  } 
  componentDidMount(){
    // axios.get('https://web-api.juejin.im/v3/web/wbbr/bgeda').then((res)=>{
    //   console.log(res);
    // })
  }
  inputChange(e){
    this.setState({
      // inputValue: e.target.value
      inputValue: this.input.value
    })
  }
  addList(){
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }
  deleteList(i){
    console.log(i);
    // this.state.list.splice(i, 1)  这个写法是错误的，react是不允许直接操作state的
    let list = this.state.list
    list.splice(i, 1)
    this.setState({
      list: list
    })
  }
  render(){ 
    console.log('render挂载中');
    return <Fragment>
      <div> 
        <label htmlFor="text">输入</label>
        <input type="text" id="text" value={this.state.inputValue} onChange={this.inputChange.bind(this)} ref={(input)=>{this.input = input}}/>
        <button onClick={this.addList.bind(this)}>增加</button>
        <ul>
          <TransitionGroup>
          {
          this.state.list.map((item, index)=>{
            return (
              <CSSTransition timeout={3000} classNames="boss-text" unmountOnExit key={index+item} appear={true}>
                <Testitem content={item} key={item+index} index={index} deleteList={this.deleteList.bind(this)} name={'99'}></Testitem>
              </CSSTransition>
            )
          })}
          </TransitionGroup>
          
        </ul>
          <Boss></Boss>
      </div>
    </Fragment>
  }
  
}

export default Test