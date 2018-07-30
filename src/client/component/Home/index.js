import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { APP_SERVICE_START } from 'actions/app';
import todoService from 'services/todo';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    const { getTodo } = this.props;
    getTodo();
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleKeyDown(event) {
    if (event.key === 'Enter') {
      const { addTodo } = this.props;
      const { value } = this.state;
      if (value) {
        addTodo(value);
        this.setState({
          value: '',
        });
      }
    }
  }

  render() {
    const { list, removeTodo } = this.props;
    const { value } = this.state;
    let content = null;
    if (list.length > 0) {
      const result = list.map(item => (
        <li key={item.id} onClick={() => removeTodo(item.id)}>
          {item.content}
        </li>
      ));
      content = (
        <ol>
          {result}
        </ol>
      );
    }
    return (
      <div>
        todolist
        {
          content
        }
        <div>
          <input type="text" value={value} onChange={this.handleChange} onKeyPress={this.handleKeyDown} />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  getTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  list: state.todo.list,
  msg: state.msg,
});

const mapDispatchToprops = dispatch => ({
  getTodo: () => dispatch(APP_SERVICE_START({ name: 'getTodo', func: todoService.getTodo })),
  addTodo: todo => dispatch(APP_SERVICE_START({ name: 'addTodo', func: todoService.addTodo, args: [{ todo }, { a: 1 }] })),
  removeTodo: id => dispatch(APP_SERVICE_START({ name: 'removeTodo', func: todoService.removeTodo, args: [{ id }] })),
});

export default connect(mapStateToProps, mapDispatchToprops)(Home);
