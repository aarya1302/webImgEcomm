import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";
function HomeScreenItems(props) {
  const [itemsToDisplayHomeScreen, setItemsToDisplayHomeScreen] = useState([
    {
      title: "abstract1",
      picture: "https://i.imgur.com/3FeE4U4.png",
      description:
        "abstract art that can be used as background for website home page",
    },
    {
      title: "abstract 2",
      picture: "https://i.imgur.com/8vvlKjo.png",
      description:
        "abstract art that can be used as background for website home page",
    },
    {
      title: "something",
      picture: "https://i.imgur.com/3FeE4U4.png",
      description: "",
    },
  ]);
  var itemsCards = itemsToDisplayHomeScreen.map((item) => {
    return (
      <Card style={{ width: "19rem" }}>
        <Card.Img variant="top" style={{ height: "75%" }} src={item.picture} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Button variant="primary">
            <Link to="/product" style={{ color: "white" }}>
              See more
            </Link>
          </Button>
        </Card.Body>
      </Card>
    );
  });
  return (
    <div className="displayProductCards container-fluid">{itemsCards}</div>
  );
}
export default HomeScreenItems;
