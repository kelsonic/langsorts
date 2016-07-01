import React, {Component} from 'react';

class Space extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="col s12 m6">
        <h4 className="orange-text">Space</h4>
        <div className="divider"></div>
        <p className="flow-text red-text">Worst: <span className="black-text">{this.props.worst}</span></p>
      </div>
    );
  }
}

export default Space;