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

export const getTrainingList = () => axios.get('http://localhost:8090/api/trainings');
export const getTrainingContentList = ({trainingId}) => axios.get(`http://localhost:8090/api/training-contents/?${queryString.stringify({trainingId})}`);
