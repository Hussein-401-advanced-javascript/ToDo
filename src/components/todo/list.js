import React from 'react';
import { ListGroup, Button, Card } from 'react-bootstrap';
import './todo.scss';
function TodoList(props, handledelete) {
  return (
    <ListGroup className="lists">
      {props.list.map(item => (
        <ListGroup.Item variant={item.complete ? "danger" : "success"}
          className={`complete-${item.complete.toString()}`}
          key={item._id}
        >
          <Card className="todoList" onClick={() => props.handleComplete(item._id)}>
            {item.complete} {item.assignee}
            <Button style={{
              width: '3em',
              position: 'relative',
              left: '29em',
              bottom: '1.3em'
            }} variant="danger" className='delete' onClick={() => props.handledelete(item._id)}>X</Button>

            {item.text}
            {item.difficulty}
          </Card>

        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
export default TodoList;