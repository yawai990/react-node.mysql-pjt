import axios from 'axios';

const URL = 'http://localhost:5000/api'

export const login =accData=>axios.post(URL + '/login',accData);
export const signup =newData=>axios.post(URL + '/create-user',newData);