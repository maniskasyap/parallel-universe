import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Layout, Menu, Icon } from "antd";
import "./App.css";
import CoolCats from "./components/cool-cats/cool-cats";
import FormCat from "./components/form-cat/form-cat";
// import DataChart from "./components/plots/data-chart";

const { Content, Sider } = Layout;
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
            {/* <div>
              <DataChart />
            </div> */}
            <div
              style={{
                padding: "20px 20px 0 20px",
                background: "#fff",
                minHeight: "400px"
              }}
            >
              <Switch>
                <Route path="/cats/:catId" component={FormCat} />
                <Route path="/cats" component={CoolCats} />
              </Switch>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
