import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import companiesController from '../controllers/companies.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', companiesController.getCompaniesData);

router.get('/:companyId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/companyDetail.html'))
})

router.get('*', (req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, '../public/error.html'))
})

export default router;