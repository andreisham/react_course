import { Button, TextField } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import './Form.styles.css';

export const Form = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(value)
        setValue('')
    }
    // автофокус на инпут через рефы
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return(
        <form onSubmit={handleSubmit}>
            <TextField value={value} onChange={handleChange} inputRef={inputRef}></TextField>
            <Button type="submit">Submit</Button>
        </form>
    )
}