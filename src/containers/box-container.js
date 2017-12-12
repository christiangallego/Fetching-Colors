import React from "react";
import { connect } from "react-redux";
import Box from "../components/box.js";
import * as actionCreators from "../actions/index.js";

class BoxCon extends React.Component {
  render() {
    return (
      <div>
        <Box
          handleClick={this.props.loadColor}
          color={this.props.color}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
};

export default connect(mapStateToProps, actionCreators)(BoxCon);