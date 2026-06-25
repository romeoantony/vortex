import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(cors())
app.use(express.json())

const ARTISTS_FILE = path.join(__dirname, 'src', 'data', 'artists.json')
const EVENTS_FILE = path.join(__dirname, 'src', 'data', 'events.json')

// Helper to read JSON file
const readData = (filePath) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(data)
  } catch (err) {
    console.error(`Error reading ${filePath}:`, err)
    return []
  }
}

// Helper to write JSON file
const writeData = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
    return true
  } catch (err) {
    console.error(`Error writing ${filePath}:`, err)
    return false
  }
}

// Routes
app.get('/api/artists', (req, res) => {
  res.json(readData(ARTISTS_FILE))
})

app.post('/api/artists', (req, res) => {
  const artists = readData(ARTISTS_FILE)
  const newArtist = { ...req.body, id: req.body.id || Date.now().toString() }
  artists.push(newArtist)
  if (writeData(ARTISTS_FILE, artists)) {
    res.status(201).json(newArtist)
  } else {
    res.status(500).json({ error: 'Failed to write data' })
  }
})

app.put('/api/artists/:id', (req, res) => {
  let artists = readData(ARTISTS_FILE)
  const index = artists.findIndex(a => a.id === req.params.id)
  if (index !== -1) {
    artists[index] = { ...artists[index], ...req.body }
    if (writeData(ARTISTS_FILE, artists)) {
      res.json(artists[index])
    } else {
      res.status(500).json({ error: 'Failed to write data' })
    }
  } else {
    res.status(404).json({ error: 'Artist not found' })
  }
})

app.delete('/api/artists/:id', (req, res) => {
  let artists = readData(ARTISTS_FILE)
  artists = artists.filter(a => a.id !== req.params.id)
  if (writeData(ARTISTS_FILE, artists)) {
    res.status(200).json({ success: true })
  } else {
    res.status(500).json({ error: 'Failed to delete' })
  }
})

app.get('/api/events', (req, res) => {
  res.json(readData(EVENTS_FILE))
})

app.post('/api/events', (req, res) => {
  const events = readData(EVENTS_FILE)
  const newEvent = { ...req.body, id: req.body.id || Date.now().toString() }
  events.push(newEvent)
  if (writeData(EVENTS_FILE, events)) {
    res.status(201).json(newEvent)
  } else {
    res.status(500).json({ error: 'Failed to write data' })
  }
})

app.put('/api/events/:id', (req, res) => {
  let events = readData(EVENTS_FILE)
  const index = events.findIndex(e => e.id === req.params.id)
  if (index !== -1) {
    events[index] = { ...events[index], ...req.body }
    if (writeData(EVENTS_FILE, events)) {
      res.json(events[index])
    } else {
      res.status(500).json({ error: 'Failed to write data' })
    }
  } else {
    res.status(404).json({ error: 'Event not found' })
  }
})

app.delete('/api/events/:id', (req, res) => {
  let events = readData(EVENTS_FILE)
  events = events.filter(e => e.id !== req.params.id)
  if (writeData(EVENTS_FILE, events)) {
    res.status(200).json({ success: true })
  } else {
    res.status(500).json({ error: 'Failed to delete' })
  }
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Admin Server running on http://localhost:${PORT}`)
})
