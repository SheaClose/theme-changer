import React, { Component } from 'react';
import ColorChanger from './components/ColorChanger';
import TextContainer from './components/TextContainer';
import EditToggle from './components/EditToggle';
import FamilyChanger from './components/FamilyChanger';
import SizeChanger from './components/SizeChanger';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontColor: 'black',
      fontSize: 12,
      fontFamily: 'monospace',
      allowEdit: true
    };
    this.changeColor = this.changeColor.bind(this);
    this.changeAllowEdit = this.changeAllowEdit.bind(this);
    this.changeFontFamily = this.changeFontFamily.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
  }
  changeColor(fontColor) {
    this.setState({ fontColor });
  }
  changeAllowEdit(allowEdit) {
    this.setState({ allowEdit });
  }
  changeFontFamily(fontFamily) {
    this.setState({ fontFamily });
  }
  handleSizeChange(e) {
    this.setState({ fontSize: e });
  }
  render() {
    return (
      <div className="">
        <nav>
          <EditToggle changeAllowEdit={this.changeAllowEdit} />
          <ColorChanger
            allowEdit={this.state.allowEdit}
            changeColor={this.changeColor}
          />
          <FamilyChanger
            allowEdit={this.state.allowEdit}
            changeFontFamily={this.changeFontFamily}
          />
          <SizeChanger
            allowEdit={this.state.allowEdit}
            handleSizeChange={this.handleSizeChange}
          />
        </nav>
        <TextContainer {...this.state} />
      </div>
    );
  }
}
