import React, {Component} from 'react';

import Input from '../Layout/Input/Input';
import Button from '../Layout/Button/Button'
import List from './List/List';

class NewList extends Component {
    state = {
        listName: '',
        date: '',
        term: '',
        id: '',
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
        const dateNow = new Date().toLocaleDateString();
        const updatedTask = {
            name: this.state.term,
            isDone: false,
            id: Math.random(),
            
            date: dateNow,
        }
        this.setState({
          term: '',
          task: [...this.state.task, updatedTask]
        });
        console.log(this.state)
      }

      isDoneHandler = (event, id) => {
        const taskIndex = this.state.task.findIndex(p =>{
          return p.id === id
        });
        const tsk = {...this.state.task [taskIndex]};
        tsk.isDone = !tsk.isDone;
        const task = [...this.state.task];
        task[taskIndex] = task;

        this.setState({task: task})
        console.log(this.state.task)
      }

      confirmHandler = (event) => {
        
        const data = this.state
        let url = 'https://recruitment.ultimate.systems/to-do-lists'

        fetch(url,{method:'POST',
          body:JSON.stringify(data),
          headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json'}
        }).then(response => (console.log(response)))
      }

    render() {
    
      let listName = <div className='listName'>
        <Input
          value={this.state.listName}
          changed={(event) => this.inputListNameHandler(event)}/>
          <div className='line'></div>
      </div>
        
        return <>

        {listName}

        

      <div className='tasks'>

        <div className='list'>
          {this.state.task.map((tsk, index) => {
          return <List name={tsk.name} isDone={tsk.isDone} taskId={tsk.taskId} isDoneHandler={(event)=> this.isDoneHandler(event, tsk.taskId)}/>
          })}
        </div>

        <div className='tasks'>
          <form className="App" onSubmit={this.submitHandler}>
            <input className='taskName'placeholder='Task name' value={this.state.term} onChange={this.taskChangeHandler} />
            <Button className='addButton'>Add</Button>
          </form>
          <Button className='cancelTask'>Cancel</Button>
        </div>

      </div>

        <Button clicked={this.props.show} className='buttonCancel'>CANCEL</Button>
        <Button className='buttonSave' clicked={this.props.show, (event) => this.confirmHandler(event)}>SAVE</Button>
        </>
    }
}

export default NewList;