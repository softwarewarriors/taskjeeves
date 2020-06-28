import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Container, Loader, Segment } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { User } from '../../api/user/User';
import UserProfile from '../components/UserProfile';

/** Renders a table containing all of the User documents. Use <UserProfile> to render each row. */
class Profile extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
      <Container style={{ height: '110vh' }}>
        <Card.Group centered style={{ paddingTop: '20vh' }}>
          <Card fluid>
            <Card.Content>
              <Card.Header className="tasksHeader">My Profile</Card.Header>
            </Card.Content>
            <Card.Content><Card.Description>
              You are currently viewing your profile. Choose to edit your information as needed.
            </Card.Description></Card.Content>
            <Card.Content extra>
              <Segment.Group>
                {this.props.users
                    .map((user) => <UserProfile key={user._id} user={user} User={User} />)}
              </Segment.Group>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    );
  }
}

/** Require an array of User documents in the props. */
Profile.propTypes = {
  users: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to User documents.
  const subscription = Meteor.subscribe('User');
  return {
    users: User.find({}).fetch(),
    ready: subscription.ready(),
  };
})(Profile);
