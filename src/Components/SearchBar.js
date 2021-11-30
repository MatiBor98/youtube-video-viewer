import { Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { useState, useRef, useEffect } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

function SearchBar(props) {
  const searchInputRef = useRef();
  const [error, setError] = useState();

  const searchVideoHandler = (event) => {
    event.preventDefault();
    const enteredQuery = searchInputRef.current.value;
    if (enteredQuery.trim().length === 0) {
      setError("Please enter a valid search input(non-empty values)");
      return;
    }
    props.onSearchVideo(enteredQuery);
    setError(null);
    searchInputRef.current.value = "";
  };
  return (
    <Form className="d-flex" onSubmit={searchVideoHandler}>
      <InputGroup>
        <InputGroup.Text
          style={{
            backgroundColor: "rgb(59, 59, 59)",
            borderColor: "rgb(33, 37, 41)",
          }}
        >
          <FaSearch />
        </InputGroup.Text>
        <FormControl
          className={error ? "custom-form is-invalid" : "custom-form"}
          id="searchInput"
          placeholder="Search..."
          ref={searchInputRef}
        />
        <div className="input-group-prepend">
          <Button bsClass="App" type="submit" variant="dark">
            Search
          </Button>
        </div>
        <div class="invalid-feedback">{error}</div>
      </InputGroup>
    </Form>
  );
}

export default SearchBar;
