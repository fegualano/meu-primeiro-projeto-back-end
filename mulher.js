const express = require ("express")
const router = express.Router()


const app = express()
const porta = 3333

function mostraMulher(request, response){
 response.json({
    nome: 'Fernanda Gualano',
    imagem: 'https://media.licdn.com/dms/image/v2/C4D03AQGo9pEAWnA3vw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1580595734784?e=1750291200&v=beta&t=lrhh0aTFrsqslKKkjdcbRxR8M-J4czYxiZ9k5ZEeZJ8',
    minibio: 'Estudante de TI'
 })
}

function mostraPorta()     {
    console.log('Servidor criado e rodando na porta ', porta)
}
app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)