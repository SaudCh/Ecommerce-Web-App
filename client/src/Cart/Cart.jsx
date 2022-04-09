import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import axios from "axios";
import { AuthContext } from "../Authentication/auth";

export default function Cart() {
  const context = useContext(AuthContext);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      //console.log(process.env.REACT_APP_BACKEND_URL);
      await axios
        .get(`http://localhost:1000/cart/get/${context.userId}`)
        .then((response) => {
          //console.log(response.data.cart);
          setCart(response.data.cart);
        })
        .catch((e) => console.log(e));
    };

    getCart();
    let tot = 0;
    cart.map((e) => (tot = parseInt(e.price) * e.quantity + tot));
    setTotal(tot);
  }, [cart, context.userId]);

  const deleteItem = async (id) => {
    await axios
      .delete(`http://localhost:1000/cart/delete/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => console.log(e));
  };

  if (cart.length === 0) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "70vh" }}
      >
        <h5>There is no Item in Cart</h5>
      </div>
    );
  }

  const decQuan = async (id, quan) => {
    if (quan === 1) {
      return;
    }
    await axios
      .patch(`http://localhost:1000/cart/decquan/${id}`, { quantity: quan })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => console.log(e));
  };

  const incQuan = async (id, quan) => {
    await axios
      .patch(`http://localhost:1000/cart/incquan/${id}`, { quantity: quan })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="p-5">
      <table class="table align-middle">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((e, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>
                <img src={e.img} width={80} alt="" />
              </td>
              <td>{e.name}</td>
              <td>{e.price}</td>
              <td>
                <div className="d-flex">
                  <p
                    className="bg-danger text-white inc"
                    style={{ width: 20, paddingLeft: "7px" }}
                    onClick={() => decQuan(e._id, e.quantity)}
                  >
                    -
                  </p>
                  <p className="mx-2">{e.quantity}</p>
                  <p
                    className="bg-info text-white inc"
                    style={{ width: 20, paddingLeft: "5px" }}
                    onClick={() => incQuan(e._id, e.quantity)}
                  >
                    +
                  </p>
                </div>
              </td>
              <td>
                <button
                  onClick={() => deleteItem(e._id)}
                  className="btn btn-danger btn-sm"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div
        className="bg-danger d-flex justify-content-center rounded "
        style={{
          position: "absolute",
          right: "30px",
          width: 250,
          height: 30,
          paddingTop: 1,
        }}
      >
        <Link
          style={{ textDecoration: "none" }}
          to="/checkout"
          className="text-white fw-bold"
        >
          Total: {total} Rs Continue <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
}
