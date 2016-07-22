import React from 'react';

//components
import List from './List';

class Content extends React.Component {

   constructor(){
   	super();
   	this.state = {inputValue:'',lists:[],toDoCount:0};
   }

   addToDo(){
   	if(this.state.inputValue != ''){
	   	if(this.state.lists.length == 0){
	   		this.state.lists.push({id:this.state.toDoCount,inputValue:this.state.inputValue})
	   	} else {
	   		this.state.lists.push({id:++this.state.toDoCount,inputValue:this.state.inputValue})
	   	}
	    this.setState({lists:this.state.lists})
	    this.setState({inputValue : ''})
	   }
   }

   removeToDo(id){
   	this.state.lists = this.state.lists.filter(function(x){
   		return x.id != id;
   	})
   	this.setState({lists:this.state.lists})
   }

   setValue(e){
   	this.setState({inputValue:e.target.value});
   }

   render() {

      return (
         <div className="col-sm-8 col-sm-offset-2">
         	<div className="col-sm-10">
         		<input value={this.state.inputValue} onChange={this.setValue.bind(this)} className="form-control" placeholder="type your todo...."/>
         	</div>
         	<div className="col-sm-2">
         		<button className="btn btn-primary" onClick={this.addToDo.bind(this)}>ADD</button>
         	</div>
         	<div className="col-sm-12">
               <h2> Task List </h2>
	         	<List todoList={this.state.lists} removeToDo={this.removeToDo.bind(this)}/>
         	</div>
         </div>
      );
   }
}

export default Content;