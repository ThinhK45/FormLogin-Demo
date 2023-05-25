import axios from 'axios'; const setAuthHeader = (token) => { if(token){
axios.defaults.headers = { 'x-access-token': token, } } }
