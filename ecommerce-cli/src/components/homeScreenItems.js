import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";
import { fetchHomeProducts } from "../lib/crud_functions";
import { setProducts } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../actions/getProductsAction";

function HomeScreenItems(props) {
  var dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { loading, error, products } = getProducts;
  useEffect(
    function onUpdate() {
      dispatch(getProductsAction);
    },
    [dispatch]
  );

  if (products) {
    var itemsCards = products.map((item) => {
      return (
        <Card style={{ width: "19rem" }}>
          <Card.Img
            variant="top"
            style={{ height: "75%" }}
            src={item.main_picture}
          />
          <Card.Body>
            <Card.Title>{item.item_name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button variant="primary">
              <Link to={"/product/" + item._id} style={{ color: "white" }}>
                See more
              </Link>
            </Button>
          </Card.Body>
        </Card>
      );
    });
  } else {
    var itemCards = "loading";
  }

  return (
    <div className="displayProductCards container-fluid fullScreen">
      {itemsCards}
    </div>
  );
}
export default HomeScreenItems;
