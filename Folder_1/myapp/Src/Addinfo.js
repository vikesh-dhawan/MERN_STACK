import React, { Component } from 'react';
import './Addinfo.css';

class Addinfo extends Component{

  state={
    name:"NULL",
    age:"NULL",
    birthMonth:"NULL",
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.id]:e.target.value,
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault();

    //console.log(this.state);

    this.props.addInfo(this.state);
  }

  render(){

    return(

      <div className='AddInfo'>
          <form onSubmit={this.handleSubmit}>
              <label htmlFor='name' > Name </label>
              <input type='text' id='name' onChange={this.handleChange} /> <br />
              <label htmlFor='age'> Age </label>
              <input type='text' id='age' onChange={this.handleChange} /> <br />
              <label htmlFor='birthMonth'> Birth Month </label>
              <input type='text' id='birthMonth' onChange={this.handleChange}/> <br />
              <button id='button'> Submit </button>
          </form>
      </div>
    )
  }
}

export default Addinfo;
