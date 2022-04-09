import React from "react";
import Carousel from "./Carousel";
import { getItems } from "../data/items";
import { getDiscountedItems } from "../data/discounted";
import Card from "./Card";
import { Link } from "react-router-dom";

export default function Home(props) {
  const items = getItems();
  const disItems = getDiscountedItems();

  return (
    <div>
      <Carousel />

      <div className="d-flex justify-content-between mt-3 px-2">
        <h5>Today Deals</h5>
        <Link to="/" className="text-decoration-none">
          See More
        </Link>
      </div>
      <div className="container-fluid">
        <div className="row">
          {items.map((e) => (
            <Card item={e} cartHandler={props.cartHandler} />
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-between mt-3 px-2">
        <h5>Discounted Offer</h5>
        <Link to="/" className="text-decoration-none">
          See More
        </Link>
      </div>
      <div className="container-fluid">
        <div className="row">
          {disItems.map((e) => (
            <Card item={e} cartHandler={props.cartHandler} />
          ))}
        </div>
      </div>
    </div>
  );
}
