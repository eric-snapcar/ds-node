import {render} from 'react-dom';
import React from 'react';
class App extends React.Component {
  constructor(props){
    super(props)
  }
  render () {
        return (
          <div>
              HELLO
          </div>
        );
  }
}
render(<App />, document.getElementById('app'));
