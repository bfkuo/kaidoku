import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../slices/userSlice';

function bodyToFormEncoded(o) {
    if (o == null) return {};
    let formBody = [];

    Object.keys(o).forEach((key) => {
        console.log(`key ${key} ok ${o[key]}`)
        formBody.push(encodeURIComponent(key) + "=" + encodeURIComponent(o[key]));
    });

    formBody = formBody.join("&");
    return formBody;
}

async function doLogin(user,pass) {
    //TODO: change this
    let loginInfo = {
        email:user,
        password:pass
    };

    try {
        let possibleUser = await fetch('http://127.0.0.1:5000/login', {
            method:"POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body:bodyToFormEncoded(loginInfo)
        });
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