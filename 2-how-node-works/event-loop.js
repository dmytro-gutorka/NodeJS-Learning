const fs = require('fs')

setTimeout(() => console.log('Timer 1 finished'), 3000)
setImmediate(() => console.log('Immediate 1 finished'))

fs.readFile('test-file.txt', () => {

    console.log('I/O finished')

    setTimeout(() => console.log('Timer 2 finished'), 2000)
    setTimeout(() => console.log('Timer 3 finished'), 3000)

    setImmediate(() => console.log('Immediate 2 finished'))
    setImmediate(() => console.log('Immediate 3 finished'))

    process.nextTick(() => console.log('Next tick finished'))
})

console.log('Top-level code finished')