import Link from "next/link";

// Phosphor Icons
const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
    <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34l13.49-58.54L21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
  </svg>
);

const HeartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
    <path d="M240,94c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,220.66,16,164,16,94A62.07,62.07,0,0,1,78,32c20.65,0,38.73,8.88,50,23.89C139.27,40.88,157.35,32,178,32A62.07,62.07,0,0,1,240,94Z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor">
    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69l-58.35-58.34a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
  </svg>
);

const platinumSponsors = [
  { name: 'Altium', description: 'PCB Design Software' },
  { name: 'Ansys', description: 'Engineering Simulation' },
  { name: 'SolidWorks', description: 'CAD Software' },
];

const goldSponsors = [
  { name: 'Bild', description: 'Prototyping Partner' },
];

export default function Partners() {
  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="section-header center">
            <p className="tag tag-accent" style={{ marginBottom: '16px' }}>Our Partners</p>
            <h1>Supporting Innovation</h1>
            <p className="text-large">
              Organizations that make autonomous robotics research possible
            </p>
          </div>
        </div>
      </section>

      {/* Support Us CTA */}
      <section style={{ paddingBottom: '80px' }}>
        <div className="container">
          <div className="cta-section animate-fade-up" style={{ textAlign: 'left' }}>
            <div className="split" style={{ gap: '48px', alignItems: 'center' }}>
              <div className="cta-content" style={{ maxWidth: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ color: 'var(--accent)' }}>
                    <HeartIcon />
                  </div>
                  <h2 style={{ margin: 0 }}>Support Us</h2>
                </div>
                <p style={{ marginBottom: 0 }}>
                  Pushing the limits wouldn&apos;t be possible without all of the special corporations, institutions, and individuals that support us!
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '220px' }}>
                <a href="#" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  Corporate Package
                </a>
                <a
                  href="https://give.utexas.edu/?menu1=ENDS&solicit=TAR&response=DJ8UAV&srccsu=EN&srcsub=EN&comments=Texas%20Aerial%20Robotics%20(TAR)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Donate Now
                  <ArrowRightIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platinum Sponsors */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ marginBottom: '48px' }}>
            <span className="badge badge-platinum">
              <StarIcon />
              Platinum Sponsors
            </span>
          </div>

          <div className="feature-grid">
            {platinumSponsors.map((sponsor, index) => (
              <div
                key={sponsor.name}
                className="card animate-fade-up"
                style={{
                  height: '220px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  animationDelay: `${0.1 + index * 0.1}s`,
                  background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--text-primary)',
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    marginBottom: '12px',
                  }}
                >
                  {sponsor.name}
                </span>
                <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                  {sponsor.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Sponsors */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '48px' }}>
            <span className="badge badge-gold">
              <StarIcon />
              Gold Sponsors
            </span>
          </div>

          <div className="grid grid-3" style={{ maxWidth: '400px' }}>
            {goldSponsors.map((sponsor, index) => (
              <div
                key={sponsor.name}
                className="card animate-fade-up"
                style={{
                  height: '180px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  animationDelay: `${0.1 + index * 0.1}s`,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--text-primary)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    marginBottom: '8px',
                  }}
                >
                  {sponsor.name}
                </span>
                <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>
                  {sponsor.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="section">
        <div className="container">
          <div className="split" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="animate-fade-up">
              <p className="tag tag-accent" style={{ marginBottom: '20px' }}>Partner With Us</p>
              <h2 style={{ marginBottom: '16px' }}>Become a Partner</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '24px' }}>
                Interested in supporting undergraduate robotics research? We offer various partnership opportunities for organizations of all sizes.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent)' }}>
                    <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                  </span>
                  Logo placement on our drones and materials
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent)' }}>
                    <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                  </span>
                  Access to talented engineering students
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent)' }}>
                    <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor">
                      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                  </span>
                  Support cutting-edge robotics research
                </li>
              </ul>
            </div>
            <div className="animate-fade-up delay-2">
              <div
                className="card"
                style={{
                  padding: '40px',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, var(--bg-accent) 0%, var(--bg-secondary) 100%)',
                }}
              >
                <h3 style={{ marginBottom: '16px' }}>Ready to Partner?</h3>
                <p style={{ marginBottom: '24px', fontSize: '15px' }}>
                  Let&apos;s discuss how we can work together.
                </p>
                <Link href="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Contact Us
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
