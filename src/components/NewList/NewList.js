import React, {Component} from 'react';

import Input from '../Layout/Input/Input';
import Button from '../Layout/Button/Button'

class NewList extends Component {
    state = {
        listName: '',
        task: []
    }
    getId() {
        return Math.random();
    }

    inputListNameHandler = (event,idd) => {
    this.setState({listName: event.target.value, id:idd}) 
    console.log(this.state.listName, this.state.id) 
    }

    render() {
    
        let listName = <Input
            //id={this.getId()}
            value={this.state.listName}
            changed={(event) => this.inputListNameHandler(event)}/>


        return <>
        <p>newList</p>
        {listName}

        </>
    }
}

export default NewList;