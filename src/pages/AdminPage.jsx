import { useState, useEffect } from 'react'

export default function AdminPage() {
  const [tab, setTab] = useState('events')
  
  // Data State
  const [eventsData, setEventsData] = useState([])
  const [artistsData, setArtistsData] = useState([])
  const [message, setMessage] = useState('')

  // Edit State
  const [editEventId, setEditEventId] = useState(null)
  const [editArtistId, setEditArtistId] = useState(null)

  // Event Form State
  const initialEventForm = { title: '', tag: '', date: '', venue: '', image: '', description: '', artists: [] }
  const [eventForm, setEventForm] = useState(initialEventForm)

  // Artist Form State
  const initialArtistForm = { name: '', genres: '', bio: '', image: '', listeners: '', followers: '' }
  const [artistForm, setArtistForm] = useState(initialArtistForm)

  // Fetch Data
  const fetchData = async () => {
    try {
      const [eventsRes, artistsRes] = await Promise.all([
        fetch('http://localhost:3001/api/events'),
        fetch('http://localhost:3001/api/artists')
      ])
      const evts = await eventsRes.json()
      const arts = await artistsRes.json()
      setEventsData(evts)
      setArtistsData(arts)
    } catch (err) {
      console.error('Error fetching data. Is admin server running?', err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const showMessage = (msg) => {
    setMessage(msg)
    setTimeout(() => setMessage(''), 3000)
  }

  // Handle Event Changes
  const handleEventChange = (e) => setEventForm({ ...eventForm, [e.target.name]: e.target.value })
  
  const handleEventArtistToggle = (artistName) => {
    const current = [...eventForm.artists]
    if (current.includes(artistName)) {
      setEventForm({ ...eventForm, artists: current.filter(a => a !== artistName) })
    } else {
      current.push(artistName)
      setEventForm({ ...eventForm, artists: current })
    }
  }

  const handleArtistChange = (e) => setArtistForm({ ...artistForm, [e.target.name]: e.target.value })

  // Edit setup
  const loadEventForEdit = (evt) => {
    setEditEventId(evt.id)
    // Try to approximate a date string for the input if possible, else empty
    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const monthIndex = monthNames.indexOf(evt.month?.toUpperCase());
    let dateStr = ''
    if (monthIndex !== -1 && evt.day) {
      const year = new Date().getFullYear()
      const m = String(monthIndex + 1).padStart(2, '0')
      const d = String(evt.day).padStart(2, '0')
      dateStr = `${year}-${m}-${d}`
    }
    
    setEventForm({
      title: evt.title || '',
      tag: evt.tag || '',
      venue: evt.venue || '',
      image: evt.image || '',
      description: evt.description || '',
      date: dateStr,
      artists: evt.artists || []
    })
    setTab('events')
  }

  const loadArtistForEdit = (art) => {
    setEditArtistId(art.id)
    setArtistForm({
      name: art.name || '',
      genres: art.genres?.join(', ') || '',
      bio: art.bio || '',
      image: art.image || '',
      listeners: art.listeners || '',
      followers: art.followers || ''
    })
    setTab('artists')
  }

  const submitEvent = async (e) => {
    e.preventDefault()
    
    // Parse date back into day and month
    let day = ''
    let month = ''
    if (eventForm.date) {
      const d = new Date(eventForm.date)
      day = String(d.getDate()).padStart(2, '0')
      month = d.toLocaleString('en-US', { month: 'short' }).toUpperCase()
    }

    const payload = {
      ...eventForm,
      day,
      month,
      id: editEventId || eventForm.title.toLowerCase().replace(/\s+/g, '-'),
    }
    delete payload.date // internal field

    const method = editEventId ? 'PUT' : 'POST'
    const url = editEventId ? `http://localhost:3001/api/events/${editEventId}` : 'http://localhost:3001/api/events'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (res.ok) {
        showMessage(`Event ${editEventId ? 'updated' : 'saved'} successfully!`)
        setEventForm(initialEventForm)
        setEditEventId(null)
        fetchData()
      }
    } catch (err) {
      showMessage('Error saving event. Is the admin server running?')
    }
  }

  const submitArtist = async (e) => {
    e.preventDefault()
    const payload = {
      ...artistForm,
      id: editArtistId || artistForm.name.toLowerCase().replace(/\s+/g, '-'),
      genres: artistForm.genres.split(',').map(a => a.trim()).filter(Boolean)
    }

    const method = editArtistId ? 'PUT' : 'POST'
    const url = editArtistId ? `http://localhost:3001/api/artists/${editArtistId}` : 'http://localhost:3001/api/artists'

    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (res.ok) {
        showMessage(`Artist ${editArtistId ? 'updated' : 'saved'} successfully!`)
        setArtistForm(initialArtistForm)
        setEditArtistId(null)
        fetchData()
      }
    } catch (err) {
      showMessage('Error saving artist. Is the admin server running?')
    }
  }

  const deleteItem = async (type, id) => {
    if (!window.confirm(`Are you sure you want to delete ${id}?`)) return
    try {
      const res = await fetch(`http://localhost:3001/api/${type}/${id}`, { method: 'DELETE' })
      if (res.ok) {
        showMessage('Deleted successfully!')
        fetchData()
      }
    } catch (err) {
      showMessage('Error deleting item.')
    }
  }

  const cancelEdit = (type) => {
    if (type === 'events') {
      setEditEventId(null)
      setEventForm(initialEventForm)
    } else {
      setEditArtistId(null)
      setArtistForm(initialArtistForm)
    }
  }

  return (
    <main style={{ padding: '120px 0', minHeight: '100vh', background: 'var(--background)' }}>
      <div className="container">
        <h1 className="headline-lg" style={{ marginBottom: 32 }}>ADMIN CONSOLE</h1>
        
        {message && (
          <div style={{ background: 'var(--primary)', color: 'white', padding: '16px 24px', marginBottom: 32, fontWeight: 'bold' }}>
            {message}
          </div>
        )}

        <div style={{ display: 'flex', gap: 16, marginBottom: 48 }}>
          <button className={`btn-outline ${tab === 'events' ? 'btn-primary' : ''}`} onClick={() => setTab('events')}>Events</button>
          <button className={`btn-outline ${tab === 'artists' ? 'btn-primary' : ''}`} onClick={() => setTab('artists')}>Artists</button>
        </div>

        {tab === 'events' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <h2 className="headline-md">{editEventId ? 'Edit Event' : 'Add Event'}</h2>
                {editEventId && <button onClick={() => cancelEdit('events')} className="btn-outline">Cancel Edit</button>}
              </div>
              
              <form onSubmit={submitEvent} className="inquiry-form">
                <label className="inquiry-form__label">Title <input required type="text" name="title" value={eventForm.title} onChange={handleEventChange} className="inquiry-form__input" /></label>
                <div className="form-row">
                  <label className="inquiry-form__label">Tag (e.g. LIVE) <input required type="text" name="tag" value={eventForm.tag} onChange={handleEventChange} className="inquiry-form__input" /></label>
                  <label className="inquiry-form__label">Venue <input required type="text" name="venue" value={eventForm.venue} onChange={handleEventChange} className="inquiry-form__input" /></label>
                </div>
                
                <label className="inquiry-form__label">Date <input required type="date" name="date" value={eventForm.date} onChange={handleEventChange} className="inquiry-form__input" /></label>
                <label className="inquiry-form__label">Image URL <input required type="text" name="image" value={eventForm.image} onChange={handleEventChange} className="inquiry-form__input" /></label>
                
                <label className="inquiry-form__label">Lineup Artists</label>
                <div style={{ background: 'var(--surface-container)', padding: 16, marginBottom: 24, display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                  {artistsData.length === 0 ? <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>No artists found. Add artists first.</p> : artistsData.map(art => (
                    <label key={art.id} style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                      <input 
                        type="checkbox" 
                        checked={eventForm.artists.includes(art.name)} 
                        onChange={() => handleEventArtistToggle(art.name)} 
                      />
                      {art.name}
                    </label>
                  ))}
                </div>

                <label className="inquiry-form__label">Description <textarea required rows="4" name="description" value={eventForm.description} onChange={handleEventChange} className="inquiry-form__textarea" /></label>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>{editEventId ? 'UPDATE EVENT' : 'SAVE EVENT'}</button>
              </form>
            </div>
            <div>
              <h2 className="headline-md" style={{ marginBottom: 24 }}>Existing Events</h2>
              <div style={{ background: 'var(--surface-container)', padding: 24, maxHeight: 800, overflowY: 'auto' }}>
                {eventsData.length === 0 ? <p>No events found.</p> : eventsData.map(evt => (
                  <div key={evt.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid var(--surface-variant)' }}>
                    <div>
                      <strong style={{ display: 'block', fontSize: '1.2rem' }}>{evt.title}</strong>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{evt.day} {evt.month} | {evt.venue}</span>
                    </div>
                    <div style={{ display: 'flex', gap: 16 }}>
                      <button onClick={() => loadEventForEdit(evt)} style={{ color: 'var(--tertiary)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Edit</button>
                      <button onClick={() => deleteItem('events', evt.id)} style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === 'artists' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <h2 className="headline-md">{editArtistId ? 'Edit Artist' : 'Add Artist'}</h2>
                {editArtistId && <button onClick={() => cancelEdit('artists')} className="btn-outline">Cancel Edit</button>}
              </div>

              <form onSubmit={submitArtist} className="inquiry-form">
                <label className="inquiry-form__label">Name <input required type="text" name="name" value={artistForm.name} onChange={handleArtistChange} className="inquiry-form__input" /></label>
                <label className="inquiry-form__label">Genres (comma separated) <input required type="text" name="genres" value={artistForm.genres} onChange={handleArtistChange} className="inquiry-form__input" /></label>
                <div className="form-row">
                  <label className="inquiry-form__label">Monthly Listeners <input required type="text" name="listeners" value={artistForm.listeners} onChange={handleArtistChange} className="inquiry-form__input" /></label>
                  <label className="inquiry-form__label">Followers <input required type="text" name="followers" value={artistForm.followers} onChange={handleArtistChange} className="inquiry-form__input" /></label>
                </div>
                <label className="inquiry-form__label">Image URL <input required type="text" name="image" value={artistForm.image} onChange={handleArtistChange} className="inquiry-form__input" /></label>
                <label className="inquiry-form__label">Bio <textarea required rows="4" name="bio" value={artistForm.bio} onChange={handleArtistChange} className="inquiry-form__textarea" /></label>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>{editArtistId ? 'UPDATE ARTIST' : 'SAVE ARTIST'}</button>
              </form>
            </div>
            <div>
              <h2 className="headline-md" style={{ marginBottom: 24 }}>Existing Artists</h2>
              <div style={{ background: 'var(--surface-container)', padding: 24, maxHeight: 800, overflowY: 'auto' }}>
                {artistsData.length === 0 ? <p>No artists found.</p> : artistsData.map(art => (
                  <div key={art.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid var(--surface-variant)' }}>
                    <strong style={{ fontSize: '1.2rem' }}>{art.name}</strong>
                    <div style={{ display: 'flex', gap: 16 }}>
                      <button onClick={() => loadArtistForEdit(art)} style={{ color: 'var(--tertiary)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Edit</button>
                      <button onClick={() => deleteItem('artists', art.id)} style={{ color: 'red', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
