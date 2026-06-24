import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const SearchResults = ({ searchBooks }) => {
	const [search, setSearch] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
   
    // Handle form submission here
    searchBooks(search);
  }; 
return (
<form className="mx-4" onSubmit={handleSubmit}>
     <InputGroup  >
        <Form.Control 
          placeholder="Discover your next read "
          aria-label="Search book"
          aria-describedby="basic-addon2"
          type="text"
      
      	onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outline-secondary" id="button-addon2" type="submit">
          Search
        </Button>
      </InputGroup>
</form>
  );
};
export default SearchResults;