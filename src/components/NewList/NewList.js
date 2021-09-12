import React, {Component} from 'react';

import Input from '../Layout/Input/Input';
import Button from '../Layout/Button/Button'
import List from './List';

class NewList extends Component {
    state = {
        listName: '',
        term: '',
        task: [],


    }
    getId() {
        return Math.random();
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
        this.setState({
          term: '',
          task: [...this.state.task, this.state.term]
        });
        console.log(this.state)

      }

      isDoneHandler = () => {
          this.setState((prevState) => {
              return {isDone: !prevState.isDone}
          })
      }

    render() {
    
        let listName = <Input
            //id={this.getId()}
            value={this.state.listName}
            changed={(event) => this.inputListNameHandler(event)}/>

        
        return <>
        <p>newList</p>
        {listName}
        <List task={this.state.task} isDone={this.isDoneHandler}/>
        <form className="App" onSubmit={this.submitHandler}>
       <input value={this.state.term} onChange={this.taskChangeHandler} />
       <button>Submit</button>
   </form>
   
        </>
    }
}

export default NewList;