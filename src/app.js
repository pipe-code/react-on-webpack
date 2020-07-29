import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styles from './app.module.scss';

class App extends Component {
  render() {
    return(
      <div className={styles.App}>
        <h1>Welcome to React on Webpack</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));