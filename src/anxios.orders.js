import axios from 'axios';

const instance = axios.create({
    baseURL:"https://buildburger-ea9b1.firebaseio.com/",

});

export default instance;