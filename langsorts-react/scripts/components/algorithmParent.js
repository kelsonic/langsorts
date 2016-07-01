import React, {Component} from 'react';
import AlgList from './algList';
import Algorithm from './algorithm';
import LangList from './langList';
import Space from './space';
import Time from './time';
import $ from 'jquery';

class AlgorithmParent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      algorithm: "bubble",
      language: "ruby",
      space: {
        worst: "O(n)"
      },
      time: {
        best: "O(n)",
        worst: "O(n)"
      }
    };
  }

  componentDidMount() {
    let url = "http://localhost:9000/?alg=" + this.state.algorithm + "&lang=" + this.state.language;
    $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({
          algorithm: data["algorithm"],
          language: data["language"],
          space: {
            worst: data["space"]["worst"]
          },
          time: {
            best: data["time"]["best"],
            worst: data["time"]["worst"]
          }
        })
        hljs.initHighlighting();
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }
    });
  }

  render() {
    return(
      <div>
        <form action="/" method="GET" className="row">
          <AlgList />
          <LangList />
        </form>
        <Algorithm 
          algorithm={this.state.algorithm}
          language={this.state.language}
        />

        <div className="row stats center">
          <h2 className="orange-text text-darken-3">
            Complexities
          </h2>
          <Space 
            worst={this.state.space.worst}
          />
          <Time 
            best={this.state.time.best}
            worst={this.state.time.worst}
          />
        </div>
      </div>
    );
  }
}

export default AlgorithmParent;