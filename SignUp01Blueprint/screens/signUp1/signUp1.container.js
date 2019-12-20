import React from 'react';
import {NavigationStackScreenProps} from 'react-navigation-stack';
import {SignUp1} from './signUp1.component';

export class SignUp1Container extends React.Component {
  static navigationOptions = {
    header: null,
  };
  navigationKey = 'SignUp1Container';

  onSignUpPress = (data) => {
    this.props.navigation.goBack();
  };

  onSignInPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Sign In 1',
    });
  };

  onGooglePress = () => {};

  onFacebookPress = () => {};

  onTwitterPress = () => {};

  onEwaPress = () => {};

  render() {
    return (
      <SignUp1
        onSignUpPress={this.onSignUpPress}
        onSignInPress={this.onSignInPress}
        onGooglePress={this.onGooglePress}
        onFacebookPress={this.onFacebookPress}
        onTwitterPress={this.onTwitterPress}
        onEwaPress={this.onEwaPress}
      />
    );
  }
}
