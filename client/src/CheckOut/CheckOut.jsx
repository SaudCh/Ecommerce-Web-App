import React, { useEffect, useState } from "react";

export default function CheckOut(props) {
  const { cart } = props;
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let tot = 0;
    cart.map((e) => (tot = parseInt(e.price) * e.quantity + tot));
    setTotal(tot);
  }, [cart]);

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

  return (
    <div className="container-fluid mt-4">
      <div className="row" style={{ margin: "0 auto" }}>
        <div className="col-5">
          <h4>Billing Details</h4>
          <form action="">
            <div class="form-group mb-2 row">
              <label for="name" class="col-sm-2 col-form-label">
                Name
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div class="form-group  mb-2 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Email
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="form-group mb-2 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Phone
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div class="form-group mb-2 row">
              <label for="inputPassword" class="col-sm-2 col-form-label">
                Address
              </label>
              <div class="col-sm-10">
                <textarea
                  type="password"
                  class="form-control"
                  id="inputPassword"
                  placeholder="Address"
                ></textarea>
              </div>
            </div>
            <button
              style={{ backgroundColor: "#fd7e14", color: "white" }}
              className="btn"
            >
              Confirm Order
            </button>
          </form>
        </div>
        <div className="col-1"></div>
        <div className="col-4">
          <div className="border bg-light p-2">
            <h5>Cart Summary</h5>
            <ul style={{ listStyle: "none" }}>
              {cart.map((e) => (
                <li className="border-bottom my-3">
                  <div className="d-flex justify-content-between">
                    <div>
                      <strong>
                        {e.quantity} x {e.name.substr(0, 30)}...
                      </strong>
                    </div>
                    <div>Rs {e.price * e.quantity}</div>
                  </div>
                </li>
              ))}
              <li className="text-end">
                Sub Total Rs<strong>{total}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
