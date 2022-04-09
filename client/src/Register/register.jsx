import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const [message, setMessage] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    //alert(email)
    const registered = {
      name: name,
      email: email,
      password: password,
    };
    await axios
      .post("http://localhost:1000/user/adduser", registered)
      .then((response) => {
        console.log(response);
        setMessage(response.data.message);
        setemail("");
        setpassword("");
        setname("");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="text-center py-5">
      <p className="p-0 m-0 h1 mb-4">Register Here</p>

      <form
        onSubmit={submit}
        className="col-10 col-sm-6 col-md-4 text-start bg-light p-4"
        style={{ margin: "0px auto" }}
      >
        {message && (
          <div className="alert alert-success" role="alert">
            {message}
          </div>
        )}
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            value={name}
            onChange={(name) => setname(name.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            value={email}
            onChange={(email) => setemail(email.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(password) => setpassword(password.target.value)}
          />
        </div>
        <input
          className="btn text-white"
          style={{ backgroundColor: "#fe9126" }}
          type="submit"
          value="Submit"
        />
      </form>
      <p className="m-0 p-0 h4 mt-4">Already a User</p>
      <Link
        to="/login"
        className="m-0 p-0 h6"
        style={{ textDecoration: "none", color: "#fe9126" }}
      >
        Login Here
      </Link>
    </div>
  );
};
export default Register;
