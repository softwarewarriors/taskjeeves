import React from 'react';
import { Profiles } from '../../api/profile/profile';
import { Container, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import AutoForm from 'uniforms-semantic/AutoForm';
import TextField from 'uniforms-semantic/TextField';
import LongTextField from 'uniforms-semantic/LongTextField';
import SubmitField from 'uniforms-semantic/SubmitField';
import ErrorsField from 'uniforms-semantic/ErrorsField';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import MultiSelectField from '../forms/controllers/MultiSelectField';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  username: String,
  bio: String,
  picture: String,
});

/** Renders the Page for adding a document. */
class CreateProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = { redirectToReferer: false };
  }

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { firstName, lastName, username, bio, picture } = data;
    Profiles.insert({ firstName, lastName, username, bio, picture },
        (error) => {
          if (error) {
            swal('Error', error.message, 'error');
          } else {
            swal('Success', 'Profile updated successfully', 'success');
            formRef.reset();
            this.setState({ error: '', redirectToReferer: true });
          }
        });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    // if correct authentication, redirect to page instead of login screen
    if (this.state.redirectToReferer) {
      return <Redirect to={from}/>;
    }
    // Otherwise return the Login form.
    return (
        <Container height="100vh" style={{ margin: '0px', width: '100%', height: '110vh', backgroundColor: 'white', backgroundSize: 'cover', backgroundImage: `url(${"/images/signin-background.jpg"})` }}>
          <Grid textAlign="center" verticalAlign="middle" centered columns={2}>
            <Grid.Column style={{ paddingTop: '30vh'}}>
              <Message
                  attached
                  header='Welcome to TaskJeeves'
                  content='Start by creating your account!'
              />
              <Form className='attached fluid segment' onSubmit={this.submit}>
                <Form.Input
                    label="Enter Your Name"
                    name="firstname"
                    type="text"
                    placeholder="First Name..."
                    onChange={this.handleChange}
                />
                <Form.Input
                    name="lastname"
                    type="text"
                    placeholder="Last Name..."
                    onChange={this.handleChange}
                />
                <Form.Input
                    label="Create a Username"
                    name='username'
                    type='text'
                    placeholder='Enter your username'
                  />



                <Grid>
                  <Grid.Column textAlign="center">
                    <Form.Button style={{borderRadius: '10px', backgroundColor: '#8fd7ce', color: '#fff'}} content="Submit"/>
                  </Grid.Column>
                </Grid>
              </Form>
               </Grid.Column>
          </Grid>
        </Container>
    );
  }
}

export default CreateProfile;
