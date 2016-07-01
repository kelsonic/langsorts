import React, {Component} from 'react';
import AlgList from './components/algList';
import Algorithm from './components/algorithm';
import LangList from './components/langList';
import Space from './components/space';
import Time from './components/time';

export default class App extends Component {
  render() {
    return (
      <div>
        <form action="/" method="GET" className="row">
          <AlgList />
          <LangList />
        </form>
        <Algorithm />
        
        <div className="row stats center">
          <h2 className="orange-text text-darken-3">
            Complexities
          </h2>
          <Space />
          <Time />
        </div>
      </div>
    );
  }
}
