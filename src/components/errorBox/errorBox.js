import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// import { Container } from './styles';

class errorBox extends Component {
  render() {
    return (
      <div>
        <span>{this.props.error.message}</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error
});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(errorBox);
