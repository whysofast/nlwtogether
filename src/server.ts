import express from 'express'
import bodyParser from 'body-parser'

const app = express();

app.use(bodyParser.json())

interface CadastroDTO{
    name ?: string ,
    email : string,
    ddd : BigInt
}

let array = [];

app.get('/users', (request, response) => {
    response.send(array.map(item => item))
})

app.post('/users', (request, response) => {
    let {name = 'Fast', email, ddd } : CadastroDTO = request.body


    array.push(`${name}, ${email}, ${ddd}`)
    response.sendStatus(200)
})

app.listen(3333,() => console.log(`Listening to port 3333`));