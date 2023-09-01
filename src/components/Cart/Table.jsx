import { useSelector } from "react-redux";
import Row from "./Row.jsx";

export default function Table() {
  const burgers = useSelector((state) => state.burgerReducer.burgers);
  return (
    <table className="table table-hover">
      <thead>
        <tr className="align-items-center">
          <th scope="col">Produit</th>
          <th scope="col">Référence</th>
          <th scope="col">Prix</th>
          <th scope="col">Quantité</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        {burgers.map((burger) => (
          <Row key={burger.id} item={burger} />
        ))}
      </tbody>
    </table>
  );
}
