import React from "react";
import './button.css';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, onClick} = this.props;
    return (
      <button className={"button"} onClick={onClick}>{title}</button>
    );
  }
}
