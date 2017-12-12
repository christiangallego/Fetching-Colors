import React from "react";

export default class Box extends React.Component {
  render() {
    return (
      <div style = {{ 
        height: 500, 
        backgroundColor: `${this.props.color}`
      }}
      className = "container">
        <div className = "text-center" >
          <button style = {{ 
            marginTop: 250
          }}
          onClick = {() => {this.props.handleClick()}}
          className="btn btn-lg btn-light"> 
          Change Color! 
          </button>
        </div>
      </div>
    )
  }
}