import { IoFastFoodOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { useSelector } from "react-redux";
// import { productSlice } from "../../features/productSlice.js";
// import { cartSlice } from "../../features/cartSlice.js";

export default function Navbar() {
  const burgers = useSelector((state) => state.burgerReducer.burgers);
  const cartCount = burgers.length;

  return (
    <nav className="sticky-top">
      <motion.div
        className="container-fluid"
        initial={{ x: "-100%" }}
        whileInView={{ x: 0 }}
      >
        <Link to="/">
          <IoFastFoodOutline />
        </Link>
      </motion.div>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">À propos</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/account">
          <MdAccountCircle />
        </Link>
        <Link to="/cart">
          <FaCartShopping />
          <span className="badge badge-pill badge-success">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}
