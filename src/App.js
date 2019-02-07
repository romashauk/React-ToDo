import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import List from './List';

class App extends Component {
  state={
    counter:0,
    value:'',
    items:[],
  }
  counter=(counter)=>{
    return counter+1;
  }
  handleChange=(e)=>{
    this.setState({
      value: e.target.value,
    })
  }
  handleClick=()=>{
    if(this.state.value===''){
      alert('Please write smth')
      return;
    }
    let {items, value,counter} = this.state;
    this.setState({
      counter: this.state.counter+1 ,
    })
    this.setState({
      items:[
        ...items,
        {
          id: counter,
          title: value,
        }
      ]
    })
    this.setState({
      value:''
    })
  }
  removeFromItem=(id)=>{
 
    const {items}=this.state;
    const newItems = items.filter(p=>p.id!==id);
    this.setState({
      items:newItems
    })
  }
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBar
          showMenuIconButton={false}
          title='It is my To-Do list'/>
          <TextField
          floatingLabelText='What are you going to do'
          onChange={this.handleChange}
          value={this.state.value}
          />
          <RaisedButton
          label= 'add'
          onClick = {this.handleClick}
          >
            
          </RaisedButton>
          <ul>
            {this.state.items.map((item) => (
              <List
                key={item.id}
                id={item.id}
                title={item.title}
                remove = {this.removeFromItem}
              />
            ))}
          </ul>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
