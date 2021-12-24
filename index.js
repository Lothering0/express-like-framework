"use strict";
console.log('Request data........');
const sleep = (ms) => new Promise(resolve => setTimeout(() => resolve(null), ms));
// sleep(2000).then(() => console.log('Console log after 2 seconds'))
// sleep(4000).then(() => console.log('Console log after 4 seconds'))
Promise.all([sleep(2000), sleep(4000)])
    .then(() => {
    console.log('All promises');
});
Promise.race([sleep(2000), sleep(4000)])
    .then(() => {
    console.log('Race promises');
});
