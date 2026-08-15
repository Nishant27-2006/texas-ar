import Link from "next/link";

// Phosphor Icons
const GithubLogoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.55a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.55a8,8,0,0,0,1.13,7.92A41.74,41.74,0,0,1,200,104Z" />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
    <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z" />
  </svg>
);

const projects = [
  {
    title: "Claw Retrieval",
    description: "Autonomous object retrieval and delivery using a claw mechanism, featuring a 2-in-1 landing gear and claw system, driver PCB with PID control, and searchlight for low-light operations.",
    tags: ["Hardware", "Automation", "PCB Design"],
    status: "Active",
    highlight: true,
  },
  {
    title: "Thrust Vector Control Dart",
    description: "Drone system capable of deploying a dart with thrust vectoring control via coaxial motor. ESP32-controlled with real-time video streaming and self-landing.",
    tags: ["Flight Control", "ESP32", "Computer Vision"],
    status: "Active",
    highlight: false,
  },
  {
    title: "Color Vision Targeting",
    description: "Fully autonomous Nerf gun drone system for detecting and targeting maroon-colored objects, combining image recognition, navigation, and precision targeting.",
    tags: ["Computer Vision", "Object Detection", "Autonomy"],
    status: "Active",
    highlight: false,
  },
  {
    title: "RTX Drone Competition",
    description: "Yearly RTX competition with scout UAV for area mapping and delivery vehicle for package transportation to designated landing zones.",
    tags: ["Competition", "Mapping", "Multi-Agent"],
    status: "Active",
    highlight: false,
  },
];

export default function Projects() {
  const featuredProject = projects.find(p => p.highlight);
  const otherProjects = projects.filter(p => !p.highlight);

  return (
    <div>
      {/* Hero Section */}
      <section className="section" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="section-header center">
            <p className="tag tag-accent" style={{ marginBottom: '16px' }}>Our Work</p>
            <h1>Current Projects</h1>
            <p className="text-large">2024 - 2025 TAR Projects</p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      {featuredProject && (
        <section style={{ paddingBottom: '40px' }}>
          <div className="container">
            <div
              className="card-feature animate-fade-up"
              style={{
                padding: '48px',
                background: 'linear-gradient(135deg, var(--bg-accent) 0%, var(--bg-secondary) 100%)',
              }}
            >
              <div className="split" style={{ gap: '48px' }}>
                <div>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                    <span className="tag tag-accent">{featuredProject.status}</span>
                    <span className="tag">Featured</span>
                  </div>
                  <h2 style={{ marginBottom: '16px' }}>{featuredProject.title}</h2>
                  <p style={{ fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '24px' }}>
                    {featuredProject.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {featuredProject.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--accent-muted)',
                    borderRadius: 'var(--radius-xl)',
                    minHeight: '200px',
                    aspectRatio: '4/3',
                  }}
                >
                  <div style={{ color: 'var(--accent)', opacity: 0.4 }}>
                    <svg width="80" height="80" viewBox="0 0 256 256" fill="currentColor">
                      <path d="M207.06,72.94a32,32,0,0,0-45.26,0L128,106.74,94.2,72.94a32,32,0,0,0-45.26,45.26L82.74,152l-33.8,33.8a32,32,0,0,0,45.26,45.26L128,197.26l33.8,33.8a32,32,0,0,0,45.26-45.26L173.26,152l33.8-33.8A32,32,0,0,0,207.06,72.94Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other Projects Grid */}
      <section className="section-sm">
        <div className="container">
          <div className="feature-grid">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="card-feature animate-fade-up"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  animationDelay: `${0.1 + index * 0.1}s`,
                }}
              >
                <div style={{ marginBottom: '16px' }}>
                  <span className="tag tag-accent">{project.status}</span>
                </div>

                <h3 style={{ marginBottom: '12px' }}>{project.title}</h3>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '16px',
                  }}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag" style={{ fontSize: '11px', padding: '4px 10px' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <p style={{ margin: 0, flex: 1, fontSize: '15px' }}>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <section className="section">
        <div className="container">
          <div className="split" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="animate-fade-up">
              <p className="tag tag-accent" style={{ marginBottom: '20px' }}>Open Source</p>
              <h2 style={{ marginBottom: '16px' }}>Past Projects</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
                Check out our GitHub repository for a complete archive of past projects, including documentation and source code.
              </p>
            </div>
            <div className="animate-fade-up delay-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <a
                href="https://github.com/Texas-Aerial-Robotics"
                target="_blank"
                rel="noopener noreferrer"
                className="card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '24px 32px',
                  textDecoration: 'none',
                }}
              >
                <GithubLogoIcon />
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>
                    Texas-Aerial-Robotics
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    View on GitHub
                  </div>
                </div>
                <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-section cta-centered">
            <div className="cta-content">
              <h2>Support Our Projects</h2>
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
                  Become a Partner
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
