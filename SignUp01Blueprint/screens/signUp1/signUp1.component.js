import React from 'react';
import {
  ImageProps,
  View,
} from 'react-native';
import {
  StyleType,
  ThemedComponentProps,
  ThemeType,
  withStyles,
  Icon
} from 'react-native-ui-kitten';
import {
  Button,
  Text,
} from 'react-native-ui-kitten';
import {
  SignUpForm1,
  SocialAuth,
} from '../../components/auth';
import {
  ScrollableAvoidKeyboard,
  ImageOverlay,
  textStyle,
} from '../../components/common';
// import {
//   ArrowForwardIconOutline,
//   HeartIconFill,
// } from '@src/assets/icons';


const imageSignUp1Bg = require('../../assets/images/image-background-sign-up-1.jpg');

class SignUp1Component extends React.Component {

   state = {
    formData: undefined,
  };

   backgroundImage = imageSignUp1Bg;

   onFormDataChange = (formData) => {
    this.setState({ formData });
  };

   onSignUpButtonPress = () => {
    this.props.onSignUpPress(this.state.formData);
  };

   onSignInButtonPress = () => {
    this.props.onSignInPress();
  };

   onGoogleButtonPress = () => {
    this.props.onGooglePress();
  };

   onFacebookButtonPress = () => {
    this.props.onFacebookPress();
  };

   onTwitterButtonPress = () => {
    this.props.onTwitterPress();
  };

   onEwaButtonPress = () => {
    this.props.onEwaPress();
  };

   renderEwaButtonIcon = (style) => {
    const { themedStyle } = this.props;

    return <Icon {...themedStyle.ewaButtonIcon} name="heart" />;
  };

   renderSignInButtonIcon = (style) => {
    const { themedStyle } = this.props;

    return <Icon {...themedStyle.signInButtonIcon} name="arrow-forward-outline" />;
  };

   render() {
    const { themedStyle } = this.props;

    return (
      <ScrollableAvoidKeyboard style={themedStyle.container}>
        <ImageOverlay
          style={themedStyle.headerContainer}
          source={this.backgroundImage}>
          <Button
            appearance='ghost'
            style={themedStyle.ewaButton}
            textStyle={themedStyle.ewaButtonText}
            size='large'
            activeOpacity={0.75}
            icon={this.renderEwaButtonIcon}
            onPress={this.onEwaButtonPress}>
            EWA
          </Button>
          <View style={themedStyle.signUpContainer}>
            <Text
              style={themedStyle.signInLabel}
              category='h4'>
              SIGN UP
            </Text>
            <Button
              style={themedStyle.signInButton}
              textStyle={themedStyle.signInButtonText}
              appearance='ghost'
              size='giant'
              activeOpacity={0.75}
              icon={this.renderSignInButtonIcon}
              onPress={this.onSignInButtonPress}>
              Sign In
            </Button>
          </View>
        </ImageOverlay>
        <SocialAuth
          style={themedStyle.socialAuthContainer}
          hintStyle={themedStyle.socialAuthHint}
          iconStyle={themedStyle.socialAuthIcon}
          hint='Sign with a social account'
          onGooglePress={this.onGoogleButtonPress}
          onFacebookPress={this.onFacebookButtonPress}
          onTwitterPress={this.onTwitterButtonPress}
        />
        <View style={themedStyle.orContainer}>
          <View style={themedStyle.divider}/>
          <Text
            style={themedStyle.orLabel}
            category='h5'>
            OR
          </Text>
          <View style={themedStyle.divider}/>
        </View>
        <Text
          style={themedStyle.emailSignLabel}>
          Sign up with Email
        </Text>
        <SignUpForm1
          style={themedStyle.formContainer}
          onDataChange={this.onFormDataChange}
        />
        <Button
          style={themedStyle.signUpButton}
          //textStyle={textStyle.button}
          size='large'
          //disabled={!this.state.formData}
          //onPress={this.onSignUpButtonPress}
          >
          SIGN UP
        </Button>
      </ScrollableAvoidKeyboard>
    );
  }
}

export const SignUp1 = withStyles(SignUp1Component, (theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme['background-basic-color-1'],
  },
  headerContainer: {
    minHeight: 200,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 44,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
  },
  socialAuthContainer: {
    marginTop: 24,
  },
  formContainer: {
    marginTop: 48,
    paddingHorizontal: 16,
  },
  ewaButton: {
    maxWidth: 72,
    paddingHorizontal: 0,
  },
  ewaButtonText: {
    color: 'white',
    //...textStyle.button,
  },
  ewaButtonIcon: {
    marginHorizontal: 0,
    tintColor: 'white',
  },
  signInLabel: {
    flex: 1,
    color: 'white',
    ...textStyle.headline,
  },
  signInButton: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 0,
  },
  signInButtonText: {
    color: 'white',
    //...textStyle.button,
  },
  signInButtonIcon: {
    marginHorizontal: 0,
    tintColor: 'white',
  },
  signUpButton: {
    marginVertical: 24,
    marginHorizontal: 16,
  },
  socialAuthHint: {
    ...textStyle.paragraph,
  },
  socialAuthIcon: {
    tintColor: theme['text-basic-color'],
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 52,
  },
  orLabel: {
    marginHorizontal: 8,
    ...textStyle.headline,
  },
  emailSignLabel: {
    alignSelf: 'center',
    marginTop: 8,
    ...textStyle.paragraph,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: theme['background-basic-color-3'],
  },
}));

