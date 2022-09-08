import React, { useReducer, useState }  from 'react'


const UserForm = (props) => {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
}

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }

    return (
        <div>
            {JSON.stringify(state)}
            <div>
                <label>
                    <span>First Name:</span>{' '}
                    <input name="firstName" value={state.firstName} onChange={handleChange} />
                    {state.firstName.error !== null && (
                        <p className="error">{state.firstName.error}</p>
                    )}
                </label>
            </div>
            <div>
                <label>
                    <span>Last Name:</span>{' '}
                    <input name="lastName" value={state.lastName} onChange={handleChange} />
                    {state.firstName.error !== null && (
                        <p className="error">{state.firstName.error}</p>
                    )}
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input name="email" value={state.email} onChange={handleChange} />
                    {state.firstName.error !== null && (
                        <p className="error">{state.firstName.error}</p>
                    )}
                </label>
            </div>
        </div>
    );
}