import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Account from "./pages/Account/Account.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import MyOrders from "./components/myOrders/MyOrders.jsx";
import OrderDetails from "./components/myOrders/OrderDetails.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Register from "./components/Register/Register.jsx";
import Shipping from "./pages/Shipping/Shipping.jsx";
import "./styles/app.scss";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/account" element={<Account />}>
          <Route path="/account/login" element={<Login />} />
          <Route path="/account/register" element={<Register />} />
        </Route>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/order-details" element={<OrderDetails />} />
        {/*<Route path="*" element={<NoMatch />} />*/}
      </Routes>
      <Footer />
    </>
  );
}
