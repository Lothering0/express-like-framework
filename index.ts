const delay = (ms: number) => new Promise(resolve => setTimeout(() => resolve(null), ms))

interface Todo {
  completed: boolean
  id: number
  title: string
  userId: number
}

const url: string = 'https://jsonplaceholder.typicode.com/todos'

async function fetchAsyncTodos() {
  try {
    await delay(2000)

    const response = await fetch(url)
    const data: Todo[] = await response.json()

    console.log(data)
  } catch (e) {
    console.error((e as Error).message)
  } finally {
    console.log('Done')
  }
}

fetchAsyncTodos()
