<<<<<<< HEAD
const axios = require("axios");
const port = process.env.PORT || '8080';


let appReq = axios.create({
  baseURL: 'https://my-store2022.herokuapp.com:' + port,
  withCredentials: false, // This is the default
  crossDomain: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

console.log('PORT:', 'https://timesheet-cloud.herokuapp.com:' + port); /* eslint-disable-line no-console */
=======
const axios = require("axios");
const port = process.env.PORT || '8080';


let appReq = axios.create({
  baseURL: 'https://my-store2022.herokuapp.com:' + port,
  withCredentials: false, // This is the default
  crossDomain: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

console.log('PORT:', 'https://timesheet-cloud.herokuapp.com:' + port); /* eslint-disable-line no-console */
>>>>>>> 6e369c2d1b4d72debd04033deeb6309212871fcb
export default appReq;