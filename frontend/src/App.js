import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./SidebarStyle.css";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ProductDetails from "./components/product/ProductDetails";
import { useSelector } from "react-redux";

// cart import
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import Payment from "./components/cart/Payment";
import OrderSuccess from "./components/cart/OrderSuccess";

// order import
import ListOrders from "./components/order/ListOrders";
import OrderDetails from "./components/order/OrderDetails";

// auth or user import
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
import UpdateProfile from "./components/user/UpdateProfile";
import UpdatePassword from "./components/user/UpdatePassword";
import ForgotPassword from "./components/user/ForgotPassword";
import NewPassword from "./components/user/NewPassword";

// admin imports
import Dashboard from "./components/admin/Dashboard";
import ProductsList from "./components/admin/ProductsList";
import NewProduct from "./components/admin/NewProduct";
import UpdateProduct from "./components/admin/UpdateProduct";
import OrdersList from "./components/admin/OrdersList";
import ProcessOrder from "./components/admin/ProcessOrder";
import UsersList from "./components/admin/UsersList";
import UpdateUser from "./components/admin/UpdateUser";
import ProductReviews from "./components/admin/ProductReviews";

import ProtectedRoute from "./components/route/ProtectedRoute";

import { loadUser } from "./actions/userActions";
import store from "./store";
import { useEffect, useState } from "react";
import axios from "axios";

// payment
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SideMenu from "./components/SideMenu";
import CategoryResult from "./components/CategoryResult";
//mobile menu
import MobileMenu from "./components/layout/MobileMenu";

function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");
  // const [inactive, setInactive] = useState(false);

  useEffect(() => {
    store.dispatch(loadUser());

    async function getStripeApiKey() {
      const { data } = await axios.get("/api/v1/stripeapi");

      setStripeApiKey(data.stripeApiKey);
    }

    getStripeApiKey();
  }, []);

  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

  return (
    <Router>
      <div className="App">
        <Header />
        <MobileMenu />
        <div className="home_menu">
           <div className="container_side_menu " style={{display: "none"}}>
            {!loading && (!isAuthenticated || user.roles !== "admin") && (
              <SideMenu />
            )}
          </div> 

          <div className={`container-main-menu container-fluid`}>
            <div className="container container-fluid">
              <Route path="/" component={Home} exact />
              <Route
                path="/search/result/category"
                component={CategoryResult}
                exact
              />
              <Route path="/search/:keyword" component={Home} />
              <Route path="/product/:id" component={ProductDetails} exact />

              <Route path="/cart" component={Cart} exact />
              <ProtectedRoute path="/shipping" component={Shipping} exact />
              <ProtectedRoute path="/confirm" component={ConfirmOrder} exact />
              <ProtectedRoute path="/success" component={OrderSuccess} exact />
              {stripeApiKey && (
                <Elements stripe={loadStripe(stripeApiKey)}>
                  <ProtectedRoute path="/payment" component={Payment} />
                </Elements>
              )}

              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/password/forgot" component={ForgotPassword} exact />
              <Route
                path="/password/reset/:token"
                component={NewPassword}
                exact
              />
              <ProtectedRoute path="/me" component={Profile} exact />
              <ProtectedRoute
                path="/me/update"
                component={UpdateProfile}
                exact
              />
              <ProtectedRoute
                path="/password/update"
                component={UpdatePassword}
                exact
              />

              <ProtectedRoute path="/orders/me" component={ListOrders} exact />
              <ProtectedRoute
                path="/order/:id"
                component={OrderDetails}
                exact
              />
            </div>
          </div>
        </div>

        <ProtectedRoute
          path="/dashboard"
          isAdmin={true}
          component={Dashboard}
          exact
        />
        <ProtectedRoute
          path="/admin/products"
          isAdmin={true}
          component={ProductsList}
          exact
        />
        <ProtectedRoute
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
          exact
        />
        <ProtectedRoute
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
          exact
        />
        <ProtectedRoute
          path="/admin/orders"
          isAdmin={true}
          component={OrdersList}
          exact
        />
        <ProtectedRoute
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
          exact
        />
        <ProtectedRoute
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
          exact
        />
        <ProtectedRoute
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
          exact
        />
        <ProtectedRoute
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
          exact
        />

        {!loading && (!isAuthenticated || user.roles !== "admin") && <Footer />}
      </div>
    </Router>
  );
}

export default App;
