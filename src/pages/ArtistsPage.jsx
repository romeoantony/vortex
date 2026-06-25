import { useEffect } from 'react'
import PartyBackground from '../components/PartyBackground'
import ArtistCard from '../components/ArtistCard'
import artists from '../data/artists.json'

export default function ArtistsPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main>
      <PartyBackground imageSrc="/assets/images/leo.png" />
      <section className="artists-page-hero">
        <div className="container">
          <p className="label-caps" style={{ color: 'var(--tertiary)', marginBottom: 12 }}>ROSTER</p>
          <h1 className="headline-lg" style={{ color: 'var(--primary)', textTransform: 'uppercase' }}>ARTISTS</h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <div className="artists-grid">
            {artists.map((artist, i) => (
              <ArtistCard
                key={artist.id}
                id={artist.id}
                name={artist.name}
                genres={artist.genres}
                image={artist.image}
                stats={artist.stats}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
