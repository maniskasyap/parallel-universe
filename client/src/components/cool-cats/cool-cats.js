import React, { Component } from "react";
import { Button, Icon, Card, Row, Col } from "antd";
import "./cool-cats.css";

const { Meta } = Card;
class CoolCats extends Component {
  constructor() {
    super();
    this.state = {
      cats: []
    };
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
  render() {
    return (
      <div>
        <div>
          <Button size="large">
            Create New
            <Icon type="plus-circle" />
          </Button>
        </div>
        <h2>Cool Cats</h2>
        <Row gutter={16}>
          {this.state.cats.map(cat => (
            <Col className="gutter-row" span={6}>
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
