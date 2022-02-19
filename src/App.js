import { Switch, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navigation from "./components/Navigation";
import CalendarByStreet from "./components/CalendarByStreet";
import SingleGarbage from "./components/SingleGarbage";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import SelectStreet from "./components/SelectStreet";

const App = () => {
  return (
    <BrowserRouter>
    <main>
      <Navigation />
      <Container>
       <Row>
       </Row>
     
        <Row className="mt-5 justify-content-center">
          <Switch>
            <Route exact path="/" component={SelectStreet} />
            <Route exact path="/street/:id" component={CalendarByStreet} />
            <Route exact path="/garbage/:id" component={SingleGarbage} />
          </Switch>
        </Row>
      </Container>
    </main> 
    </BrowserRouter>
  );
};

export default App;