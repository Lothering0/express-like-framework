"use strict";
const delay = (ms) => new Promise(resolve => setTimeout(() => resolve(null), ms));
const url = 'https://jsonplaceholder.typicode.com/todos';
async function fetchAsyncTodos() {
    try {
        await delay(2000);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
    catch (e) {
        console.error(e.message);
    }
    finally {
        console.log('Done');
    }
}
fetchAsyncTodos();
