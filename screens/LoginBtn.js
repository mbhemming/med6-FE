import React from "react";

import { Text } from 'react-native';

import Consumer from "./../utils/configContext";

const LoginBtn = props => {
  return (
    <Consumer>
      {ctx => {
        return (
          <Text>
            {ctx.userLoggedIn ? "Logout" : "LoginZZZ"}
          </Text>
        );
      }}
    </Consumer>
  );
};

export default LoginBtn;
