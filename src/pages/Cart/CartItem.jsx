import "./Cart.scss";

export default function CartItem({ value, title, img, decrement, increment }) {
  return (
    <div className="cartItem">
      <div>
        <h4>{title}</h4>
        <img src={img} alt="Item" />
      </div>
      <div>
        <button onClick={decrement}>-</button>
        <input type="number" readOnly value={value} />
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}