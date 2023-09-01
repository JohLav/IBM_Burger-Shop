import { motion } from "framer-motion";
import burger2 from "../../assets/burger2.png";
import Popup from "reactjs-popup";
import "./Contact.scss";

export default function Contact() {
  return (
    <section className="contact">
      <motion.form
        initial={{
          x: "-100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="py-3">Nous contacter</h2>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Nom" />
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
        <div className="mb-3 form-floating">
          <textarea
            className="form-control"
            placeholder="Saisir votre message"
            // style="height: 150px"
          ></textarea>
        </div>
        <div className="mb-3">
          <Popup
            trigger={
              <button type="button" className="button form-control">
                Envoyer
              </button>
            }
          >
            <div
              style={{
                color: "red",
                transform: "translate(25%, -700%)",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)",
              }}
            >
              Merci de nous avois contactés ! Nous vous répondrons dans les plus
              brefs délais.
            </div>
          </Popup>
        </div>
      </motion.form>
      <motion.div
        className="formBorder"
        initial={{
          x: "100vw",
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{ delay: 0.2 }}
      >
        <motion.div
          initial={{
            x: "50%",
            y: "-100vh",
            opacity: 0,
          }}
          animate={{
            x: "50%",
            y: "-50%",
            opacity: 1,
          }}
          transition={{ delay: 1 }}
        >
          <img src={burger2} alt="Burger" />
        </motion.div>
      </motion.div>
    </section>
  );
}
