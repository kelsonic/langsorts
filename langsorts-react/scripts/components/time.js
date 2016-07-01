import React, {Component} from 'react';

class Time extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="col s12 m6">
        <h4 className="orange-text">Time</h4>
        <div className="divider"></div>
        <p className="flow-text red-text">Best: <span className="black-text">{this.props.best}</span></p>
        <p className="flow-text red-text">Worst: <span className="black-text">{this.props.worst}</span></p>
      </div>
    );
  }
}

export default Time;