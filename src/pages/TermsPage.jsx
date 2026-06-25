import { useEffect } from 'react'
import PartyBackground from '../components/PartyBackground'

export default function TermsPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main style={{ display: 'flex', alignItems: 'center', paddingTop: 72 }}>
      <PartyBackground imageSrc="/assets/images/dj-controller-bg.png" />
      <section className="section" style={{ width: '100%', padding: '64px 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h1 className="headline-lg" style={{ color: 'var(--primary)', marginBottom: 24 }}>TERMS OF SERVICE</h1>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 16 }}>
            Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service.
          </p>
          <h2 className="headline-md" style={{ color: 'var(--tertiary)', marginTop: 32, marginBottom: 16 }}>General Conditions</h2>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 16 }}>
            We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve transmissions over various networks.
          </p>
        </div>
      </section>
    </main>
  )
}
