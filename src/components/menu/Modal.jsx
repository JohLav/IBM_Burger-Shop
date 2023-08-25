import { useState } from "react";
// import { useDispatch } from "react-redux";

export default function Modal() {
  const [qty, setQty] = useState(1);
  // const dispatch = useDispatch();

  // function add(item, quantity) {
  //   dispatch(addToCart(item, quantity));
  // }
  return (
    <div
      className="modal fade"
      // id={item.ref}
      data-bs-backdrop="static"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              {/*{item.name}*/}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-sm-4">
                {/*<img*/}
                {/*  width="170"*/}
                {/*  height="170"*/}
                {/*  src={*/}
                {/*    process.env.PUBLIC_URL +*/}
                {/*    `/assets/${item.category}/${item.image}`*/}
                {/*  }*/}
                {/*  alt="Citron"*/}
                {/*/>*/}
              </div>

              <div className="col-sm">
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore
                </p>
                <h3 className="price">{/*{item.price}€ / {item.unit}*/}</h3>
                <br />
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

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
              // onClick={() => add(item, qty)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
