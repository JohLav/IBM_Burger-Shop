import {
  MDBBtn,
  MDBCheckbox,
  MDBIcon,
  MDBInput,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { useState } from "react";

export default function Login() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  return (
    <MDBTabsPane show={justifyActive === "tab1"}>
      <div className="text-center mb-3">
        <p>Connexion</p>
        <div
          className="d-flex justify-content-between mx-auto"
          style={{ width: "40%" }}
        >
          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#1266F1" }}
          >
            <MDBIcon fab icon="facebook-f" size="sm" />
          </MDBBtn>
          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#1266F1" }}
          >
            <MDBIcon fab icon="twitter" size="sm" />
          </MDBBtn>
          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#1266F1" }}
          >
            <MDBIcon fab icon="google" size="sm" />
          </MDBBtn>
          <MDBBtn
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#1266F1" }}
          >
            <MDBIcon fab icon="github" size="sm" />
          </MDBBtn>
        </div>
        <p className="text-center mt-3">ou</p>
      </div>

      <MDBInput wrapperClass="mb-4" label="Email" id="form1" type="email" />
      <MDBInput
        wrapperClass="mb-4"
        label="Mot de passe"
        id="form2"
        type="password"
      />
      <div className="d-flex justify-content-between mx-4 mb-4">
        <MDBCheckbox
          name="flexCheck"
          value=""
          id="flexCheckDefault"
          label="Se souvenir de moi"
        />
        <a href="!#">Mot de passe oublié ?</a>
      </div>

      <MDBBtn className="mb-4 w-100">Connexion</MDBBtn>
      <p className="text-center">
        Vous découvrez Burger Shop ? <a href="#!">Créer un compte</a>
      </p>
    </MDBTabsPane>
  );
}
