import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import "../product.css";

export default function Product() {
  const [product, setProduct] = useState([]);
  var similarToProduct = [
    <Card style={{ width: "18rem" }} className="space">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>,
    <Card style={{ width: "18rem" }} className="space">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>,
    <Card style={{ width: "18rem" }} className="space">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>,
    <Card style={{ width: "18rem" }} className="space">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>,
  ];

  return (
    <>
      <div className="row container-fluid">
        <div className="row w-100">
          <div className="col">
            <Carousel
              className="w-100"
              variant="dark"
              prevLabel=""
              nextLabel=""
              indicators={false}
              prevIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="black"
                  class="bi bi-arrow-left-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                </svg>
              }
              nextIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="black"
                  class="bi bi-arrow-right-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
              }
            >
              <Carousel.Item>
                <a href="https://i.imgur.com/WIkYhme.png" target="_blank">
                  <img
                    className="carousel-img"
                    src="https://i.imgur.com/WIkYhme.png"
                    alt="First slide"
                  />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <a href="https://i.imgur.com/fGdZ69Q.png" target="_blank">
                  <img
                    className="carousel-img "
                    src="https://i.imgur.com/fGdZ69Q.png"
                    alt="Second slide"
                  />
                </a>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-lg-3 ">
            <div className="container center">
              <h2 className="text-center"> Abstract 1</h2>
              <p>Price: $0.5</p>
              <p>Description: Abstract art to put on website</p>
              <Card style={{ height: "10rem" }} className="">
                <Card.Body>
                  <button className="btn btn-info w-100 btn-space">
                    Buy Now
                  </button>
                  <button className="btn btn-primary w-100 btn-space">
                    Add to Cart
                  </button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="container-fluid space">
        <h5 className="text-muted space">Similar to this Product</h5>
        <div className="displayProductCards">{similarToProduct}</div>
      </div>
      <Link to="/">Go home</Link>
    </>
  );
}
