import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Account/Login/Login.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import MyOrders from "./components/myOrders/MyOrders.jsx";
import OrderDetails from "./components/myOrders/OrderDetails.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Shipping from "./pages/Shipping/Shipping.jsx";
import "./styles/app.scss";

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
