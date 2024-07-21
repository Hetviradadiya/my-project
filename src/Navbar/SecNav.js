import Nav from "react-bootstrap/Nav";
import Home from "../HomePage/Home";
import { Link } from "react-router-dom";
// import App from './App';

function SecNav() {
  return (
    <Nav variant="tabs">
      <Nav.Item>
        <Link to="/bhagavad-gita">Bhagvad Gita API</Link>
      </Nav.Item>
      
      <Nav.Item>
        <Link to="/news">Inshorts News</Link>
      </Nav.Item>
      <Nav.Item></Nav.Item>
    </Nav>
  );
}

export default SecNav;
