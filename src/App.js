import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


export default class App extends Component {

  constructor(props) {
    super(props);
    console.log("App - Constructor called");
    console.log(props);
    this.state = {
      roll: "101"
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App-  Get Derived From PROPS methods");
    console.log(props, state);
    return null;
  }

  componentDidMount() {
    console.log("App - ComponentDidMount method mounted....");
  }


  render() {
    return (
      <>
        <Button variant="contained" color="primary">Material Click Me</Button>
      </>
    )
  }
}

