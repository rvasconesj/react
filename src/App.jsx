import React from 'react';
import './App.css';
import Dashboard from './hackaton/dashboard';
import Login from './hackaton/login';
import Preferences from './hackaton/preferences';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import useToken from './shared/hook/useToken';


  const App = () => {
   const { token, setToken } = useToken();
  return (
    <div className="container">
      <h1>Application</h1>
      <Router>
      <Switch>
            <Route exact path="/login">
              {token ? <Redirect to="/dashboard" /> : <Login setToken={setToken} />}
            </Route>
          <Route path="/dashboard" component={Dashboard} /> 
          <Route path="/preferences" component={Preferences} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
