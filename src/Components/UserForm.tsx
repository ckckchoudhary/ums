import React, { useState } from "react";
import { Button, FormControl, FormGroup, FormHelperText, Input, InputLabel } from "@mui/material";
import { User } from "../Models/User";
import "./../styles/userForm.css";

interface UserFormInterface {
    name?: string;
    age?: number;
    onSubmit(name: string, age: number): void;
}

export const UserForm: React.FC<UserFormInterface> = ({ name, age, onSubmit }) => {
    let enteredName = name || "";
    let enteredAge = age || 1;

    const handleSubmit = () => {
        onSubmit(enteredName, enteredAge);
    }

    return (
        <div className="user-form-wrapper">
            <h2>
                Please enter the User details
            </h2>
            <FormGroup >
                <FormControl>
                    <InputLabel htmlFor="name">Name</InputLabel>
                    <Input aria-describedby="name-helper-text" defaultValue={name} onChange={(e) => enteredName = e.target.value} />
                    <FormHelperText id="name-helper-text">Please enter your Name</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="age">Age</InputLabel>
                    <Input aria-describedby="age-helper-text" type="number" defaultValue={age} onChange={(e) => enteredAge = Number(e.target.value)} />
                    <FormHelperText id="age-helper-text">Please Enter age in years</FormHelperText>
                </FormControl>
                <div>
                    <Button color="primary" onClick={handleSubmit}>Submit</Button>
                </div>
            </FormGroup>
        </div>
    )
}