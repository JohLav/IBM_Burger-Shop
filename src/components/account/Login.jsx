import {
  MDBBtn,
  MDBCheckbox,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { useState } from "react";
import "../../styles/login.scss";

export default function Login() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  function handleJustifyClick(value) {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  }

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs
        pills
        justify
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Connexion
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Inscription
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
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

        <MDBTabsPane show={justifyActive === "tabs2"}>
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
          <div className="d-flex justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="J'ai lu et accepte les conditions d'utilisation."
            />
          </div>

          <MDBBtn className="mb-4 w-100">Inscription</MDBBtn>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
  );
}
