import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginContainer, RegisterContainer } from "../containers";

class Home extends Component {
  render() {
    return (
<<<<<<< HEAD
      <LoginContainer />
    )
=======
      <Router>
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route path="/auth/register" component={RegisterContainer} />
        </Switch>
      </Router>
    );
>>>>>>> b4fffa4c14047f0defb5b16b362d2303e1853b76
  }
}

export default Home;
