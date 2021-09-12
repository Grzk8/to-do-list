import React, {Component} from 'react';

import NewList from '../NewList/NewList'

class List extends Component {
    render() {

        return (<>
            <div>ToDo-List</div>
            <NewList/>
        </>)
    }
}

export default List;