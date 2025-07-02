const fs = require('fs')
const server = require('http').createServer();

server.on('request', (req, res) => {
    // Solution 1
    // fs.readFile('test-file.txt', (err, data) => {
    //     if (err) res.end('Error')
    //     res.end(data)
    // })

    // Solution 2

    const readable = fs.createReadStream('test-file.txt')

    readable.on('data', (chunk) => {
        res.write(chunk);
    })

    readable.on('error', (err) => {
        console.log(err)
        res.statusCode = 500
        res.end('Error')
    })

    readable.on('end', () => {
        res.end('Stream finished')
    })

    // Solution 3

    readable.pipe(res)

})

server.listen(8000, () => {
    console.log('Server listening');
})
