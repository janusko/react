import React from 'react';

const Data = ({personData}) => {
    return (
        <div>
            <h3>Your Form Data</h3>
            <p>First Name: {personData.firstName}</p>
            <p>Last Name: {personData.lastName}</p>
            <p>Email: {personData.email}</p>
            <p>Password: {personData.password}</p>
            <p>Confirm Password: {personData.confirmPassword}</p>
        </div>
    )
}

export default Data