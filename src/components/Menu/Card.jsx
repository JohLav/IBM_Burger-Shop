import { motion } from "framer-motion";
import Modal from "./Modal.jsx";

export default function Card({ item }) {
  const { ref, title, price, img } = item;
  return (
    <div className="col">
      <motion.div
        className="card h-100 shadow"
        initial={{ x: "-100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <img className="card-img-top" src={`/images/${img}.png`} alt="burger" />
        {/*<div className="banner"></div>*/}
        <div className="card-body d-flex flex-column align-items-center justify-content-end">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{price}€</p>
        </div>
        <div className="card-footer d-flex justify-content-center">
          <motion.button
            className="btn"
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            data-bs-toggle="modal"
            data-bs-target={`#${ref}`}
          >
            Ajouter
          </motion.button>
        </div>
      </motion.div>
      <Modal key={ref} item={item} />
    </div>
  );
}
