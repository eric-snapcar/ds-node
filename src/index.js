import {render} from 'react-dom';
import React from 'react';
class App extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    var url = "test";
   var params = { method: 'GET'
                 };
                 console.log("TESTBIS");
   fetch(url, params).then(function(response) {
     console.log("TEST");
     console.log(response);
   });

   fetch(url, params).then(function(response) {
  if(response.ok){
    return response.json();
  }

  else {
    console.log(response);
  }
}).then(function(json) {
  console.log(json);
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
