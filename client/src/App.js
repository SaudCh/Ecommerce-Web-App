import "./App.css";
import Header from "./Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./Home/home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/register";
import Item from "./Item/item";
import Footer from "./Footer/Footer";
import React, { useState } from "react";
import Cart from "./Cart/Cart";
import CheckOut from "./CheckOut/CheckOut";
import Items from "./AllItems/items";
import { useCallback } from "react"
import { AuthContext } from "./Authentication/auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const [cart, setCart] = useState([]);
  const cartHandler = (prod) => {
    //console.log(prod);
    let newProd = prod
    newProd['quantity'] = 1
    setCart((product) => [...product, newProd]);
    //console.log(cart);
  };
  const removeCart = (id) => {
    //console.log(id);
    setCart((c) => {
      return c.filter((ca) => ca.id !== id);
    });
  };

  const login = useCallback((id) => {
    setIsLoggedIn(true);
    setUserId(id);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);

  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <BrowserRouter>
        <Header cart={cart} />
        <Switch>
          <Route path="/" exact>
            <Home cartHandler={cartHandler} />
          </Route>
          <Route path="/product/:pid" exact>
            <Item />
          </Route>
          <Route path="/products" exact>
            <Items cartHandler={cartHandler} />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/cart" exact>
            {/* <Register /> */}
            <Cart cart={cart} removeCart={removeCart} setCart={setCart} />
          </Route>
          <Route path="/checkout" exact>
            <CheckOut cart={cart} />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
