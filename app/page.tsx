import Link from "next/link";

// Phosphor Icons
const DroneIcon = () => (
  <svg width="80" height="80" viewBox="0 0 256 256" fill="currentColor">
    <path d="M207.06,72.94a32,32,0,0,0-45.26,0L128,106.74,94.2,72.94a32,32,0,0,0-45.26,45.26L82.74,152l-33.8,33.8a32,32,0,0,0,45.26,45.26L128,197.26l33.8,33.8a32,32,0,0,0,45.26-45.26L173.26,152l33.8-33.8A32,32,0,0,0,207.06,72.94ZM195.72,84.28a16,16,0,0,1,0,22.64L161.94,140.7a8,8,0,0,0,0,11.32l33.78,33.78a16,16,0,0,1-22.64,22.64L139.3,174.66a8,8,0,0,0-11.32,0L94.2,208.44a16,16,0,0,1-22.64-22.64L105.34,152a8,8,0,0,0,0-11.32L71.56,106.92a16,16,0,0,1,22.64-22.64L128,118.06l33.8-33.78A16,16,0,0,1,195.72,84.28ZM72,40a32,32,0,1,1,32,32A32,32,0,0,1,72,40Zm16,0a16,16,0,1,0,16-16A16,16,0,0,0,88,40ZM40,72A32,32,0,1,1,72,40,32,32,0,0,1,40,72ZM56,40A16,16,0,1,0,40,56,16,16,0,0,0,56,40Zm160,32a32,32,0,1,1,32-32A32,32,0,0,1,216,72Zm0-48a16,16,0,1,0,16,16A16,16,0,0,0,216,24ZM184,72a32,32,0,1,1,32-32A32,32,0,0,1,184,72Zm0-48a16,16,0,1,0,16,16A16,16,0,0,0,184,24Z" />
  </svg>
);

const BookOpenIcon = () => (
  <svg width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
    <path d="M232,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H24A16,16,0,0,0,8,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h72a16,16,0,0,0,16-16V64A16,16,0,0,0,232,48ZM96,192H24V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm136,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h72Z" />
  </svg>
);

const WrenchIcon = () => (
  <svg width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
    <path d="M226.76,69a8,8,0,0,0-12.84-2.88l-40.3,37.19-17.23-3.7-3.7-17.23,37.19-40.3A8,8,0,0,0,187,29.24,72,72,0,0,0,88,96c0,1.29,0,2.58.1,3.86L49.19,136a43.73,43.73,0,0,0,61.86,61.86l36.11-38.91c1.28.07,2.57.1,3.86.1a72,72,0,0,0,66.73-99Z" />
  </svg>
);

const TrophyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
    <path d="M232,64H208V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V64H24A16,16,0,0,0,8,80v32a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,211.62V232H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V211.62A80.13,80.13,0,0,0,204.35,152H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,136a24,24,0,0,1-24-24V80H48v32a80.15,80.15,0,0,0,.33,8.12A24,24,0,0,1,48,136Zm144,0a64,64,0,0,1-128,0V56H192Zm40-24a24,24,0,0,1-24,24,24,24,0,0,1-.33-16.12A80.15,80.15,0,0,0,208,112V80h24Z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor">
    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69l-58.35-58.34a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
  </svg>
);

const features = [
  {
    icon: <BookOpenIcon />,
    title: "Undergraduate Research",
    description: "Student-led research in autonomous systems, computer vision, and flight control at UT Austin.",
  },
  {
    icon: <WrenchIcon />,
    title: "Hands-On Experience",
    description: "Build with industry tools: CAD, PCB design, Linux, C++, ROS, and rapid prototyping.",
  },
  {
    icon: <TrophyIcon />,
    title: "Competition Ready",
    description: "Compete in the yearly RTX drone competition, pushing the limits of autonomous flight.",
  },
];

const stats = [
  { value: "50+", label: "Active Members" },
  { value: "4", label: "Active Projects" },
  { value: "6+", label: "Years" },
  { value: "1st", label: "RTX 2023" },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            {/* Content Side */}
            <div className="hero-content animate-fade-up">
              <p
                className="tag tag-accent"
                style={{ marginBottom: '20px', display: 'inline-flex' }}
              >
                University of Texas at Austin
              </p>
              <h1>
                Texas Aerial<br />
                <span className="text-gradient">Robotics</span>
              </h1>
              <p>
                Designing, building, and programming fully autonomous drones.
                Join 50+ students pushing the boundaries of aerial robotics.
              </p>
              <div className="hero-actions">
                <Link href="/projects" className="btn btn-primary btn-lg">
                  View Projects
                  <ArrowRightIcon />
                </Link>
                <Link href="/about" className="btn btn-secondary btn-lg">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Visual Side */}
            <div className="hero-visual animate-fade-up delay-2">
              <div className="hero-decoration hero-decoration-1" />
              <div className="hero-decoration hero-decoration-2" />
              <div className="hero-image-wrapper">
                <div style={{ color: 'var(--accent)', opacity: 0.6 }}>
                  <DroneIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section style={{ paddingTop: '0', paddingBottom: '60px' }}>
        <div className="container">
          <div className="stats-row" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card-stat animate-fade-up"
                style={{ animationDelay: `${0.1 + index * 0.05}s` }}
              >
                <div className="card-stat-value">{stat.value}</div>
                <div className="card-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header center">
            <h2>Who We Are</h2>
            <p>
              An undergraduate research organization dedicated to advancing autonomous flight technology
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-feature animate-fade-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 style={{ marginBottom: '12px' }}>{feature.title}</h3>
                <p style={{ margin: 0 }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="cta-section cta-centered">
            <div className="cta-content">
              <h2>Support Our Mission</h2>
              <p>
                Pushing the limits wouldn&apos;t be possible without the corporations,
                institutions, and individuals that support us.
              </p>
              <div className="cta-actions">
                <a
                  href="https://give.utexas.edu/?menu1=ENDS&solicit=TAR&response=DJ8UAV&srccsu=EN&srcsub=EN&comments=Texas%20Aerial%20Robotics%20(TAR)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  Donate Now
                </a>
                <Link href="/partners" className="btn btn-secondary btn-lg">
                  View Partners
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
