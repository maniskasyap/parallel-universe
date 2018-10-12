import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import "./App.css";
import CoolCats from "./components/cool-cats/cool-cats";

const { Header, Content, Footer, Sider } = Layout;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout style={{ minHeight: "100vh" }}>
          <Sider collapsible>
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
              <Menu.Item key="1">
                <Link to="/">
                  <Icon type="home" />
                  <span>Home</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/cats">
                  <Icon type="user" theme="outlined" />
                  <span>Cats</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/dogs">
                  <Icon type="user" theme="outlined" />
                  <span>Dogs</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/bunnies">
                  <Icon type="user" theme="outlined" />
                  <span>Bunnies</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ margin: "0 16px" }}>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <Route path="/cats" component={CoolCats} />
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
