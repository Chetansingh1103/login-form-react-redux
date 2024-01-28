import React from 'react';
import { useSelector } from 'react-redux';

const Profile = ({ready}) => {

    let user = useSelector(state => state)

    return (
        <div className='profile'>
            {
                user && ready &&
                <div>
                    <h3>id: {`${user.id}`}</h3>
                    <h3>firstName: {`${user.firstName}`}</h3>
                    <h3>lastName: {`${user.lastName}`}</h3>
                    <h3>email: {`${user.email}`}</h3>
                    <h3>phone: {`${user.phone}`}</h3>
                    <h3>address: {`${user.address.address} ${user.address.city} ${user.address.postalCode} ${user.address.state}`}</h3>
                    <h3>coordinates: {`${user.address.coordinates.lat} ${user.address.coordinates.lng}`}</h3>
                    <h3>age: {`${user.age}`}</h3>
                    <h3>birthDate: {`${user.birthDate}`}</h3>
                    <h3>gender: {`${user.gender}`}</h3>
                    <h3>bloodGroup: {`${user.bloodGroup}`}</h3>
                    <h3>company: {`${user.company.name}`}</h3>
                    <h3>company department: {`${user.company.department}`}</h3>
                    <h3>company address: {`${user.company.address.address} ${user.company.address.city} ${user.company.address.postalCode} ${user.company.address.state}`}</h3>
                    <h3>company coordinates: {`${user.company.address.coordinates.lat} ${user.company.address.coordinates.lng}`}</h3>
                    <h3>eyeColor: {`${user.eyeColor}`}</h3>
                    <h3>hair color: {`${user.hair.color}`} </h3>
                    <h3>username: {`${user.username}`}</h3>
                    <h3>password: {`${user.password}`}</h3>
                    <h3>weight: {`${user.weight} kg`}</h3>
                </div>
            }
        </div>
    )
}

export default Profile;