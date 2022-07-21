import axios from 'axios';
import queryString from 'query-string';

const request = () => {
    var token = '';
    if(sessionStorage.getItem("accessToken")) {
        token = sessionStorage.getItem("accessToken");
    }
    const headers = {
        headers: {
            //'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
        }
    };

    return headers;
};

export const getGymList = () => axios.get('http://localhost:8090/api/gyms');