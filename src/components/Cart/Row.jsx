import { useDispatch } from "react-redux";
import { deleteBurger } from "../../features/burgerSlice.js";
import { useState } from "react";

export default function Row({ item }) {
  const dispatch = useDispatch();
  const { ref, title, price, qty, img, id } = item;
  const [quantity, setQuantity] = useState(qty);
  return (
    <tr>
      <td>
        <img width="70" height="70" src={`/images/${img}.png`} alt={title} />
      </td>
      <td>{ref}</td>
      <td>{price}€</td>
      <td>
        <div className="btn-group" role="group" aria-label="btn-group">
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>
          <span className="btn btn-light">{quantity}</span>
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity + 1);
              }
            }}
          >
            +
          </button>
        </div>
      </td>
      <td>{price * quantity}€</td>
      <td>
        <button
          className="btn btn-danger remove"
          type="button"
          onClick={() => {
            dispatch(deleteBurger({ id }));
          }}
        >
          X
        </button>
      </td>
    </tr>
  );
}
