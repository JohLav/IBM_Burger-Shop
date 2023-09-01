import "./Menu.scss";
import Card from "../../components/Menu/Card.jsx";
import { burgers } from "./menu.content.js";

export default function Menu() {
  return (
    <section id="menu">
      <h1 className="pb-3 text-center">Menu</h1>
      <div className="d-flex justify-content-evenly">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {burgers.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
