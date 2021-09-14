import React, {Component} from 'react';

import NewList from '../NewList/NewList'

class List extends Component {
    state= {
        showNewList: false
    };

    newListHandler = () => {
        this.setState({showNewList: true})
    }

    backToListHandler = () => {
        this.setState({showNewList: false})
    }
    render() {

        let list = <div>
            <div className='backToList'></div>
            <div className='backToListArrow'></div>

            <div className='toDoList'>
                <input className='search'placeholder='Search' ></input>
                
                <select className='sort'placeholder='Sort by' >
                  <option value="name">Name</option>
                  <option value="date" selected>Date</option>
                  <option value="complated">Complated</option>
                </select>

            </div>
    
            <div className='addList' onClick={this.newListHandler}></div>
            <div className='addListLine' onClick={this.newListHandler}></div>
            <div className='addListLine2' onClick={this.newListHandler}></div>
        </div>
        let newList = <NewList show={this.backToListHandler}/>

        if (this.state.showNewList) {
            return newList
        }
        return list;

    }
}

export default List;