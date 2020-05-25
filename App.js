import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import FirstPage from './containers/FirstPage/Firstpage';
import Signin from './containers/Signin/Signin';
import Signup from './containers/Signup/Signup';
import Submission from './containers/Submission/Submission';

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
            <Route path="/" exact component={FirstPage} />
            <Route path="/signin" component={Signin}/>
            <Route path="/signup" component={Signup} />
            <Route path="/submission" component={Submission} />
          </Switch>
      </div>
    );
  }
}

export default App;
