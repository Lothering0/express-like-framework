"use strict";
console.log('Request data........');
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Prepearing data.........');
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working',
            modified: false
        };
        resolve(backendData);
    }, 2000);
})
    .then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
})
    .then((data) => {
    data.modified = true;
    return data;
})
    .then((data) => {
    console.log('Modified', data);
})
    .catch(err => console.error('Error: ', err))
    .finally(() => console.log('Finally'));
