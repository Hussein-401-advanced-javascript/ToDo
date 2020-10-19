
import { useState } from 'react';

const useForm = (cb)=>{
    const [item, setItem] = useState({});
    const handleSubmit = (e) =>{
        if (e) e.preventDefault() ;
        cb(item);
    };
    const handleInputChange = e => {
        setItem({ ...item, [e.target.name]: e.target.value });
      };
      return [item, handleSubmit, handleInputChange]
    
} 
export default useForm;
