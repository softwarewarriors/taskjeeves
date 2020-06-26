import React from 'react';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';


/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class TaskItem extends React.Component {
  removeTask(docID) {
    this.props.Task.remove(docID);
  }

  render() {
    return (
        <Segment>
          <Header as={'h4'}>
            {this.props.task.subject}
          </Header>
          <Button icon floated='right' onClick={() => this.removeTask(this.props.task._id)}>
            <Icon name='check circle outline'/>
          </Button>
          <Button icon floated='right' as={NavLink} exact to={`/edit/${this.props.task._id}`}>
            <Icon name='edit outline'/>
          </Button>
          <Header as={'h4'} floated='right'>
            {/* eslint-disable-next-line no-undef */}
            Due: {moment(this.props.task.due).format('MMM Do YYYY')}
          </Header>
          <Header.Subheader>
            {this.props.task.description}
          </Header.Subheader>
        </Segment>
    );
  }
}

/** Require a document to be passed to this component. */
TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  Task: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(TaskItem);
