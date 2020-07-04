import { Meteor } from 'meteor/meteor';
import { Task } from '../../api/task/Task';
import { User } from '../../api/user/User';

/** This subscription publishes only the tasks associated with the logged in user */
Meteor.publish('Tasks', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Task.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes only the information associated with the logged in user */
Meteor.publish('User', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return User.find({ email: username });
  }
  return this.ready();
});
