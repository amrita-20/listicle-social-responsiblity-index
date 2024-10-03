import './config/dotenv.js'
import express from 'express';
import companyRouter from './routes/companies.js'

const PORT = process.env.PORT || 3000
const app = express();
  
app.use('/public', express.static('./public'));

app.use('/scripts', express.static('./public/scripts'))

app.use('/company', companyRouter)

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})