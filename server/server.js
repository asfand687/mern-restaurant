import express from 'express'
import cors from 'cors'
import restaurants from './api/restaurants.route.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/v1/restaurant', restaurants)
app.use('*', (req, res) => res.status(404).json({ error: 'Route not found' }))

export default app
