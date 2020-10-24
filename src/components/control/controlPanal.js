import { Form, Button, Card, Dropdown } from 'react-bootstrap';
import React, { useContext } from 'react';
import { SiteContext } from '../context/context';
const  CotrolePanel = (props) => {
    const siteContext = useContext(SiteContext);
    const  toggleComplete = (e) => {
        // console.log(e.target.textContent);
        siteContext.setdisplayCompletedItems(!siteContext.displayCompletedItems);
        e.target.textContent = siteContext.displayCompletedItems?'Show completed items':'hide completed items'
    }
    const toggleScreenChangeValue= (e)=> {
        siteContext.setnumItemsPerScreen(e.target.value);
    }
    const  toggleSortChangeValue = (e) => {
        siteContext.setdefualtSortField(e.target.value);
    }
    return (
        <Card style={{ padding: '10px',display: 'flex' ,flexDirection:'row'}}>
            <Button onClick={toggleComplete} variant="primary">Show completed items</Button>
                <select onChange={toggleScreenChangeValue} className="dropdownmenu" id="dropdownmenu" name="dropdownmenu">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>                    
                </select>
                <select onChange={toggleSortChangeValue} className="dropdownmenu" id="dropdownmenu" name="dropdownmenu">
                    <option value="name">name</option>
                    <option value="assignee">assignee</option>
                    <option value="deficulty">deficulty</option>                    
                </select>
           
        </Card>
    )
}
export default CotrolePanel;