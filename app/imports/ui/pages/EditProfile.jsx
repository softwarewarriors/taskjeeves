import React from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Loader, Segment, Form, Message } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, TextField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { User, UserSchema } from '../../api/user/User';

/** Renders the Page for editing a single document. */
class EditProfile extends React.Component {
  /** On successful submit, insert the data. */
  submit(data) {
    const { email, firstName, lastName, address, _id } = data;

    /** verify valid entries */
    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+[.][A-Za-z]{2,}$/.test(email)) {
      swal('Error', 'Please enter a valid email address.', 'error');
      return;
    }
    if (/<|>/.test(firstName)) {
      swal('Error', 'Subject contains invalid character "<" or ">".', 'error');
      return;
    }
    if (/<|>/.test(lastName)) {
      swal('Error', 'Description contains invalid character "<" or ">".', 'error');
      return;
    }
    if (/<|>/.test(address)) {
      swal('Error', 'Due contains invalid character "<" or ">".', 'error');
      return;
    }

    /** All valid characters, make entry */
    User.update(_id, { $set: { email, firstName, lastName, address } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Profile updated successfully', 'success').then(() => <Redirect to="/profile"/>)));
  }

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  renderPage() {
    return (
        <Grid container centered style={{ height: '110vh' }}>
          <Grid.Column style={{ paddingTop: '20vh' }}>
            <Message attached
                     header='Edit Profile'
                     content='You are currently editing your profile. Make changes to your name, email, and address as
                     required.'/>
            <AutoForm className='attached fluid segment'
                      schema={UserSchema}
                      onSubmit={data => this.submit(data)}
                      model={this.props.doc}>
            <Segment>
              <TextField name='firstName'/>
              <TextField name='lastName'/>
              <TextField name='address'/>
              <TextField name='email'/>
              <Grid>
                <Grid.Column textAlign="center">
                  <Form.Button style={{ borderRadius: '10px', backgroundColor: '#8fd7ce', color: '#fff' }}
                               value="Submit"
                               content="Submit"/>
                </Grid.Column>
              </Grid>
              <ErrorsField/>
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

/** Require the presence of a User document in the props object. Uniforms adds 'model' to the props, which we use. */
EditProfile.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Tasks documents.
  const subscription = Meteor.subscribe('User');
  return {
    doc: User.findOne(documentId),
    ready: subscription.ready(),
  };
})(EditProfile);
