import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchResults = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hi!");
    // Handle form submission here
  }; 
return (
<form class="mx-4" onSubmit={handleSubmit}>
     <InputGroup  >
        <Form.Control 
          placeholder="Type to search..."
          aria-label="Search book"
          aria-describedby="basic-addon2"
      
        />
        <Button variant="outline-secondary" id="button-addon2" type="submit">
          Search
        </Button>
      </InputGroup>
</form>
  );
};
export default SearchResults;