import React,{ Component } from 'react';
class Addtodo extends Component{
 state = {
    item:" "
 }
 handleChange=(e)=>{
   this.setState({
     item: e.target.value,
   })
 }
 handleSubmit=(e)=>{
   e.preventDefault();
   this.props.add(this.state);
   this.setState({
     item:" "
   })
 }
  render(){
    return(
      <div>
        <form onSubmit = { this.handleSubmit }>
          <input type="text" id = "item" onChange ={ this.handleChange } value = {this.state.item}/>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default Addtodo;
