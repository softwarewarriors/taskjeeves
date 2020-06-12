import React from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { AutoForm, ErrorsField, NumField, SelectField, SubmitField, TextField } from 'uniforms-semantic';
import { Container, Form, Message } from 'semantic-ui-react';
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
        <Grid container centered style={{height: '110vh'}}>
          <Grid.Column style={{paddingTop: '20vh'}}>
      <Message
      attached
      header='Add Task'
		  content='Input information for subject, description and date for your new task.'
    style={{fontFamily: 'Questrial'}}/>
			  <AutoForm className='attached fluid segment' ref={ref => { fRef = ref; }} schema={formSchema} onSubmit={data => this.submit(data, fRef)} >
              <Segment>
                <TextField name='subject'/>
                <TextField name='description'/>
                <TextField name='due' type='date'/>
        <Grid>
          <Grid.Column textAlign="center">
            <Form.Button style={{borderRadius: '10px', backgroundColor: '#8fd7ce', color: '#fff'}} value="Submit" content="Submit"/>
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

export default AddTask;
