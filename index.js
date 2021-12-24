"use strict";
const delay = (ms) => new Promise(resolve => setTimeout(() => resolve(null), ms));
const url = 'https://jsonplaceholder.typicode.com/todos';
function fetchTodos() {
    console.log('Fetch todo started');
    return delay(2000).then(() => {
        return fetch(url).then(data => data.json());
    });
}
fetchTodos()
    .then((data) => console.log(data))
    .catch((e) => console.error(e));
