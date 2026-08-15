import Link from "next/link";

// Phosphor Icons
const PencilRulerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
    <path d="M224,48H96a8,8,0,0,0-8,8V96H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V184h48a8,8,0,0,0,8-8V56A8,8,0,0,0,224,48ZM160,208H64V112H160Zm56-40H176V104a8,8,0,0,0-8-8H104V64H216Z" />
  </svg>
);

const HammerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
    <path d="M251.34,112,183.88,44.51a16,16,0,0,0-22.63,0l-8.54,8.55a16,16,0,0,0,0,22.62L156.28,80l-28,28L95.31,75.06A16,16,0,0,0,84,70.63a75.62,75.62,0,0,0-52.37,20.87L19.31,104a16,16,0,0,0,0,22.62l12,12a16,16,0,0,0,22.63,0L59.36,133l15.31,15.31L19.31,203.66a16,16,0,0,0,0,22.63l12,12a16,16,0,0,0,22.62,0L109.26,183l15.31,15.31-5.63,5.62a16,16,0,0,0,0,22.62l12,12a16,16,0,0,0,22.62,0l12.34-12.35a75.59,75.59,0,0,0,20.87-52.36,16,16,0,0,0-4.43-11.32L149.34,130l28-28,4.38,3.57a16,16,0,0,0,22.62,0l8.55-8.55a16,16,0,0,0,0-22.62Z" />
  </svg>
);

const CodeIcon = () => (
  <svg width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
    <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z" />
  </svg>
);

const GraduationCapIcon = () => (
  <svg width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
    <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130.78,130.78,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z" />
  </svg>
);

const RocketIcon = () => (
  <svg width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
    <path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224Zm-24-112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,4.35-15.72L80,98.76V56A32,32,0,0,1,128,24h0a32,32,0,0,1,48,32v42.76l43.27,41.35A16.09,16.09,0,0,1,223.62,155.83Z" />
  </svg>
);

const capabilities = [
  {
    icon: <PencilRulerIcon />,
    title: "Design",
    description: "CAD modeling and prototyping using SolidWorks and Altium for drone systems and custom PCBs.",
  },
  {
    icon: <HammerIcon />,
    title: "Build",
    description: "Hands-on fabrication and assembly of autonomous drone platforms from the ground up.",
  },
  {
    icon: <CodeIcon />,
    title: "Program",
    description: "Software development using ROS, C++, and Python for autonomous systems with computer vision.",
  },
];

const technologies = [
  { name: 'ROS', category: 'Framework' },
  { name: 'C++', category: 'Language' },
  { name: 'Python', category: 'Language' },
  { name: 'Linux', category: 'Platform' },
  { name: 'SolidWorks', category: 'CAD' },
  { name: 'Altium', category: 'PCB' },
];

export default function About() {
  return (
    <div>
      {/* Hero Section - Compact */}
      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <div className="section-header center">
            <p className="tag tag-accent" style={{ marginBottom: '16px' }}>About Us</p>
            <h1>Empowering Future<br />Robotics Engineers</h1>
            <p className="text-large">
              Hands-on autonomous systems development at the University of Texas at Austin
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section - Split Layout */}
      <section className="section section-alt">
        <div className="container">
          <div className="split">
            <div className="animate-fade-up">
              <p className="tag tag-accent" style={{ marginBottom: '20px' }}>Our Mission</p>
              <h2 style={{ marginBottom: '24px' }}>Building Tomorrow&apos;s<br />Aerial Systems</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, marginBottom: '20px' }}>
                Texas Aerial Robotics is an undergraduate research organization dedicated to designing, building, and programming fully autonomous drones.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                Our members gain hands-on experience with industry-relevant tools, preparing them for careers in robotics, aerospace, and software engineering.
              </p>
            </div>
            <div className="animate-fade-up delay-2">
              <div className="stats-row" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                <div className="card-stat">
                  <div className="card-stat-value">50+</div>
                  <div className="card-stat-label">Active Members</div>
                </div>
                <div className="card-stat">
                  <div className="card-stat-value">6+</div>
                  <div className="card-stat-label">Years Active</div>
                </div>
                <div className="card-stat">
                  <div className="card-stat-value">4</div>
                  <div className="card-stat-label">Active Projects</div>
                </div>
                <div className="card-stat">
                  <div className="card-stat-value">1st</div>
                  <div className="card-stat-label">RTX 2023</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <h2>What We Do</h2>
            <p>Our three-pillar approach to autonomous systems development</p>
          </div>

          <div className="feature-grid">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="card-feature animate-fade-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="feature-icon">
                  {capability.icon}
                </div>
                <h3 style={{ marginBottom: '12px' }}>{capability.title}</h3>
                <p style={{ margin: 0 }}>{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section - Split Reverse */}
      <section className="section section-alt">
        <div className="container">
          <div className="split split-reverse">
            <div className="animate-fade-up">
              <p className="tag tag-accent" style={{ marginBottom: '20px' }}>Tech Stack</p>
              <h2 style={{ marginBottom: '24px' }}>Industry-Standard<br />Technologies</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                We work with the same tools used by leading aerospace and robotics companies, ensuring our members are job-ready from day one.
              </p>
            </div>
            <div className="animate-fade-up delay-2">
              <div className="grid grid-3" style={{ gap: '12px' }}>
                {technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="card"
                    style={{
                      textAlign: 'center',
                      padding: '20px 16px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        color: 'var(--accent)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '4px',
                      }}
                    >
                      {tech.category}
                    </div>
                    <div
                      style={{
                        fontSize: '1rem',
                        fontWeight: 600,
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--text-primary)',
                      }}
                    >
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section - Split */}
      <section className="section">
        <div className="container">
          <div className="split split-wide">
            <div className="animate-fade-up">
              <p className="tag tag-accent" style={{ marginBottom: '20px' }}>Why Join</p>
              <h2 style={{ marginBottom: '32px' }}>Grow Your Skills</h2>

              <div className="content-zone-lg">
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div className="feature-icon" style={{ width: '48px', height: '48px', flexShrink: 0 }}>
                    <GraduationCapIcon />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '8px' }}>Learn by Doing</h4>
                    <p style={{ margin: 0, fontSize: '15px' }}>
                      Gain practical experience that complements your coursework and prepares you for industry.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div className="feature-icon" style={{ width: '48px', height: '48px', flexShrink: 0 }}>
                    <RocketIcon />
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '8px' }}>Launch Your Career</h4>
                    <p style={{ margin: 0, fontSize: '15px' }}>
                      Our alumni work at top companies including SpaceX, Lockheed Martin, and NVIDIA.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-up delay-2">
              <div className="cta-section" style={{ padding: '48px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="cta-content" style={{ maxWidth: '100%' }}>
                  <h3 style={{ marginBottom: '16px' }}>Join Our Team</h3>
                  <p style={{ marginBottom: '24px' }}>
                    Interested in autonomous systems? We&apos;re always looking for passionate students.
                  </p>
                  <Link href="/contact" className="btn btn-primary">
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
