import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ADD_TODO, APP_SERVICE_START } from 'actions/app';
import todo from 'services/todo';

class Home extends Component {
  componentDidMount() {
    const { getTodo } = this.props;
    getTodo();
  }

  render() {
    const { list, removeTodo } = this.props;
    if (list.length > 0) {
      const result = list.map(item => (
        <li key={item.id} onClick={() => removeTodo(item.id)}>
          {item.content}
        </li>
      ));
      return (
        <ol>
          {result}
        </ol>
      );
    }
    return (
      <div>
        todolist
      </div>
    );
  }
}

Home.propTypes = {
  getTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  list: state.todo.list,
  msg: state.msg,
});

const mapDispatchToprops = dispatch => ({
  getTodo: () => dispatch(APP_SERVICE_START({ name: 'getTodo', func: todo.getTodo })),
  add: id => dispatch(ADD_TODO({ name: id })),
  removeTodo: id => dispatch(APP_SERVICE_START({ name: 'removeTodo', func: todo.removeTodo, args: [{ id }] })),
});

export default connect(mapStateToProps, mapDispatchToprops)(Home);
