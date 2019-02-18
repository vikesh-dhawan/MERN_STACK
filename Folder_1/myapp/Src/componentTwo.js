import React,{ Component } from 'react';

class Display2 extends Component{
  render(){

    return(
      <div className='div3'>
        <h3 className='h3'>This is 2nd component inside main component</h3>
        <input type="text" name="name" className='input'/>
        <div className='detail'>Name: { this.props.name }</div>
        <div className='detail'>Age: { this.props.age }</div>
      </div>
    )
  }
}

export default Display2;
