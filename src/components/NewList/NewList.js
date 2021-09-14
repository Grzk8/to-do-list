import React, {Component} from 'react';

import Input from '../Layout/Input/Input';
import Button from '../Layout/Button/Button'
import List from './List';

class NewList extends Component {
    state = {
        listName: '',
        date: new Date(),
        term: '',
        isDone: false,
        task: [
          { name: null, isDone: false, taskId: null}
        ]
    }

    inputListNameHandler = (event) => {
    this.setState({listName: event.target.value}) 
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

      isDoneHandler = (event, id) => {

        const taskIndex = this.state.task.findIndex(p =>{
          return p.taskId === id
        });
        const tsk = {...this.state.task [taskIndex]};
        tsk.isDone = !tsk.isDone;
        const task = [...this.state.task];
        task[taskIndex] = task;

        this.setState({task: task})
        console.log(this.state.task)
      }

    render() {
    
        let listName = <Input
            //id={this.getId()}
            value={this.state.listName}
            changed={(event) => this.inputListNameHandler(event)}/>

        
        return <>
        <p>newList</p>
        {listName}
        {this.state.task.map((tsk, index) => {
          return <List name={tsk.name} isDone={tsk.isDone} taskId={tsk.taskId} isDoneHandler={(event)=> this.isDoneHandler(event, tsk.taskId)}/>
        })}
        <List task={this.state.task} isDone={this.state.isDone}/>
        <form className="App" onSubmit={this.submitHandler}>
       <input value={this.state.term} onChange={this.taskChangeHandler} />
       <button>Submit</button>
        </form>
   
        </>
    }
}

export default NewList;