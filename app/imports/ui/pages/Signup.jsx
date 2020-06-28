import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { Container, Form, Grid, Message } from 'semantic-ui-react';
import { Accounts } from 'meteor/accounts-base';

/**
 * Signup component is similar to signin component, but we create a new user instead.
 */
class Signup extends React.Component {
  /** Initialize state fields. */
  constructor(props) {
    super(props);
    this.state = {
      email: '', password: '', confirm: '', redirectToReferer: false,
      errorEmail: false, errorPassword: false, errorConfirm: false, error: '',
    };
  }

  /** Update the form controls each time the user interacts with them. */
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  /** Handle Signup submission. Create user account and a profile entry, then redirect to the home page. */
  submit = () => {
    const { email, password, errorEmail, errorPassword, errorConfirm } = this.state;

    /** email validation */
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+[.][A-Za-z]{2,}$/.test(email)) {
      this.setState({ errorEmail: true });
      this.setState({ error: 'Please enter a valid email address.' });
      return;
    }
    this.setState({ errorEmail: false });
    this.setState({ error: '' });

    /** password validation */
    const hasUpper = /[A-Z]/.test(this.state.password);
    const hasLower = /[a-z]/.test(this.state.password);
    const hasNumber = /\d/.test(this.state.password);
    const hasNonAlpha = /[!@#$&*_-]/.test(this.state.password);
    const validCheck = hasUpper + hasLower + hasNumber + hasNonAlpha;
    if ((this.state.password.length < 8) || (validCheck < 3) || (!/[a-zA-Z\d!@#$&*_-]/.test(this.state.password)) ||
        (/[%^()+={}|.,`~]/.test(this.state.password))) {
      this.setState({ errorPassword: true });
      this.setState({ error: 'Password must be at least 8 characters long and contain at least one upper case ' +
            'char, lower case char, number, and special char: !@#$&*_-' });
      return;
    }
    if (this.state.password.length > 32) {
      this.setState({ errorPassword: true });
      this.setState({ error: 'Password must be at less than 32 characters long.' });
      return;
    }
    this.setState({ errorPassword: false });
    this.setState({ error: '' });

    /** confirm password validation */
    if (this.state.confirm !== this.state.password) {
      this.setState({ error: 'Your passwords do not match.' });
      this.setState({ errorConfirm: true });
      return;
    }
    this.setState({ errorConfirm: false });
    this.setState({ error: '' });

    if ((errorEmail === false) && (errorPassword === false) && (errorConfirm === false) && (this.state.error === '')) {
      Accounts.createUser({ email, username: email, password }, (err) => {
        if (err) {
          this.setState({ error: err.reason });
        } else {
          this.setState({ error: '', redirectToReferer: true });
        }
      });
    }
  }

  /** Display the signup form. Redirect to add page after successful registration and login. */
  render() {
    const { from } = this.props.location.state || { from: { pathname: '/addtask' } };
    // if correct authentication, redirect to from: page instead of signup screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }
    return (
        <Container height="100vh" style={{ margin: '0px', width: '100%', height: '110vh', backgroundColor: 'white',
          backgroundSize: 'cover', backgroundImage: `url(${'/images/signup-background.jpg'})` }}>
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column style={{ paddingTop: '30vh' }}>
              <Message
                  attached header='Welcome to our site!'
                  content='Fill out the form below to sign-up for a new account'
              />
              <Form className='attached fluid segment' onSubmit={this.submit} error>
                <Form.Input
                    label="Email"
                    icon="user"
                    iconPosition="left"
                    name="email"
                    type="email"
                    placeholder="E-mail address"
                    onChange={this.handleChange}
                    error={this.state.errorEmail}
                />
                <Form.Input
                    label="Password"
                    icon="lock"
                    iconPosition="left"
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={this.handleChange}
                    error={this.state.errorPassword}
                />
                <Form.Input
                    label="Confirm Password"
                    icon="lock"
                    iconPosition="left"
                    name="confirm"
                    placeholder="Confirm Password"
                    type="password"
                    onChange={this.handleChange}
                    error={this.state.errorConfirm}
                />
                <Grid>
                  <Grid.Column textAlign="center">
                    <Form.Button style=
                                     {{ borderRadius: '10px', backgroundColor: '#8fd7ce', color: '#fff' }}
                                 content="Submit"/>
                  </Grid.Column>
                </Grid>
              </Form>
              <Message attached='bottom' info> Already have an account? Click&nbsp;<Link to="/signin">here</Link>
                &nbsp;to sign in. </Message>
              {this.state.error === '' ? (
                  ''
              ) : (
                  <Message
                      error
                      header="Registration was not successful"
                      content={this.state.error}
                  />
              )}
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

/** Ensure that the React Router location object is available in case we need to redirect. */
Signup.propTypes = {
  location: PropTypes.object,
};

export default Signup;
