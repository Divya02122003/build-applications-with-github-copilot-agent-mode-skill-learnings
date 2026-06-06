import express from 'express'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())

const mongoUri = process.env.MONGODB_URI ?? 'mongodb://localhost:27017/octofit_db'

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
  })

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

const port = Number(process.env.PORT ?? 8000)
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
