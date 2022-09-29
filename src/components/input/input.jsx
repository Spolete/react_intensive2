import React from "react";
import './input.css';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {type, placeholder, name, id, onChange, value, onKeyDown} = this.props;
    return (
      <div className={"input"}>
        <input
          className={"input-field"}
          type={type}
          placeholder={placeholder}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <label className={"input-label"} htmlFor={name}>{placeholder}</label>
      </div>
    );
  }
}
