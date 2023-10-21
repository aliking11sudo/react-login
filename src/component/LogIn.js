import NavBar from "./NavBar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Card from "./Card";
const LogIn = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="container-fluid">
      <div className="row justify-content-center vh-100 align-items-center">
        <div className="col-12 col-lg-4">
          <Card />
        </div>
      </div>
    </div>
    </div>
  
  );
};
export default LogIn;
