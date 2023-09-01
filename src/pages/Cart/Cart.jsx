import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Table from "../../components/Cart/Table.jsx";
import "./Cart.scss";

export default function Cart() {
  const burgers = useSelector((state) => state.burgerReducer.burgers);
  const [subTotal, setSubTotal] = useState(0.0);
  const [total, setTotal] = useState(0.0);
  const shipping = 10.0;

  useEffect(() => {
    let totals = burgers?.map((item) => {
      return item?.qty * item?.price;
    });
    setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0));
    setTotal(subTotal + shipping);
  }, [burgers, subTotal, total]);

  return (
    <section id="cart" className="container">
      <div className="row">
        <div className="col col-sm cart">
          <Table />
        </div>

        <ul className="list-group">
          <li className="list-group-item">Récapitulatif</li>

          <li className="list-group-item">
            <ul className="list-group d-flex">
              <li className="text-left">
                <strong>Sous-total</strong>
              </li>
              <li className="text-right">{subTotal.toFixed(2)}€</li>
            </ul>
            <ul className="list-group d-flex">
              <li className="text-left">
                <strong>Livraison</strong>
              </li>
              <li className="text-right">{shipping.toFixed(2)}€</li>
            </ul>
          </li>
          <li className="list-group-item">
            <ul className="list-group d-flex">
              <li className="text-left">
                <strong>Total</strong>
              </li>
              <li className="text-right">
                {subTotal === 0.0 ? "0.00" : total.toFixed(2)}€
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <Link className="link" to="/checkout">
        Commander
      </Link>
    </section>
  );
}
