/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-confusing-void-expression */
// eslint-disable-next-line @typescript-eslint/promise-function-async
function doSomethingPromise (): Promise<string> {
  console.timeLog()
  console.log('Init doSomethingPromise')
  return new Promise((resolve) => {
    console.timeLog()
    console.log('Running inside promise')
    resolve('Hello Promise')
  })
}

async function doSomethingAsync (): Promise<string> {
  return 'Hello Async'
}

async function main (): Promise<void> {
  console.time()

  console.timeLog()
  console.log('Running main')
  doSomethingAsync()
  doSomethingPromise().then(() => {
    console.timeLog()
    console.log('end')
  })

  console.timeLog()
  console.log('Response res')
}

void main()

export {}
