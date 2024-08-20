import React, { Component } from 'react';

class App extends Component{
render(){
  return (
    <div className="header">
    {/* <div >
      Phone Directory
    </div>
    <button>Add</button>  
    <div>
      <span> Name </span><br/>
      <span> Phone </span>
    </div> */}
    <label htmlFor="name">Name:</label>
    <input id = "name" type="text" placeholder ="Type Here" defaultValue="Anjali"/>
    </div>
  );
}
}

export default App;
