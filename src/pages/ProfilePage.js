import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onLogin } from '../redux/actions/loginAction';
import Profile from '../Components/Profile';


const ProfilePage = () => {

    let id = useSelector(state => state.id);
    let dispatch = useDispatch();
    let [ready,setReady] = useState(false);

    useEffect(() => {
        fetch(`https://dummyjson.com/users/${id}`,{
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(json => {
            //console.log(json)
            dispatch(onLogin(json))
            setReady(true);
        })
        .catch(error => console.log(error))
    }, [])

    return (
        <div className='profile-page'>
            <h1>Profile Page</h1>
            <Profile ready={ready}/>
        </div>
    )
}

export default ProfilePage;