import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends Component {

  responseFacebook = (response) => {
    console.log(response);
  }

  login = () => {
    console.log("clicked");
  }

  render() {
    return (
      <FacebookLogin
      appId="1879705068793535"
      autoLoad={true}
      fields="name,email,picture"
      onClick={this.login}
      callback={this.responseFacebook}
      cssClass="" />
    );
  }
}

export default Facebook;
