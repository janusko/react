import React, { useState } from 'react';
import Data from './Data'

const UserForm = (props) => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmpassword] = useState("");
    const [FirstnameError, setFirstnameError] = useState("");
    const [LastnameError, setLastnameError] = useState("");
    const [EmailError, setEmailError] = useState("");
    const [PasswordError, setPasswordError] = useState("");
    const [ConfirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstname(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstnameError("First name must be 2 characters minimum.");
        } else {
            setFirstnameError("");
        }
    }
    const handleLastName = (e) => {
        setLastname(e.target.value);
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setLastnameError("Last name must be 2 characters minimum.");
        } else {
            setLastnameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 5 && e.target.value.length > 0) {
            setEmailError("Email must be 5 characters minimum.");
        } else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8 && e.target.value.length > 0) {
            setPasswordError("Password must be 8 characters minimum.");
        } else {
            setPasswordError("");
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmpassword(e.target.value);
        if (e.target.value != password && e.target.value.length > 0) {
            setConfirmPasswordError("Password confirmation doesn't match.");
        } else {
            setConfirmPasswordError("");
        }
    }

    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={handleFirstName} />
                    {FirstnameError ? <p style={{ color: 'red' }}> {FirstnameError}</p> : ''}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={handleLastName} />
                    {LastnameError ? <p style={{ color: 'red' }}> {LastnameError}</p> : ''}
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={handleEmail} />
                    {EmailError ? <p style={{ color: 'red' }}> {EmailError}</p> : ''}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={handlePassword} />
                    {PasswordError ? <p style={{ color: 'red' }}> {PasswordError}</p> : ''}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={handleConfirmPassword} />
                    {ConfirmPasswordError ? <p style={{ color: 'red' }}> {ConfirmPasswordError}</p> : ''}
                </div>
                <input type="submit" value="Create User" />
            </form>
            {/* <div>
                < Data personData= {{firstName, lastName, email, password, confirmPassword}}/>
            </div> */}
        </>
    );
};

export default UserForm;