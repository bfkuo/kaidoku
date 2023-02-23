import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../slices/userSlice';
import { REQUEST_BODY_TYPES, REQUEST_TYPES } from '../utils/constants';
import { apiRequest } from '../utils/req';

async function doLogin(user,pass) {
    //TODO: change this
    let loginInfo = {
        email:user,
        password:pass
    };

    try {
        let possibleUser = await apiRequest(REQUEST_TYPES.POST, loginInfo, REQUEST_BODY_TYPES.URLENCODED);
        return possibleUser;
    } catch (err) {
        console.error(err);
        return null;
    }

}

function Account(props) {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    console.log(`user is ${JSON.stringify(user)}`)
    return (
        <div className="container-fluid">
            <div className="row align-items-start">
                <h1>Account route {user.email !== '' ? `(${user.email})` : null} </h1>
                <button onClick={() => {
                    doLogin('destroyer7712@gmail.com','test').then(response => response.json()).then(user => {
                        if(user) {
                            dispatch(login(user));
                        }
                    })
                }}>Auto Login</button>
            </div>
        </div>
    );
}

export default Account;