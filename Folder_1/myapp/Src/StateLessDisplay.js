import React,{ Component } from 'react';

/*class Display2 extends Component{
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
export default Display2;*/

const StateLessDisplay = (props) => {
  const { displayInfos, deleteInfo } = props; // this is similar to const displayInfos = this.props.displayInfos
// object destructuring
  const displayList = displayInfos.map( info => {
    // Sometimes we just want to render some part of the component and we can dothat.
    // if( info.age > 20) then render
    // Using Ternary Operator: condition ? (if true return this) : (if false return this)
    return (
      <div className='display-info' key={info.id}>
        <h5>Information of : { info.name }</h5>
        <div> Name: { info.name } </div>
        <div> Age: { info.age } </div>
        <div> Birth-month: { info.birthMonth } </div>
        <button onClick={() => {deleteInfo(info.id)}}> Delete </button>
      </div>
    )
  });

  return(
    <div className='InfoList'>
      { displayList }
    </div>
  )
}

export default StateLessDisplay;
