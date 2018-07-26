import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ADD_TODO, REMOVE_TODO } from 'actions/app';

const Home = ({ msg, add }) => (
  <div onClick={() => add(1)}>
    Hello
    {msg}
  </div>
);

Home.propTypes = {
  msg: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
  msg: state.msg,
});

const mapDispatchToprops = dispatch => ({
  add: id => dispatch(ADD_TODO({ name: id })),
  remove: id => dispatch(REMOVE_TODO({ name: id })),
});

export default connect(mapStateToProps, mapDispatchToprops)(Home);
