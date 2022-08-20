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

/* local service */
export const getGymList = () => axios.get('http://localhost:8090/gym');
export const getProgramList = (gymId) => axios.get('http://localhost:8090/program/gym/'+gymId)
export const getGymListByName = (gymName) => axios.get('http://localhost:8090/gym/gym-name/'+gymName)

/* using Gateway-service */
// export const getGymList = () => axios.get('http://localhost:8801/gym');
// export const getProgramList = (gymId) => axios.get('http://localhost:8801/program/gym/'+gymId)
// export const getGymListByName = (gymName) => axios.get('http://localhost:8801/gym/gym-name/'+gymName)
