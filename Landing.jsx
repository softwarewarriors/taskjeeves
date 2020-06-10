import React from 'react';
import { Grid, Header, Image, Icon } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='landing-body1'>
          <div class="ui fluid container landing-body">
			  <div class="ui center aligned one column grid">
			  <div class="ui center aligned row logo-row">
            <img class="ui medium image" src="images/TASK JEEVES LOGO.png"/>
				  </div>
			  </div>
			  </div>
          <div class="ui container landing-content">
			  <div class="ui one column grid">
			  <div class="ui center aligned row">
				  <div class="ui column">
					  <h1 class="landing-header">Here's how to get started</h1>
				  </div>
				  </div>
			  </div>
			  <div class="ui center aligned three column stackable grid">
			  <div class="ui center aligned row">
				  </div>
				<div class="ui center aligned row">
				  <div class="ui center aligned column">
					  <div class="ui one column stackable grid">
						  <div class="ui column">
            <img class="ui small centered image" src="images/signup-icon.png"/>
							  </div>
						  <div class="ui column">
							  <h2 class="landing-header2">CREATE AN ACCOUNT</h2>
						  </div>
						  </div>
					</div>
				  <div class="ui center aligned column">
					  <div class="ui one column stackable grid">
						  <div class="ui column">
            <img class="ui small centered image" src="images/profile-icon.png"/>
						  </div>
						  <div class="ui column">
					  <h2 class="landing-header2">EDIT YOUR PROFILE</h2>
						  </div>
					  </div>
					</div>
				  <div class="ui center aligned column">
					  <div class="ui one column stackable grid">
						  <div class="ui column">
            <img class="ui small centered image" src="images/tasks-icon.png"/>
						  </div>
						  <div class="ui column">
					  <h2 class="landing-header2">MANAGE YOUR TASKS</h2>
						  </div>
					  </div>
					</div>
				  </div>
			  </div>
			</div>
        </div>
    );
  }
}

export default Landing;
