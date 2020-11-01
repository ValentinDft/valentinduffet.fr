import './App.css';
import NavbarTop from'./components/Navbar';
import Presentation from'./components/Presentation';
import Education from'./components/Education';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Container} from 'reactstrap';

function App() {
  return (
    <div>
      <NavbarTop/>

      <Presentation/>
        
       
      
    </div>
  );
}

export default App;
