import React, { Component } from 'react';
//var Display = require('./Display');
import Display from './componentOne';
import StateLessDisplay from './StateLessDisplay';
import './App.css';

import AddInfo from './AddInfo';

class App extends Component {
  state =  { displayInfos:[
                { name:'vikesh',age:20,id:1 },
                { name:'wick',age:15,id:2 }
            ]
            }

  addInfo=(info)=>{

    console.log('inside app component',info);

    info.id = Math.floor(Math.random()*10);

    console.log(info.id);

    let displayInfos = [...this.state.displayInfos, info];

   this.setState({
     displayInfos: displayInfos
   })

  }

  deleteInfo = (id) => {
      console.log(id);
      let displayInfos = this.state.displayInfos.filter(info => {
        return info.id !== id
      });
      this.setState({
        displayInfos: displayInfos
      })
  }

  render() {
    return (
      <div className='App'>
      <h1 className='h1'>This is my main component ! </h1>
      {/*<Display displayInfos={ this.state.displayInfos }/>*/}
     <StateLessDisplay deleteInfo= {this.deleteInfo} displayInfos={this.state.displayInfos} />
      <AddInfo addInfo={this.addInfo} />
      </div>
    );
  }
}

export default App;
