import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import companiesData from '../data/companies.js'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(companiesData)
})

router.get('/:companyId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/companyDetail.html'))
})

router.get('*', (req, res) => {
    res.status(404).sendFile(path.resolve(__dirname, '../public/error.html'))
})

export default router;