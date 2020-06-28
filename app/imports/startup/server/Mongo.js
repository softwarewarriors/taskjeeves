import { Meteor } from 'meteor/meteor';
import { Task } from '../../api/task/Task.js';
import { User } from '../../api/user/User.js';

/* eslint-disable no-console */

/** Initialize the database with a default tasks document. */
function addTasks(data) {
  console.log(`  Adding: ${data.subject} (${data.owner})`);
  Task.insert(data);
}

/** Initialize the Task collection if empty. */
if (Task.find().count() === 0) {
  if (Meteor.settings.defaultTasks) {
    console.log('Creating default tasks.');
    Meteor.settings.defaultTasks.map(data => addTasks(data));
  }
}

/** Initialize the database with a default users. */
function addUser(data) {
  console.log(`  Adding: ${data.email}`);
  User.insert(data);
}

/** Initialize the User collection if empty. */
if (User.find().count() === 0) {
  if (Meteor.settings.defaultUsers) {
    console.log('Creating default data.');
    Meteor.settings.defaultUsers.map(data => addUser(data));
  }
}
