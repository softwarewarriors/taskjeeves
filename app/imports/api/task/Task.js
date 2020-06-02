import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const Task = new Mongo.Collection('Tasks');

/** Define a schema to specify the structure of each document in the collection. */
const TaskSchema = new SimpleSchema({
  subject: String,
  description: String,
  owner: String,
  created: Date,
  due: Date,
  completed: Boolean,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Task.attachSchema(TaskSchema);

/** Make the collection and schema available to other code. */
export { Task, TaskSchema };
