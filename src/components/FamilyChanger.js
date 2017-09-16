import React, { Component } from 'react';

export default class FamilyChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  componentWillReceiveProps({ allowEdit }) {
    this.setState({ allowEdit });
  }
  changeFontFamily(e) {
    this.props.changeFontFamily(e.target.value);
  }
  render() {
    return (
      <select
        disabled={!this.state.allowEdit}
        onChange={e => this.changeFontFamily(e)}
        className="dropDownContainer"
      >
        <option value="monospace"> Monospace </option>
        <option value="arial"> Arial </option>
        <option value="serif"> Courier </option>
      </select>
    );
  }
}
