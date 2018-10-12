import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Button, Icon, Card, Row, Col } from "antd";
import "./cool-cats.css";

const { Meta } = Card;
class CoolCats extends Component {
  constructor() {
    super();
    this.state = {
      cats: [],
      catId: null
    };

    this.createNewCat = this.createNewCat.bind(this);
  }

  componentDidMount() {
    fetch("/cats")
      .then(res => res.json())
      .then(cats =>
        this.setState(
          {
            cats
          },
          () => console.log("cats fetched...", cats)
        )
      );
  }

  createNewCat() {
    this.setState({
      catId: "new"
    });
  }
  render() {
    if (this.state.catId) {
      return <Redirect push to="/cats/new" />;
    }
    return (
      <div>
        <div>
          <Button size="large" onClick={this.createNewCat}>
            Create New
            <Icon type="plus-circle" />
          </Button>
        </div>
        <h2>Cool Cats</h2>
        <Row gutter={16}>
          {this.state.cats.map(cat => (
            <Col key={cat._id} className="gutter-row" span={6}>
              <Card
                cover={<img alt={cat.name} src={cat.avatar} />}
                actions={[<Button icon="edit" />]}
              >
                <Meta title={cat.name} description={cat.style} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default CoolCats;
