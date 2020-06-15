import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App.jsx';

/** Startup the application by rendering the App layout component. */
Meteor.startup(() => {
  Accounts.logout();
  render(<App />, document.getElementById('root'));  // eslint-disable-line
});
