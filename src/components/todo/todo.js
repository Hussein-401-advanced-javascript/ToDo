import React, { useState, useEffect } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import { Navbar } from 'react-bootstrap';
import useAjax from '../hoocks/useAjax.js'

import './todo.scss';

function ToDo(props) {

  const [list, setList] = useState([]);
  // const [ _addItem , _toggleComplete , _getTodoItems , deleteItem] = useAjax()
  const [  deleteItem] = useAjax()

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     list: [],
  //   };
  // }


  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    setList([...list, item]);
  };


  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let list1 = list.map(listItem => listItem._id === item._id ? item : listItem);
      setList(list1);
    }

  };

  useEffect(() => {

    let list = [
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A' },
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A' },
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B' },
      { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C' },
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B' },
    ];
    setList(list);
  }, []);



  // render() {
  // console.log('in line 53',list);
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <header>
          <h2>
            There are {list.filter(item => !item.complete).length} Items To Complete
          </h2>
        </header>
      </Navbar>
      <section className="todo">

        <div>
          <TodoForm handleSubmit={addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
            handleDelete={deleteItem}

          />
        </div>
      </section>
    </>
  );
  // }
}

export default ToDo;