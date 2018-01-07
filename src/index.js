import {render} from 'react-dom';
import React from 'react';
class App extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    var url = "python";
   var params = { method: 'GET'
                 };
                 console.log("TESTBIS");
   fetch(url, params).then(function(response) {
     console.log("TEST");
     console.log(response);
   });
  }
  render () {
        return (
          <div>
              HELLO BIS
          </div>
        );
  }
}
render(<App />, document.getElementById('app'));
