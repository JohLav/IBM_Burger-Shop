import MenuCard from "../../components/Menu/MenuCard.jsx";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import "./Menu.scss";

export default function Menu() {
  function addToCartHandler(itemNum) {}
  return (
    <section id="menu">
      <h1>Menu</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={2}
          title="Cheese Burger"
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={5}
          title="Burger Vegan"
          handler={addToCartHandler}
          delay={0.5}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={9}
          title="Burger Frites"
          handler={addToCartHandler}
          delay={0.8}
        />
      </div>
    </section>
  );
}
