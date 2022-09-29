import React from "react";
import './App.css';
import Input from "./components/input/input";
import Button from "./components/button/button";
import TextArea from "./components/textArea/textArea";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      birthday: "",
      phone: "",
      site: "",
      about: "",
      stack: "",
      lastProject: "",
    };
    this.onChange = this.onChange.bind(this);
    this.clearRestore = this.clearRestore.bind(this);
    this.alertData = this.alertData.bind(this);
  }

  onChange(e) {
    this.setState((prev) => ({
        ...prev,
        [e.target.name]: e.target.value
      })
    )
  }

  clearRestore() {
    this.setState({
      name: "",
      surname: "",
      birthday: "",
      phone: "",
      site: "",
      about: "",
      stack: "",
      lastProject: "",
    })
  }

  alertData() {
    alert(JSON.stringify(this.state, null, 2))
  }

  render() {
    return (
      <div className={'main'}>
        <div className={'form'}>
          <h1 className={'title'}>Создание анкеты</h1>
          <Input value={this.state.name} type="text" placeholder="Имя" name="name" id="name" onChange={this.onChange}/>
          <Input value={this.state.surname} type="text" placeholder="Фамилия" name="surname" id="surname"
                 onChange={this.onChange}/>
          <Input value={this.state.birthday} type="text" placeholder="Дата рождения" name="birthday" id="birthday"
                 onChange={this.onChange}/>
          <Input value={this.state.phone} type="tel" placeholder="Телефон" name="phone" id="phone"
                 onChange={this.onChange}/>
          <Input value={this.state.site} type="text" placeholder="Сайт" name="site" id="site" onChange={this.onChange}/>
          <TextArea value={this.state.about} rows={7} label="О себе" placeholder="Расскажите о себе" name="about"
                    onChange={this.onChange}/>
          <TextArea value={this.state.stack} rows={7} label="Стек технологий" placeholder="Расскажите, каким стеком технологий вы пользуетесь"
                    name="stack" onChange={this.onChange}/>
          <TextArea value={this.state.lastProject} rows={7} label="Описание последнего проекта" placeholder="Расскажите о своем последнем проекте"
                    name="lastProject" onChange={this.onChange}/>
          <Button title="Сохранить" onClick={this.alertData}/>
          <Button title="Отмена" onClick={this.clearRestore}/>
        </div>
      </div>
    );
  }
}
