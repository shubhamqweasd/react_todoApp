import React from 'react';

class List extends React.Component {

   constructor(){
   	super();
   }

   removeToDo(id){
      this.props.removeToDo(id);
   }

   render() {
      return (
      	<ul>
            { 
            this.props.todoList.map(function(x){
               return <li key={x.id}><span className="cust"><h3>{x.inputValue}</h3></span><span className="cust"><input type="button" className="cust btn-danger fr" onClick={this.removeToDo.bind(this,x.id)} value="X"/></span></li>
            }.bind(this))
            }
         </ul>
      )
   }
}

export default List;
