import React from 'react';

//components
import List from './List';

class Content extends React.Component {

   constructor(){
   	super();
   	this.state = {value:'',lists:[]};
   	//this.state.removeToDo = this.removeToDo;
   }

   addToDo(){
   	if(this.state.value != ''){
	   	if(this.state.lists.length == 0){
	   		this.state.lists.push({id:0,value:this.state.value})
	   	} else {
	   		this.state.lists.push({id:this.state.lists[0].id++,value:this.state.value})
	   	}
	    this.setState(this.state)
	    this.state.value = '';
	    this.setState(this.state)
	}
   }

   removeToDo(id){
   	this.state.lists = this.state.lists.filter(function(x){
   		return x.id != id;
   	})
   	this.setState(this.state)
   }

   setValue(e){
   	this.setState({value:e.target.value});
   }

   render() {

      return (
         <div className="col-sm-8 col-sm-offset-2">
         	<div className="col-sm-10">
         		<input value={this.state.value} onChange={this.setValue.bind(this)} className="form-control" placeholder="type your todo...."/>
         	</div>
         	<div className="col-sm-2">
         		<button className="btn btn-primary" onClick={this.addToDo.bind(this)}>ADD</button>
         	</div>
         	<div className="col-sm-12">
	         	<List todoList={this.state.lists} removeToDo={this.removeToDo.bind(this)}/>
         	</div>
         </div>
      );
   }
}

export default Content;