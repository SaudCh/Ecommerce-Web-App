import React from "react";
import { getAllItems } from "../data/AllItems";
import Card from "./Card";

export default function Items(props) {
  const items = getAllItems();
  return (
    <div className="container-fluid">
      <div className="row p-2">
        {items.map((e) => (
          <Card item={e} cartHandler={props.cartHandler} />
        ))}
      </div>
    </div>
  );
}
