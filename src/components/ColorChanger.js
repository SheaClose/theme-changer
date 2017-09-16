import React, { Component } from 'react';

export default class ColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
    this.changeColor = this.changeColor.bind(this);
  }

  componentWillReceiveProps({ allowEdit }) {
    this.setState({ allowEdit });
  }
  changeColor(e) {
    this.props.changeColor(e.target.value);
  }
  render() {
    return (
      <select
        disabled={!this.state.allowEdit}
        onChange={e => this.changeColor(e)}
        className="dropDownContainer"
      >
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    );
  }
}
