import { motion } from "framer-motion";
import me from "../../../public/assets/skj.jpg";
import "./Founder.scss";

export default function Founder() {
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
      <section className="founder">
        <motion.div {...options}>
          <img src={me} alt="The founder" height={200} width={200} />
          <h3>Nelson</h3>
          <p>Hey everyone, I am Nelson, Burger Shop's Founder.</p>
        </motion.div>
      </section>
    </>
  );
}
