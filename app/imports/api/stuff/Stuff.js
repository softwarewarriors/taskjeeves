import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Define a Mongo collection to hold the data. */
const AccountData = new Mongo.Collection('Account');

/** Define a schema to specify the structure of each document in the collection. */
const AccountSchema = new SimpleSchema({
  name: String,
  email: String,
  bio: { type: String, optional: true, defaultValue: '' },
  hobbies: { type: Array, optional: true },

}, { tracker: Tracker });

/** Attach this schema to the collection. */
AccountData.attachSchema(AccountSchema);

/** Make the collection and schema available to other code. */
export { AccountData, AccountSchema };
