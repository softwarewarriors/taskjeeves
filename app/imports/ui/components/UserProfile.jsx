import React from 'react';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';


/** Renders a single row in the User Profile table. See pages/Profile.jsx. */
class UserProfile extends React.Component {
  render() {
    return (
        <Segment>
          <Header as={'h4'}>
            {this.props.user.firstName}
          </Header>
          <Header as={'h4'}>
            {this.props.user.lastName}
          </Header>
          <Header as={'h4'}>
            {this.props.user.email}
          </Header>
          <Header as={'h4'}>
            {this.props.user.address}
          </Header>
          <Button icon floated='right' as={NavLink} exact to={`/editprofile/${this.props.user._id}`}>
            <Icon name='edit outline'/>
          </Button>
        </Segment>
    );
  }
}

/** Require a document to be passed to this component. */
UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
  User: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(UserProfile);
