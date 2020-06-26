import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Redirect } from 'react-router-dom';
import { Header } from 'semantic-ui-react';

/** After the user clicks the "Signout" link in the NavBar, log them out and display this page. */
/** Used code from
 * https://stackoverflow.com/questions/51810076/
 * redirect-automatically-from-one-component-to-another-one-after-few-seconds-rea */
export default class Signout extends React.Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    Meteor.logout();
    if (this.state.redirect) {
      return <Redirect to="/"/>;
    }
    return (
      <Header as="h2" textAlign="center">
        <p>You are signed out.</p>
        <p>You will be redirected to the Landing page.</p>
      </Header>
    );
  }
}
