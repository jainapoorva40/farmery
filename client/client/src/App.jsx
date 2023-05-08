import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success2 from "./pages/Success2";
import Cart1 from "./pages/Cart1";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import About from "./pages/About";
import Weather from "./pages/Weather";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/cart1">
          <Cart1 />
        </Route>

        <Route path="/success">
          <Success />
        </Route>
        <Route path="/success2">
          <Success2 />
        </Route>
        <Route path='/login'>{user ? <Redirect to='/' /> : <Login />}</Route>
      <Route path='/register'>
        <Register />
      </Route>
      <Route path="/about">{user ? <Redirect to="/" /> : <About />}</Route>

      <Route path="/weather">{user ? <Redirect to="/" /> :
       <Weather />}</Route>

      
      
        
      </Switch>
      
    </Router>
  );
};

export default App;
