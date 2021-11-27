import "./App.css";
import {
  Button,
  Form,
  Col,
  Row,
  Container,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Container style={{ backgroundColor: "green" }}>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Recipient's username"
          ></input>
          <div class="input-group-append">
            <button class="btn btn-secondary" type="button">
              Button
            </button>
          </div>
        </div>
        <Row>
          <Col sm="8" className="my-5" style={{ backgroundColor: "green" }}>
            <Form className="d-flex">
              <InputGroup>
                <InputGroup.Text style={{ backgroundColor: "white" }}>
                  <FaSearch />
                </InputGroup.Text>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="Search..."
                />
                <div className="input-group-prepend">
                  <Button type="submit" variant="dark">
                    Search
                  </Button>
                </div>
              </InputGroup>
            </Form>
          </Col>
          <Col sm="4" style={{ display: "flex", justifyContent: "right" }}>
            2 of 2
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
