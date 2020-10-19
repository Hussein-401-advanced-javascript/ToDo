// import React, { useState, useEffect } from 'react';
import React from 'react';
import useForm  from '../hoocks/form-hoocks.js'

function TodoForm(props) {

  // const [item, setItem] = useState({});
  const [item, handleSubmit, handleInputChange] = useForm(formHandler)

  // constructor(props) {
  //   super(props);
  //   this.state = { TodoForm: {} };

  // const handleInputChange = e => {
  //   setItem({ ...item, [e.target.name]: e.target.value });
  // };

  function formHandler(item){
    // e.preventDefault();
    // e.target.reset();
    // console.log('in line21', item);
    props.handleSubmit(item);
    // console.log('in line23');
    // const item = {};
  //  setItem(form);
  };

  // render() {
  return (
    <>
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>To Do Item</span>
          <input
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Difficulty Rating</span>
          <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </label>
        <label>
          <span>Assigned To</span>
          <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </label>
        <button>Add Item</button>
      </form>
    </>
  );
  // }
}

export default TodoForm;