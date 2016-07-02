import React, {Component} from 'react';

class Algorithm extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="row">
        <div className="col s12 m10 offset-m1 l8 offset-l2">
          <pre className="z-depth-3">
            <code className={this.props.language}>
              {this.props.algCode}
            </code>
          </pre>
        </div>
      </div>
    );
  }

}

export default Algorithm;