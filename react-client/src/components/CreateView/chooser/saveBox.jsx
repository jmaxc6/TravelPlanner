import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider';

class SaveBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };
    this.updateTripName = this.updateTripName.bind(this);
    this.updateTripDesc = this.updateTripDesc.bind(this);
  }

  updateTripName(event) {
    console.log('ran');
    this.setState({
      name: event.target.value
    });
  }

  updateTripDesc(event) {
    console.log('ran');
    this.setState({
      description: event.target.value
    });
  }

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onClick={this.props.toggle}
      />,
      <RaisedButton
        label="Save"
        primary={true}
        onClick={this.props.toggle}
      />
    ];

    return (

      <Dialog
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.toggle}
        actionsContainerStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        bodyStyle={{
          height: '400px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >

        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <TextField 
            hintText="Trip title..."
            fullWidth={true}
            underlineShow={false}
            value={this.state.name}
            onChange={this.updateTripName}
          />
          <Divider />
          <TextField 
            hintText="Trip Description"
            multiLine={true}
            fullWidth={true}
            underlineShow={false}
            value={this.state.description}
            onChange={this.updateTripDesc}
          />
        </div>

      </Dialog>

    )

  }

}

export default SaveBox;