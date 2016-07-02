import React, {Component} from 'react';
import SortList from './sortList';
import Algorithm from './algorithm';
import LangList from './langList';
import Space from './space';
import Time from './time';
import $ from 'jquery';

class AlgorithmParent extends Component {

  constructor(props) {
    super(props);

    this.changeSort = this.changeSort.bind(this);
    this.changeLang = this.changeLang.bind(this);

    this.state = {
      sort: "bubble",
      algCode: "x = 2",
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

  changeSort(chosenSort) {
    this.setState({
      sort: chosenSort
    }, 
    // Callback function
    function() {
      this.callAPI();
      console.log(this.state.sort);
    });
  }

  changeLang(chosenLang) {
    this.setState({
      language: chosenLang
    }, 
    // Callback function
    function() {
      this.callAPI();
      console.log(this.state.language);
    });
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    // Change url to http://langsorts-api.herokuapp.com/?alg= on production
    let url = "http://localhost:9000/?alg=" + this.state.sort + "&lang=" + this.state.language;
    $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({
          algCode: data["algorithm"],
          space: {
            worst: data["space"]["worst"]
          },
          time: {
            best: data["time"]["best"],
            worst: data["time"]["worst"]
          }
        });
        hljs.initHighlighting.called = false;
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
          <SortList 
            changeSort={this.changeSort}
          />
          <LangList 
            changeLang={this.changeLang}
          />
        </form>
        <Algorithm 
          algCode={this.state.algCode}
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