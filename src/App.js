import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import AddProducts from './Components/AddProducts/AddProducts';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Checkout from './Components/Checkout/Checkout';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Orders from './Components/Orders/Orders';
import NavAdmin from './Components/NavAdmin/NavAdmin';
import ManageProducts from './Components/ManageProducts/ManageProducts';
import PrivateRoute from './PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState({})
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router >
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <PrivateRoute path="/admin">
            <NavAdmin />
            <AddProducts />
          </PrivateRoute>
          <Route path="/addproducts">
            <NavAdmin />
            <AddProducts />
          </Route>
          <Route path="/manage">
            <NavAdmin />
            <ManageProducts />
          </Route>
          <Route path="/login">
          <Navbar />
            <Login />
          </Route>
          <Route path="/orders">
            <Navbar />
            <Orders />
          </Route>
          <PrivateRoute path="/checkouts/:id">
            <Navbar />
            <Checkout />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
