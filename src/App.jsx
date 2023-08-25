import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About.jsx";
import Cart from "./components/cart/Cart.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import Home from "./components/home/Home.jsx";
import Login from "./components/account/Login.jsx";
import Menu from "./components/menu/Menu.jsx";
import MyOrders from "./components/myOrders/MyOrders.jsx";
import OrderDetails from "./components/myOrders/OrderDetails.jsx";
import Profile from "./components/profile/Profile.jsx";
import Shipping from "./components/cart/Shipping.jsx";
import "./styles/app.scss";
import "./styles/table.scss";

export default function App() {
  return (
    <>
      <Router>
        <Header isAuthenticated={true} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/order-details" element={<OrderDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
