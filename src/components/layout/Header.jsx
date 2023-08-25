import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
// import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import DropdownMenu from "./DropdownMenu.jsx";
import "../../styles/header.scss";

export default function Header({ isAuthenticated = false }) {
  return (
    <nav>
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
        </Link>
        <DropdownMenu />
      </div>
    </nav>
  );
}
