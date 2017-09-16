import React, { Component } from 'react';

export default class SizeChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  componentWillReceiveProps({ allowEdit }) {
    this.setState({ allowEdit });
  }
  handleSizeChange(e) {
    this.props.handleSizeChange(e.target.value);
  }
  render() {
    return (
      <select
        onChange={e => this.handleSizeChange(e)}
        disabled={!this.state.allowEdit}
        className="dropDownContainer"
      >
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select>
    );
  }
}
