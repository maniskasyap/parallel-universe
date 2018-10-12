import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

class FormCat extends Component {
  constructor() {
    super();
    this.state = {
      cat: null,
      saveSuccess: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.saveCat = this.saveCat.bind(this);
  }

  componentDidMount() {}

  handleInput = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    let newVal = Object.assign({}, this.state.cat, {
      [name]: value
    });

    this.setState({
      cat: newVal
    });
  };

  saveCat = e => {
    debugger;
    e.preventDefault();
    const cat = this.state.cat;
    fetch("/cats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cat)
    })
      .then(res => {
        res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          saveSuccess: true
        });
      });
  };

  render() {
    if (this.state.saveSuccess) {
      return <Redirect push to="/cats" />;
    }
    return (
      <div>
        <h3>Cat form</h3>
        <Form layout="horizontal" onSubmit={this.saveCat}>
          <FormItem label="Name">
            <Input
              name="name"
              placeholder="Enter a cool name for your cat"
              onChange={this.handleInput}
            />
          </FormItem>
          <FormItem label="Style">
            <Input
              name="style"
              placeholder="What style is your cat"
              onChange={this.handleInput}
            />
          </FormItem>
          <FormItem label="Avatar URL">
            <Input
              name="avatar"
              placeholder="Avatar url"
              onChange={this.handleInput}
            />
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </FormItem>
        </Form>
      </div>
    );
  }
}

export default FormCat;
