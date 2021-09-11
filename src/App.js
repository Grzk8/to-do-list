import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Login from './components/Login/Login';
import NewAccount from './components/CreateNewAccount/CreateNewAccount';
import List from './components/List/List';
import Layout from './components/Layout/Layout';

function App() {

  let routes = (
    <Switch>
      <Route path='/' exact component={Login}/>
      <Route path='/create_account' component={NewAccount}/>
      <Route path='/main' component={List}/>
    </Switch>
  );
  
  return(
    <>
      <Layout>
        {routes}
      </Layout>
    </>
  )

}
export default App;
