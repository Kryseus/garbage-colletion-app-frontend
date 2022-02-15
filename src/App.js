import { Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import SingleGarbage from "./components/SingleGarbage";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import GarbageCalendar from "./components/Calendar.js";

const App = () => {
  return (
    <BrowserRouter>
    <main>
      <Navigation />
      
     <Container>
       <Row>
        <GarbageCalendar />
       </Row>
     
        <Row className="mt-5 justify-content-center">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/garbage/:id" component={SingleGarbage} />
          </Switch>
        </Row>
      </Container>
    </main> 
    </BrowserRouter>
  );
};

export default App;