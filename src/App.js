import './App.css';
import NavbarTop from'./components/Navbar';
import Presentation from'./components/Presentation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container} from 'reactstrap';

function App() {
  return (
    <div>
      <NavbarTop/>
      <Container>
        <Row>
          <Presentation/>
        </Row>
      </Container>
    </div>
  );
}

export default App;
