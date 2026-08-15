'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

// Phosphor Icons for nav
const HomeIcon = ({ filled }: { filled?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
    {filled ? (
      <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48a16,16,0,0,1,21.66,0l80,75.48A16,16,0,0,1,224,115.55Z" />
    ) : (
      <path d="M219.31,108.68l-80-75.48a16,16,0,0,0-22.62,0l-80,75.48a16,16,0,0,0-4.69,11.32V208a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V160h-8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.55l80-75.48,80,75.48V208a8,8,0,0,1-8,8H160v16h32a16,16,0,0,0,16-16V120A16,16,0,0,0,219.31,108.68Z" />
    )}
  </svg>
);

const InfoIcon = ({ filled }: { filled?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
    {filled ? (
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z" />
    ) : (
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z" />
    )}
  </svg>
);

const RocketIcon = ({ filled }: { filled?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
    {filled ? (
      <path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224ZM128,112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,4.35-15.72L80,98.76V56h0a32,32,0,0,1,32-32,32,32,0,0,1,32,32h0v42.76l43.27,41.35A16.09,16.09,0,0,1,223.62,155.83Z" />
    ) : (
      <path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224Zm-24-112a12,12,0,1,0-12-12A12,12,0,0,0,128,112Zm95.62,43.83-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,4.35-15.72L80,98.76V56A32,32,0,0,1,128,24h0a32,32,0,0,1,48,32v42.76l43.27,41.35A16.09,16.09,0,0,1,223.62,155.83ZM96,56v38.75l32,30.54,32-30.54V56a16,16,0,0,0-32,0,16,16,0,0,0-32,0ZM207.64,148l-43.27-41.35a16.08,16.08,0,0,1-4.85-8.65H96.48a16.08,16.08,0,0,1-4.85,8.65L48.36,148l12.36,55.63,27.24-20.43a16,16,0,0,1,9.6-3.2h60.88a16,16,0,0,1,9.6,3.2l27.24,20.43Z" />
    )}
  </svg>
);

const HandshakeIcon = ({ filled }: { filled?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
    {filled ? (
      <path d="M119.76,217.94A8,8,0,0,1,108.92,220l-42.84-37.49a8,8,0,0,1-.84-11.27l.13-.14,54.36-62.36a8,8,0,0,1,12.07-.14L165.4,146.4l-34.8,71.4A8,8,0,0,1,119.76,217.94Zm118.88-91.51a8,8,0,0,0-11.31-.68L183.6,162.4l-40.8-47.16a24,24,0,0,0-36.24.44L52.2,178a24,24,0,0,0,2.52,33.82l42.84,37.49a24,24,0,0,0,34.71-3.11l28-34.65,45.37-34.24A8,8,0,0,0,238.64,126.43ZM64,152a8,8,0,0,0,5.27-2l68.84-61a24.11,24.11,0,0,1,32,.2l3.49,3.19a8,8,0,1,0,10.8-11.82l-3.49-3.19a40.18,40.18,0,0,0-53.32-.34L64,85.47V56h88a8,8,0,0,0,0-16H56a8,8,0,0,0-8,8v96A8,8,0,0,0,64,152Z" />
    ) : (
      <path d="M119.76,217.94A8,8,0,0,1,108.92,220l-42.84-37.49a8,8,0,0,1-.84-11.27l.13-.14,54.36-62.36a8,8,0,0,1,12.07-.14L165.4,146.4l-34.8,71.4A8,8,0,0,1,119.76,217.94Zm118.88-91.51a8,8,0,0,0-11.31-.68L183.6,162.4l-40.8-47.16a24,24,0,0,0-36.24.44L52.2,178a24,24,0,0,0,2.52,33.82l42.84,37.49a24,24,0,0,0,34.71-3.11l28-34.65,45.37-34.24A8,8,0,0,0,238.64,126.43ZM64,152a8,8,0,0,0,5.27-2l68.84-61a24.11,24.11,0,0,1,32,.2l3.49,3.19a8,8,0,1,0,10.8-11.82l-3.49-3.19a40.18,40.18,0,0,0-53.32-.34L64,85.47V56h88a8,8,0,0,0,0-16H56a8,8,0,0,0-8,8v96A8,8,0,0,0,64,152Z" />
    )}
  </svg>
);

const EnvelopeIcon = ({ filled }: { filled?: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
    {filled ? (
      <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11a8,8,0,0,0,10.82,0l12-11L203.43,192H52.57Zm46.74-10.85L216,74.19V181.81Z" />
    ) : (
      <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z" />
    )}
  </svg>
);

const navLinks = [
  { name: 'Home', path: '/', icon: HomeIcon },
  { name: 'About', path: '/about', icon: InfoIcon },
  { name: 'Projects', path: '/projects', icon: RocketIcon },
  { name: 'Partners', path: '/partners', icon: HandshakeIcon },
  { name: 'Contact', path: '/contact', icon: EnvelopeIcon },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Desktop Navigation - Floating Pill */}
      <nav className={`nav-desktop ${scrolled ? 'scrolled' : ''}`}>
        <Link href="/" className="nav-logo">
          TAR
        </Link>

        <div className="nav-divider" />

        {navLinks.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
          >
            {item.name}
          </Link>
        ))}

        <div className="nav-divider" />

        <ThemeToggle />

        <a
          href="https://give.utexas.edu/?menu1=ENDS&solicit=TAR&response=DJ8UAV&srccsu=EN&srcsub=EN&comments=Texas%20Aerial%20Robotics%20(TAR)"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
          style={{ marginLeft: '4px' }}
        >
          Donate
        </a>
      </nav>

      {/* Mobile Header */}
      <div className="nav-mobile-header">
        <Link href="/" className="nav-logo">
          Texas Aerial Robotics
        </Link>
        <ThemeToggle />
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="nav-mobile">
        <div className="nav-mobile-inner">
          {navLinks.map((item) => {
            const IconComponent = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`nav-mobile-link ${active ? 'active' : ''}`}
              >
                <IconComponent filled={active} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Spacer for desktop */}
      <div className="nav-spacer" />
    </>
  );
}
