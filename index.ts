const delay = (ms: number) => new Promise(resolve => setTimeout(() => resolve(null), ms))

const url: string = 'https://jsonplaceholder.typicode.com/todos'

function fetchTodos(): any {
  console.log('Fetch todo started')

  return delay(2000).then(() => {
    return fetch(url).then(data => data.json())
  })
}

fetchTodos()
  .then((data: any) => console.log(data))
  .catch((e: Error) => console.error(e))
