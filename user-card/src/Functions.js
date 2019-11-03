// import React from 'react';
import axios from 'axios';

export const GetMyUser = () => {
    axios
    .get('https://api.github.com/users/Developer3027')
    .then(res => setState({user: {}}) )
    .catch(err => {
        console.log('Axios, User', err);
    })
};

export const GetMyFollowers = () => {
    axios
        .get('https://api.github.com/users/mary-clayton/followers')
        .then(res => setState({myFollowers: []}) )
        .catch(err => {
            console.log('Axios, Followers:', err);
    })
}
