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

  componentDidMount() {
    const catId = this.props.match.params.catId;
    fetch("/cats/" + catId)
      .then(res => res.json())
      .then(data => {
        this.setState({ cat: data });
      })
      .catch(err => {});
  }

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
    e.preventDefault();
    const cat = this.state.cat;
    const method = cat._id ? "PUT" : "POST";
    const url = cat._id ? "/cats/" + cat._id : "/cats";
    fetch(url, {
      method: method,
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
              value={this.state.cat ? this.state.cat.name : ""}
              onChange={this.handleInput}
            />
          </FormItem>
          <FormItem label="Style">
            <Input
              name="style"
              placeholder="What style is your cat"
              value={this.state.cat ? this.state.cat.style : ""}
              onChange={this.handleInput}
            />
          </FormItem>
          <FormItem label="Avatar URL">
            <Input
              name="avatar"
              placeholder="Avatar url"
              value={this.state.cat ? this.state.cat.avatar : ""}
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
