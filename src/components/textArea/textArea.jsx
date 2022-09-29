import React from "react";
import './textArea.css';

export default class TextArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {rows, placeholder, name, label, value, onChange} = this.props;
    return (
      <div className={"text-area"}>
        <label className={"text-label"} htmlFor={name}>{label}</label>
        <textarea onChange={onChange} value={value} className={"text"} placeholder={placeholder} rows={rows} name={name}></textarea>
      </div>
    );
  }
}
