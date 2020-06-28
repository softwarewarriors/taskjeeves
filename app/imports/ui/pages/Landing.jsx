import React from 'react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div className='landing-body1'>
        <div className="ui fluid container landing-body">
          <div className="ui center aligned one column grid">
            <div className="ui center aligned row logo-row">
              <img className="ui medium image" src="images/TASK JEEVES LOGO.png"/>
            </div>
          </div>
        </div>
        <div className="ui container landing-content">
          <div className="ui one column grid">
            <div className="ui center aligned row">
              <div className="ui column">
                <h1 className="landing-header">Here&apos;s how to get started</h1>
              </div>
            </div>
          </div>
          <div className="ui center aligned three column stackable grid">
            <div className="ui center aligned row"></div>
            <div className="ui center aligned row">
              <div className="ui center aligned column">
                <div className="ui one column stackable grid">
                  <div className="ui column">
                    <img className="ui small centered image" src="images/signup-icon.png"/>
                  </div>
                  <div className="ui column">
                    <h2 className="landing-header2">CREATE AN ACCOUNT</h2>
                  </div>
                </div>
              </div>
              <div className="ui center aligned column">
                <div className="ui one column stackable grid">
                  <div className="ui column">
                    <img className="ui small centered image" src="images/profile-icon.png"/>
                  </div>
                  <div className="ui column">
                    <h2 className="landing-header2">EDIT YOUR PROFILE</h2>
                  </div>
                </div>
              </div>
              <div className="ui center aligned column">
                <div className="ui one column stackable grid">
                  <div className="ui column">
                    <img className="ui small centered image" src="images/tasks-icon.png"/>
                  </div>
                  <div className="ui column">
                    <h2 className="landing-header2">MANAGE YOUR TASKS</h2>
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
