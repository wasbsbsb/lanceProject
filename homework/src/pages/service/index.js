import map from './map.js'
import axios from 'axios'

// domain 
const instance = axios.create({
    baseURL: 'http://localhost/',
    timeout: 1000,
});

// set token
instance.defaults.headers.common['Authorization'] = 'sssssssssssssssfwfwfwgwgwgwgwgwgwgw';

// instance.get('/user?ID=12345')
//     .then(function (response) {
//         // handle success
//         console.log(response);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log(error);
//     })


// const RequestDb = () => {
//     map[messageBoardSubmit]
// }









// http://localhost/haha

// const domain = 'http://localhost/';





export default {
    map,
    instance
}
