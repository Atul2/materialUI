import React, { Component } from 'react';
import {TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, AppBar,Button, Toolbar, IconButton,Typography, Drawer,ListItem, ListItemIcon, List, ListItemText } from "@material-ui/core";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Menu from '@material-ui/icons/Menu';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      openModal: false
    };
    this.close = this.close.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  
  }
  close() {
    this.setState({
      show: false
    });
  }

  toggleDrawer() {
    this.setState({ show: true });
  }

  showModal() {
    this.setState({ openModal:true });
  };

  hideModal(){
    this.setState({ openModal:false });
  };

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
       <div style={{flexGrow: 1}}>
      <AppBar position="sticky">
            <Toolbar >
              <IconButton edge="start" onClick={this.toggleDrawer} color="inherit" aria-label="menu">
              <Menu />
                </IconButton>
                <Typography variant="h6" style={{flexGrow: 1}}>
                News
              </Typography>
              <Button color="inherit" onClick={this.showModal} >Login</Button>
            </Toolbar>
          
          </AppBar>
          
          <Drawer open={this.state.show}
          onClose={this.close} >
            <List style={{width:250}}>

              <ListItem>
              <ListItemIcon><InboxIcon/></ListItemIcon>
                <ListItemText>Inbox    </ListItemText>
              </ListItem>

              <ListItem>
              <ListItemIcon><MailIcon/></ListItemIcon>
                <ListItemText>Send Email    </ListItemText>
              </ListItem>


              <ListItem>
              <ListItemIcon><InboxIcon/></ListItemIcon>
                <ListItemText>Inbox    </ListItemText>
              </ListItem>

              <ListItem>
              <ListItemIcon><MailIcon/></ListItemIcon>
                <ListItemText>Send Email    </ListItemText>
              </ListItem>


            </List>
          </Drawer> 
        </div>
        

        <Dialog open={this.state.openModal} onClose={this.hideModal} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.hideModal} color="primary">
            Cancel
          </Button>
          <Button onClick={this.hideModal} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
      </>
    )
  }
}

