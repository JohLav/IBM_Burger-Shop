import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBurger } from "../../features/burgerSlice.js";

export default function Modal({ item }) {
  const dispatch = useDispatch();
  const { img, price, title, ref } = item;
  const [qty, setQty] = useState(1);
  return (
    <div
      className="modal fade"
      id={ref}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-sm-6">
                  <img height="170" src={`/images/${img}.png`} alt={title} />
                </div>

                <div className="col-sm-6">
                  <h3 className="lead">{title}</h3>
                  <p className="price">{price}€ / unité</p>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Button group"
                  >
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                    >
                      -
                    </button>
                    <span className="btn btn-light qty">{qty}</span>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setQty(qty + 1)}
                    >
                      +
                    </button>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fermer
            </button>
            <button
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
              onClick={() => {
                dispatch(addBurger({ ...item, qty }));
              }}
            >
              Ajouter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
