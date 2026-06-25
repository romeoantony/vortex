import { useEffect } from 'react'
import PartyBackground from '../components/PartyBackground'

export default function PrivacyPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main>
      <PartyBackground imageSrc="/assets/images/dj-controller-bg.png" />
      <section className="section" style={{ paddingTop: 120 }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <h1 className="headline-lg" style={{ color: 'var(--primary)', marginBottom: 24 }}>PRIVACY POLICY</h1>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 16 }}>
            At Vortex, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our site.
          </p>
          <h2 className="headline-md" style={{ color: 'var(--tertiary)', marginTop: 32, marginBottom: 16 }}>Personal Information We Collect</h2>
          <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginBottom: 16 }}>
            When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
          </p>
        </div>
      </section>
    </main>
  )
}
