import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import swal from 'sweetalert';
import { Meteor } from 'meteor/meteor';
import 'uniforms-bridge-simple-schema-2'; // required for Uniforms
import SimpleSchema from 'simpl-schema';
import { Task } from '../../api/task/Task';

/** Create a schema to specify the structure of the data to appear in the form. */
const formSchema = new SimpleSchema({
  subject: String,
  description: String,
  due: Date,
});

/** Renders the Page for adding a document. */
class AddTask extends React.Component {

  /** On submit, insert the data. */
  submit(data, formRef) {
    const { subject, description, due } = data;
    const owner = Meteor.user().username;
    const created = new Date();
    const completed = false;
    Task.insert({ subject, description, owner, created, due, completed },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      });
  }

  /** Render the form. Use Uniforms: https://github.com/vazco/uniforms */
  render() {
    let fRef = null;
    return (
        <Grid container centered>
          <Grid.Column>
            <Header as="h2" textAlign="center">Add Task</Header>
            <AutoForm ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name='subject'/>
                <TextField name='description'/>
                <TextField name='due'/>
                <SubmitField value='Submit'/>
                <ErrorsField/>
              </Segment>
            </AutoForm>
          </Grid.Column>
        </Grid>
    );
  }
}

export default AddTask;
