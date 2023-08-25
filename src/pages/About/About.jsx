import { RiFindReplaceLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import me from "../../../public/assets/skj.jpg";
import "./About.scss";

export default function About() {
  return (
    <section className="about">
      <main>
        <h1>À propos</h1>
        <article>
          <h4>Burger Shop</h4>
          <p>
            Notre enseigne vous propose de très savoureux burgers pour une
            dégustation inoubliable.
          </p>
          <Link to="/menu">
            <RiFindReplaceLine />
          </Link>
          <p>Menu</p>
        </article>
        <div>
          <h2>Fondateur</h2>
          <article>
            <div>
              <img src={me} alt="Fondateur" />
              <h3>Nelson</h3>
            </div>
            <p>Je m'appelle Nelson, j'ai fondé Burger Shop.</p>
          </article>
        </div>
      </main>
    </section>
  );
}
