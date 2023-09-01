import { State, Country } from "country-state-city";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import "./Shipping.scss";

export default function Shipping() {
  return (
    <section id="shipping">
      <main>
        <h1>Détails de livraison</h1>
        <form>
          <div>
            <label>Numéro de téléphone</label>
            <input type="number" placeholder="0123456789" />
          </div>
          <div>
            <label>Adresse</label>
            <input type="text" placeholder="Adresse" />
          </div>
          <div>
            <label>Code postal</label>
            <input type="number" placeholder="Code postal" />
          </div>
          <div>
            <label>Ville</label>
            <input type="text" placeholder="Ville" />
          </div>
          <div>
            <label>Pays</label>
            <select>
              <option value="">Pays</option>
              {Country &&
                Country.getAllCountries().map((i) => (
                  <option value="{i.isoCode}" key="{i.isoCode}">
                    {i.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            <label>État/Région</label>
            <select>
              <option value="">État/Région</option>
              {State &&
                State.getStatesOfCountry("FR").map((i) => (
                  <option value="{i.isoCode}" key="{i.isoCode}">
                    {i.name}
                  </option>
                ))}
            </select>
          </div>

          <Popup
            trigger={
              <Link className="link" to="/">
                Confirmer
              </Link>
            }
          >
            <div
              style={{
                color: "red",
                transform: "translate(0%,-500%)",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              Votre commande est en cours de traitement !{" "}
            </div>
          </Popup>
        </form>
      </main>
    </section>
  );
}
