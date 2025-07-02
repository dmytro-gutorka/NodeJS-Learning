import url from 'url'

const url1 = 'https://www.google.com/search?q=node+path'


const obj = {
    q: 'node path',
    page: 1,
    someParam: 'someValue'
}


const params = new URLSearchParams(obj)
console.log(params.toString())