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

    logout() {
        localStorage.clear();
        window.location.href = 'https://grzk8.github.io/to-do-list/#/';
    }

    loadData = () => {

        let url = 'https://recruitment.ultimate.systems/to-do-lists/count';

        fetch(url,{method:'GET',
        body:JSON.stringify,
        headers: {
        'accept': 'application/json'}
      }).then(response => (console.log(response)))
    }



    render() {

        let list = <div>
            <div className='backToList' onClick={this.logout}></div>
            <div className='backToListArrow' onClick={this.logout}></div>

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