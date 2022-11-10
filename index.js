import 'dotenv/config'
import './database/connectdb.js'
import express from 'express'
import authRouter from './routes/auth.route.js'



const app = express()

//Para poder recibir JSON en el body
app.use(express.json())
//Para designar la URL raíz de la API y asignarle las rutas del authRouter
app.use('/api/v1', authRouter)

//No es necesario configurar la variable de entorno PORT en .env porque cuando se suba a Heroku, 
//éste sí tiene definida la variable PORT
const PORT = process.env.PORT || 5000

app.listen(5000, () => console.log('.💥💢💌💥 http://localhost:' + PORT))

