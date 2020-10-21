import React, { useContext } from 'react';
import { ListGroup, Button, Card, Dropdown, Row, Col } from 'react-bootstrap';

import { SiteContext } from "../context/context.js";
import './todo.scss';

function TodoList(props) {
  const settingContext = useContext(SiteContext);
  console.log(settingContext, "<<<>>>>><><><><><");
  return (
    <>
      {/* <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
       </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">2</Dropdown.Item>
          <Dropdown.Item href="#/action-2">4</Dropdown.Item>
          <Dropdown.Item href="#/action-3">8</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}

      <Button style={{
        width: '6em',
        position: 'relative',
        left: '29em',
        bottom: '3.3em'
      }} variant="danger" className='delete'>remove completed</Button>


      {/* <Card className="lists"> */}
      {props.list.map(item => (



        <Card className="todoList" style={{
          width: '33em',
          marginBottom: '1.3em'
        }}>
          <Button className='itemComplete' variant={item.complete ? "danger" : "success"}
            className={`complete-${item.complete.toString()}`}
            key={item._id} onClick={() => props.handleComplete(item._id)}
            style={{
              width: '7em',
              margin: '0.7em'
            }}
          >
            task stauts {item.complete}
          </Button>
          <Card>

            <p>assignee to: {item.assignee}</p>
            <Button style={{
              width: '3em',
              position: 'relative',
              left: '29em',
              bottom: '5.6em'
            }} variant="danger" className='delete' onClick={() => props.handledelete(item._id)}>X</Button>
            <p>task is: {item.text}</p>
          </Card>
          <Row className="text-end">
            <Col style={{
              width: '3em',
              position: 'relative',
              left: '27em',
              color: '#072c9b',
            }}> Difficulty : {item.difficulty}</Col>
          </Row>
        </Card>

        // </Card>
      ))}

      {/* </Card> */}


    </>
  );
}
export default TodoList;