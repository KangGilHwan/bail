import React, { Component } from 'react';
import KakaoLogin from 'react-kakao-login';

class Kakao extends Component {

  success = (response) => {
    console.log(response);
  }

  fail = (error) => {
    console.log(error);
  }

  render() {
    return (
      <KakaoLogin
      jsKey='key please'
      onSuccess={this.success}
      onFailure={this.failure}
      className=""
      />
    );
  }
}

export default Kakao;
