// import { Link, Outlet } from "react-router-dom";
import Login from "../../components/Login/Login.jsx";
import Register from "../../components/Register/Register.jsx";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
} from "mdb-react-ui-kit";
import { useState } from "react";

export default function Account() {
  const [justifyActive, setJustifyActive] = useState("tab1");

  function handleJustifyClick(value) {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  }
  return (
    <>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50 bg-white">
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
          <Login />
          <Register />
        </MDBTabsContent>
      </MDBContainer>
    </>
  );
}
