import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Container, Loader, Segment } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import { Task } from '../../api/task/Task';
import TaskItem from '../components/TaskItem';

/** Renders a table containing all of the Task documents. Use <TaskItem> to render each row. */
class ListTaskers extends React.Component {

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
              <Card.Header className="tasksHeader">My Tasks</Card.Header>
            </Card.Content>
            <Card.Content><Card.Description>
              You are currently viewing your tasks. Choose to edit or mark your tasks as completed.
            </Card.Description></Card.Content>
            <Card.Content extra>
              <Segment.Group>
                {this.props.tasks
                    .filter(task => task.completed === false)
                    .map((task) => <TaskItem key={task._id} task={task} Task={Task} />)}
              </Segment.Group>
            </Card.Content>
          </Card>
        </Card.Group>
      </Container>
    );
  }
}

/** Require an array of Task documents in the props. */
ListTaskers.propTypes = {
  tasks: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Task documents.
  const subscription = Meteor.subscribe('Tasks');
  return {
    tasks: Task.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListTaskers);
