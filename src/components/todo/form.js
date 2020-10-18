import React, { useState, useEffect } from 'react';


function TodoForm(props) {

  const [item, setItem] = useState({});

  // constructor(props) {
  //   super(props);
  //   this.state = { TodoForm: {} };

  const _handleInputChange = e => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    console.log('in line21', item);
    props.handleSubmit(item);
    console.log('in line23');
    // const item = {};
   setItem({});
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
            onChange={_handleInputChange}
          />
        </label>
        <label>
          <span>Difficulty Rating</span>
          <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={_handleInputChange} />
        </label>
        <label>
          <span>Assigned To</span>
          <input type="text" name="assignee" placeholder="Assigned To" onChange={_handleInputChange} />
        </label>
        <button>Add Item</button>
      </form>
    </>
  );
  // }
}

export default TodoForm;