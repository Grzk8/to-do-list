import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Login from './components/Login/Login';
import NewAcount from './components/CreateNewAcount/CreateNewAcount';
import List from './components/List/List';
import Layout from './components/Layout/Layout';

function App() {
  let routes = (
    <Switch>
      <Route path='/' component={Login}/>
      <Route path='/create_acount' component={NewAcount}/>
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
