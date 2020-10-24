import React, {useState} from 'react';


export const SiteContext = React.createContext();

const SiteProvider = (props) => {
    const [displayCompletedItems, setdisplayCompletedItems] = useState(false);
    const [numItemsPerScreen, setnumItemsPerScreen] = useState(5);
    const [defualtSortField, setdefualtSortField] = useState('name');

    const state = {
        displayCompletedItems, 
        numItemsPerScreen, 
        defualtSortField,
        setdisplayCompletedItems,
        setnumItemsPerScreen,
        setdefualtSortField
    }

    return (
        <SiteContext.Provider value={state}>
            {props.children}
        </SiteContext.Provider>
    )
} 

export default SiteProvider;