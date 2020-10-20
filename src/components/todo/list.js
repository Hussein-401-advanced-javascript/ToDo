import React from 'react';
import { ListGroup, Button, Card, Dropdown, Row, Col } from 'react-bootstrap';
import './todo.scss';
function TodoList(props) {
  return (
    <>
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
       </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">2</Dropdown.Item>
          <Dropdown.Item href="#/action-2">4</Dropdown.Item>
          <Dropdown.Item href="#/action-3">8</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button style={{
                width: '6em',
                position: 'relative',
                left: '29em',
                bottom: '3.3em'
              }} variant="danger" className='delete'>remove completed</Button>


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
              <Row className="text-end">
            <Col style={{
                width: '3em',
                position: 'relative',
                left: '27em',
                color: '#072c9b',
            }}> Difficulty : {item.difficulty}</Col>
            </Row>
            </Card>

          </ListGroup.Item>
        ))}
     
      </ListGroup>


    </>
  );
}
export default TodoList;