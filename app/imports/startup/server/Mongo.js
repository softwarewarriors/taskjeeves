import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Task } from '../../api/task/Task.js';

/* eslint-disable no-console */

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.insert(data);
}

/** Initialize the collection if empty. */
if (Stuffs.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.map(data => addData(data));
  }
}

/** Initialize the database with a default tasks document. */
function addTasks(data) {
  console.log(`  Adding: ${data.subject} (${data.owner})`);
  Task.insert(data);
}

/** Initialize the collection if empty. */
if (Task.find().count() === 0) {
  if (Meteor.settings.defaultTasks) {
    console.log('Creating default tasks.');
    Meteor.settings.defaultTasks.map(data => addTasks(data));
  }
}
