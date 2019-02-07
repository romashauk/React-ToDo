import React, { Component } from 'react';
import MenuItem from 'material-ui/MenuItem';
import CloseButton from 'material-ui/svg-icons/navigation/close'
class List extends Component{
  render(){

    const {title, remove, id} = this.props;
    return(
      <MenuItem
      onClick={this.handleShow}
      >
      <h1>{title}</h1>
      <CloseButton
      onClick = {
        ()=>remove(id)
      }
      />
      </MenuItem>
      
    )
  }
}





export default List;