import React,{ Component } from 'react';

class Display extends Component{
  state={
          name:'Vikesh',
          age:'20'
        }

  handleChange=(e)=>{
    this.setState(
      {
        name:e.target.value,
      }
    )
  }

  render(){
    return(
      <div className='div2'>
        <h3 className='h3'>This is 1st component inside main component</h3>
        <input type="text" name="name" className='input' onChange={ this.handleChange }/>
        <div className='detail'>Name: { this.state.name }</div>
        <div className='detail'>Age: { this.state.age }</div>
      </div>
    )
  }
}

export default Display;
