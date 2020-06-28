import React from 'react';
import { Grid, Loader, Segment, Form, Message } from 'semantic-ui-react';
import swal from 'sweetalert';
import { AutoForm, ErrorsField, HiddenField, TextField } from 'uniforms-semantic';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import { Task, TaskSchema } from '../../api/task/Task';

/** Renders the Page for editing a single document. */
class EditTask extends React.Component {

  /** On successful submit, insert the data. */
  submit(data) {
    const { subject, description, due, _id } = data;
    Task.update(_id, { $set: { subject, description, due } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
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
                     header='Edit Task'
                     content='You are currently editing a task. Make changes to subject, description and due dates for
                     your task below.'/>
            <AutoForm className='attached fluid segment'
                      schema={TaskSchema}
                      onSubmit={data => this.submit(data)}
                      model={this.props.doc}>
            <Segment>
              <TextField name='subject'/>
              <TextField name='description'/>
              <TextField name='due' type='date'/>
              <Grid>
                <Grid.Column textAlign="center">
                  <Form.Button style={{ borderRadius: '10px', backgroundColor: '#8fd7ce', color: '#fff' }}
                               value="Submit"
                               content="Submit"/>
                </Grid.Column>
              </Grid>
              <ErrorsField/>
              <HiddenField name='owner' />
            </Segment>
          </AutoForm>
        </Grid.Column>
      </Grid>
    );
  }
}

/** Require the presence of a Task document in the props object. Uniforms adds 'model' to the props, which we use. */
EditTask.propTypes = {
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Tasks documents.
  const subscription = Meteor.subscribe('Tasks');
  return {
    doc: Task.findOne(documentId),
    ready: subscription.ready(),
  };
})(EditTask);
