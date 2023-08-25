import { motion } from "framer-motion";
import Founder from "../../components/Founder/Founder.jsx";
import Menu from "../Menu/Menu.jsx";
import "./Home.scss";

export default function Home() {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <section className="home">
        <div className="cover">
          <motion.h1 {...options}>Burger Shop</motion.h1>
          <motion.p {...options} transition={{ delay: 0.2 }}>
            De savoureux burger.
          </motion.p>
        </div>
        <motion.a
          className="menuBtn"
          href="#menu"
          initial={{ y: "-100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Consulter le Menu
        </motion.a>
        <Menu />
        <Founder />
      </section>
    </>
  );
}
