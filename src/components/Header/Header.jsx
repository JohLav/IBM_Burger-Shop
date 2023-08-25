import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { motion } from "framer-motion";
// import DropdownMenu from "../DropdownMenu/DropdownMenu.jsx";
import "./Header.scss";
import { useSelector } from "react-redux";

export default function Header({ isAuthenticated = false }) {
  const burgers = useSelector((state) => state.burgerSlice.burgers);
  const cartCount = burgers.length;

  return (
    <header>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <IoFastFoodOutline />
      </motion.div>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">À propos</Link>
        <Link to="/cart">
          <FiShoppingCart />
          <span className="badge badge-pill badge-success">{cartCount}</span>
        </Link>
        {/*<DropdownMenu />*/}
      </div>
    </header>
  );
}
