import React from 'react';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      newVar : "",
      list:[]
    }
    console.log(this.state.list)
  }

  addItem(todo){
    if(todo !== "" ){
      const list = [...this.state.list]
      list.push({
        id : Date.now(),
        value : todo
      })
      this.setState({
        list,
        newVar : ""
      })
      console.log(this.state.list)
    }else{
      console.log("no element is selected")
    }
  }
  updateItem(input){
    this.setState({newVar : input})
  }
  deleteItem(id){
    const list = [...this.state.list]
    const updatedList = list.filter(item => item.id !== id);
    this.setState({
      list : updatedList
    });
    console.log(id)
  }
  

  render(){
    return(
      <div>
        <input type="text" name="" value={this.state.newVar} className='text' onChange = {e => this.updateItem(e.target.value)}/>
        <button onClick = {() => this.addItem(this.state.newVar) }>add</button>

        <ul>
          {this.state.list.map(item =>{
            return(
            <li key={item.id}>
              <input type="text" name="" id="" value = {item.value} readOnly/>
              <button onClick={()=>this.deleteItem(item.id)}>Delete</button>
            </li>
            );
          })}
          
        </ul>
      </div>
    );
  }
  
}
export default App