import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import "../../styles/footer.scss";

export default function Footer() {
  return (
    <footer>
      <div>
        <h2>Burger Shop</h2>
        <p>
          Nous innovons constamment pour vous offrir le meilleur goût possible.
        </p>
        <br />
        <p>© BurgerShop, a Good Taste affiliate. Tous droits réservés</p>
      </div>
      <aside>
        <h4>Rejoignez-nous sur les réseaux :</h4>
        <a href="https://facebook.com/xyz">
          <AiFillFacebook />
        </a>
        <a href="https://youtube.com/xyz">
          <AiFillYoutube />
        </a>
        <a href="https://instagram.com/xyz">
          <AiFillInstagram />
        </a>
      </aside>
    </footer>
  );
}
