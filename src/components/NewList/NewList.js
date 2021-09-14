import React, {Component} from 'react';

import Input from '../Layout/Input/Input';
import Button from '../Layout/Button/Button'
import List from './List';

class NewList extends Component {
    state = {
        listName: '',
        date: new Date(),
        term: '',
        task: []
    }

    inputListNameHandler = (event,idd) => {
    this.setState({listName: event.target.value, id:idd}) 
    console.log(this.state.listName, this.state.id) 
    }

    taskChangeHandler = (event) => {
        this.setState({term: event.target.value});
      }

      submitHandler = (event) => {
        event.preventDefault()
        const updatedTask = {
            name: this.state.term,
            isDone: false,
            taskId: Math.random()
        }
        this.setState({
          term: '',
          task: [...this.state.task, updatedTask]
        });
        console.log(this.state)

      }

      isDoneHandler = () => {
        const tsk = [...this.state.task];
        const done = tsk.isDone;
        this.setState({task: !done})

        console.log(this.state.isDone)
      }

    render() {
    
        let listName = <Input
            //id={this.getId()}
            value={this.state.listName}
            changed={(event) => this.inputListNameHandler(event)}/>

        
        return <>
        <p>newList</p>
        {listName}
        <List task={this.state.task} isDone={this.z}/>
        <form className="App" onSubmit={this.submitHandler}>
       <input value={this.state.term} onChange={this.taskChangeHandler} />
       <button>Submit</button>
   </form>
   
        </>
    }
}

export default NewList;