import React from 'react';
import { Grid, Header, Image, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='landing-background'>
          <Grid container centered columns = {3}>
          <Grid.Column>
            <Image src="images/TASK JEEVES LOGO.png"/>
          </Grid.Column>
          </Grid>

          <Grid columns={3}>
            <Grid.Column textAlign='center'>
              <div className='landing-background-icon'>
              <Icon size='huge' name='address card'/>
              <Header as='h1' inverted>SIGN UP FOR AN ACCOUNT</Header>
              </div>
            </Grid.Column>


            <Grid.Column textAlign='center'>
              <div className='landing-background-icon'>
                <Icon size='huge' name='user'/>
                <Header as='h1' inverted>CREATE YOUR PROFILE</Header>
              </div>
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <div className='landing-background-icon'>
                <Icon size='huge' name='tasks'/>
                <Header as='h1' inverted>GET TO WORK AND MANAGE YOUR TASKS</Header>
              </div>
            </Grid.Column>

          </Grid>





        </div>
    );
  }
}

export default Landing;
