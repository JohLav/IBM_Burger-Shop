import { Link } from "react-router-dom";
import CartItem from "./CartItem.jsx";
import burger1 from "../../../public/assets/burger1.png";
import burger2 from "../../../public/assets/burger2.png";
import burger3 from "../../../public/assets/burger3.png";
import "../../styles/cart.scss";

export default function Cart() {
  function decrement(item) {}
  function increment(item) {}
  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={0}
          decrement={() => decrement(1)}
          increment={() => increment(1)}
        />
        <CartItem
          title={"Burger Vegan"}
          img={burger2}
          value={0}
          decrement={() => decrement(2)}
          increment={() => increment(2)}
        />
        <CartItem
          title={"Burger Frites"}
          img={burger3}
          value={0}
          decrement={() => decrement(3)}
          increment={() => increment(3)}
        />
        <article>
          <div>
            <h4>Sous-total</h4>
            <p>{20}€</p>
          </div>
          <div>
            <h4>TVA</h4>
            <p>{20 * 0.2}€</p>
          </div>
          <div>
            <h4>Frais de livraison</h4>
            <p>{5}€</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>{20 * 1.2}€</p>
          </div>
          <Link to="/shipping">Commander</Link>
        </article>
      </main>
    </section>
  );
}
