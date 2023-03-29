import React from 'react';
import '../App.css';

const Form = () => (
  <div className="formSections">
    <h2 className="add-new">ADD NEW BOOK</h2>
    <div className="FormContainer">
      <form>
        <input placeholder="Book title" type="text" />
        <select name="author" id="author">
          <option value="category">Category</option>
          <option value="0">option1</option>
          <option value="1">option2</option>
          <option value="2">Option3</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  </div>
);
export default Form;
