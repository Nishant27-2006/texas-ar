'use client';

import { useState } from 'react';

// Phosphor Icons
const EnvelopeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
    <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z" />
  </svg>
);

const MapPinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
    <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z" />
  </svg>
);

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
  </svg>
);

const InstagramLogoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
    <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
  </svg>
);

const LinkedinLogoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
  </svg>
);

const GithubLogoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.55a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.55a8,8,0,0,0,1.13,7.92A41.74,41.74,0,0,1,200,104Z" />
  </svg>
);

const PaperPlaneTiltIcon = () => (
  <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
    <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.38,84.9a15.86,15.86,0,0,0,14.42,9.1l1-.05a15.88,15.88,0,0,0,14-11.34l58.2-191.94,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85,114.6,143l42.42-42.41a8,8,0,0,0-11.32-11.32L103.27,131.71,15,88.49,206.8,32l-.15.05Z" />
  </svg>
);

const contactInfo = [
  {
    icon: <EnvelopeIcon />,
    label: 'Email',
    value: 'texasaerialrobotics@gmail.com',
    href: 'mailto:texasaerialrobotics@gmail.com',
  },
  {
    icon: <MapPinIcon />,
    label: 'Location',
    value: 'Austin, TX',
    href: null,
  },
  {
    icon: <ClockIcon />,
    label: 'Response Time',
    value: '24-48 hours',
    href: null,
  },
];

const socialLinks = [
  {
    name: 'Instagram',
    icon: <InstagramLogoIcon />,
    href: 'https://www.instagram.com/texasaerialrobotics/',
  },
  {
    name: 'LinkedIn',
    icon: <LinkedinLogoIcon />,
    href: 'https://www.linkedin.com/company/texas-aerial-robotics/',
  },
  {
    name: 'GitHub',
    icon: <GithubLogoIcon />,
    href: 'https://github.com/Texas-Aerial-Robotics',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="section-header center">
            <p className="tag tag-accent" style={{ marginBottom: '16px' }}>Get in Touch</p>
            <h1>Contact Us</h1>
            <p className="text-large">
              Have a question? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="split" style={{ alignItems: 'flex-start' }}>
            {/* Left Column - Contact Info */}
            <div className="animate-fade-up">
              <h2 style={{ marginBottom: '24px' }}>Let&apos;s Connect</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '40px' }}>
                Whether you&apos;re interested in joining our team, partnering with us, or just want to learn more about what we do, we&apos;re here to help.
              </p>

              {/* Contact Info Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="card"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      padding: '20px 24px',
                    }}
                  >
                    <div className="feature-icon" style={{ width: '48px', height: '48px', flexShrink: 0 }}>
                      {info.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '2px' }}>
                        {info.label}
                      </div>
                      {info.href ? (
                        <a
                          href={info.href}
                          style={{ fontWeight: 600, color: 'var(--text-primary)' }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>
                          {info.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 style={{ marginBottom: '16px' }}>Follow Us</h4>
                <div style={{ display: 'flex', gap: '12px' }}>
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icon"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                      }}
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="animate-fade-up delay-2">
              <div
                className="card"
                style={{
                  padding: '40px',
                  background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)',
                }}
              >
                <h3 style={{ marginBottom: '24px' }}>Send a Message</h3>

                <form onSubmit={handleSubmit}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                      gap: '20px',
                      marginBottom: '20px',
                    }}
                  >
                    <div>
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us more..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                    Send Message
                    <PaperPlaneTiltIcon />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
