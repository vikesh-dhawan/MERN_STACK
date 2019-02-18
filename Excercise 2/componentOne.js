import React,{ Component } from 'react';

const Display = (props) => {
  /*state={
          name:'vikesh',
          age:'20'
        }
  handleChange(e){
    this.setState(
      {
        name:e.target.value,
      }
    )
  }*/


      const displayInfos = props.displayInfos;
      console.log(displayInfos);
      const displayList = displayInfos.map(info=>{
        if( info.age>14 ){
          return(
            <div className='div2' key={info.rollno}>
              <h3 className='h3'>This is {info.rollno} component inside main component</h3>
              <input type="text" name="name" className='input'/>
              <div className='detail'>Name: { info.name }</div>
              <div className='detail'>Age: { info.age }</div>
            </div>
          )
        }
      })
      return(
        <div>{ displayList }</div>
      )

}

export default Display;
