'use client'

import { useState } from 'react'
import { ArrowRight, Check, ChevronDown, FileCheck2, LockKeyhole, ScanLine, ShieldCheck, Terminal, Zap } from 'lucide-react'

const sectors = [
  { code: '01', name: 'LOCAL CORPORATE ENTITY', hint: 'LLC / Corporation / Partnership' },
  { code: '02', name: 'DAYCARE / CHILDCARE', hint: 'Licensing + operating compliance' },
  { code: '03', name: 'HAIR SALON / BARBERSHOP', hint: 'Entity + lease + workforce docs' },
]

const documentRows = [
  ['FORMATION', 'Entity formation + amendments', 'ROUTE 01'],
  ['OPERATIONS', 'Policies, waivers + vendor agreements', 'ROUTE 02'],
  ['WORKFORCE', 'Independent contractor + employment docs', 'ROUTE 03'],
  ['COMPLIANCE', 'Licensing, renewals + statutory filings', 'ROUTE 04'],
]

export default function Page() {
  const [sector, setSector] = useState('LOCAL CORPORATE ENTITY')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="tactical-shell">
      <header className="fixed-header">
        <div className="header-mark"><span className="signal-dot" aria-hidden="true" /> SERPENT SYSTEMS <span className="header-divider">//</span> SECURED CHANNEL</div>
        <div className="header-status"><span>NODE: SS-01</span><span className="status-online">● ONLINE</span></div>
      </header>

      <div className="blueprint-grid" aria-hidden="true" />
      <section className="hero-panel">
        <div className="eyebrow"><Terminal data-icon="inline-start" /> BUSINESS LEGAL DOCUMENT ROUTER <span className="eyebrow-line" /></div>
        <div className="hero-copy">
          <div>
            <p className="system-label">INTAKE MATRIX / v2.4.1</p>
            <h1>Sovereign Juris<br /><span>Small Business Router</span></h1>
          </div>
          <div className="hero-aside">
            <div className="hex-badge"><ShieldCheck aria-hidden="true" /></div>
            <p>Route the right legal document to the right business operation — with clarity, control, and a verified next move.</p>
          </div>
        </div>
        <div className="telemetry-strip"><span>LOCAL BUSINESS SUPPORT // DOCUMENT NAVIGATION // NO RETAINER REQUIRED TO BEGIN</span><span className="telemetry-value">SYSTEM READY <span className="pulse-dot" /></span></div>
      </section>

      <section className="router-layout">
        <div className="left-column">
          <div className="section-heading"><span className="section-number">01</span><div><p className="system-label">CLASSIFICATION PROTOCOL</p><h2>Identify your operation</h2></div><span className="heading-rule" /></div>
          <p className="section-intro">Select the business profile that best matches your current legal document need. Your selection configures the intake route.</p>
          <div className="sector-list" role="radiogroup" aria-label="Business type">
            {sectors.map((item) => (
              <button key={item.code} type="button" className={`sector-card ${sector === item.name ? 'is-active' : ''}`} onClick={() => setSector(item.name)} aria-pressed={sector === item.name}>
                <span className="sector-code">{item.code}</span><span className="sector-name">{item.name}<small>{item.hint}</small></span><span className="selector-box">{sector === item.name && <Check />}</span>
              </button>
            ))}
          </div>
          <div className="routing-table-wrap"><div className="table-caption"><span>AVAILABLE ROUTES</span><span>ACCESS: OPEN</span></div><div className="routing-table">
            {documentRows.map(([type, label, route]) => <div className="routing-row" key={type}><span className="route-type">{type}</span><span>{label}</span><span className="route-code">{route} <ArrowRight /></span></div>)}
          </div></div>
        </div>

        <div className="right-column">
          <div className="section-heading"><span className="section-number">02</span><div><p className="system-label">SECURE INTAKE</p><h2>Transmit your request</h2></div><span className="heading-rule" /></div>
          <form className="intake-form" onSubmit={handleSubmit}>
            <div className="form-status"><span><LockKeyhole /> ENCRYPTED INTAKE</span><span>FIELDS MARKED * REQUIRED</span></div>
            <label>CONTACT NAME *<input required name="name" placeholder="ENTER FULL NAME" /></label>
            <label>BUSINESS / ENTITY NAME *<input required name="business" placeholder="ENTER REGISTERED OR OPERATING NAME" /></label>
            <div className="form-grid"><label>EMAIL CHANNEL *<input required type="email" name="email" placeholder="NAME@DOMAIN.COM" /></label><label>PHONE LINE<input name="phone" placeholder="(000) 000-0000" /></label></div>
            <label>DOCUMENT ROUTE *<select required name="route" defaultValue=""><option value="" disabled>SELECT REQUIRED ROUTE</option><option>FORMATION — Entity formation + amendments</option><option>OPERATIONS — Policies, waivers + vendor agreements</option><option>WORKFORCE — Employment or contractor docs</option><option>COMPLIANCE — Licensing, renewals + statutory filings</option></select><ChevronDown className="select-chevron" /></label>
            <label>MISSION BRIEF *<textarea required name="brief" rows={4} placeholder="DESCRIBE THE DOCUMENT OR LEGAL ROUTING ASSISTANCE REQUIRED" /></label>
            <div className="form-footer"><div className="consent-line"><input required type="checkbox" id="consent" /><label htmlFor="consent">I confirm this request is for business operations and understand this is a document routing intake, not legal advice.</label></div><button type="submit" className="transmit-button">{submitted ? <>REQUEST QUEUED <Check /></> : <>TRANSMIT REQUEST <Zap /> </>}</button></div>
            {submitted && <div className="success-message" role="status"><FileCheck2 /> INTAKE RECEIVED — A routing specialist will review your request.</div>}
          </form>
        </div>
      </section>

      <footer className="system-footer"><span><ScanLine /> SERPENT SYSTEMS / SOVEREIGN JURIS DIVISION</span><span>PRIVATE // PROFESSIONAL // LOCAL</span><span>© 2026 SS-01</span></footer>
    </main>
  )
}

/* The form intentionally stays client-side until a routing endpoint is connected. */
