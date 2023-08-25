import { motion } from "framer-motion";
import Popup from "reactjs-popup";

export default function MenuCard({
  itemNum,
  burgerSrc,
  price,
  title,
  handler,
  delay,
}) {
  return (
    <motion.div
      className="menuCard"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay,
      }}
    >
      <div></div>
      <main>
        <img src={burgerSrc} alt={itemNum} />
        <h4>{price}€</h4>
        <p>{title}</p>
        <Popup
          trigger={<button onClick={() => handler(itemNum)}>Commander</button>}
        >
          <div
            style={{
              color: "red",
              transform: "translate(0,-500%",
              backgroundColor: "FFF",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            }}
          >
            Ajouter au panier
          </div>
        </Popup>
        {/*    Modal */}
      </main>
    </motion.div>
  );
}
