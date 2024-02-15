import React from 'react';
import {useSelector} from "react-redux";
import {useActions} from "../../hooks/useActions.js";


const User = () => {
    const {isLoading, error, user} = useSelector(state => state.user)
    const {getUserById} = useActions(1)
    return (
        <div>
            <button onClick={getUserById}>Get User</button>
            {isLoading ? <div>Loading...</div> : error ? <div>Error...</div> : user?.name ? <h1>User: {user.name}</h1> :
                <h1>User not found</h1>}
        </div>
    );
};

export default User;