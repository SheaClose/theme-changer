import React, { Component } from 'react';

export default class EditToggle extends Component {
  // constructor(props) {
  //   super(props);
  // }
  allowEdit(e) {
    this.props.changeAllowEdit(e.target.value === 'true' ? true : false);
  }
  render() {
    return (
      <select
        onChange={e => this.allowEdit(e)}
        className="dropDownContainer ml0"
      >
        <option value={true}> Allow Edit </option>
        <option value={false}> Disable Edit </option>
      </select>
    );
  }
}
