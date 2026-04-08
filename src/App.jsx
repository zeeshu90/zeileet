import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  CodeXml,
  Globe,
  Menu,
  Rocket,
  Smartphone,
} from 'lucide-react'

const serviceCards = [
  {
    icon: Globe,
    title: 'Web Platforms',
    description:
      'Business websites and custom web apps focused on speed, conversion, and clean user experience.',
  },
  {
    icon: Smartphone,
    title: 'Expo Mobile Apps',
    description:
      'Cross-platform Expo apps shipped to both Android and iOS with native-feeling UX and robust architecture.',
  },
  {
    icon: CodeXml,
    title: 'Product Engineering',
    description:
      'End-to-end product delivery from UX implementation to deployment pipelines and long-term maintenance.',
  },
]

const projects = [
  {
    name: 'Nexa Commerce',
    type: 'Headless commerce website',
  },
  {
    name: 'Stride Health',
    type: 'Expo app for Android & iOS',
  },
  {
    name: 'Orbit Desk',
    type: 'Internal SaaS operations tool',
  },
]

export default function App() {
  const pageRef = useRef(null)

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const root = pageRef.current
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.hero-shell', {
        y: 42,
        opacity: 0,
        duration: 0.9,
      })
        .from(
          '.site-header, .hero-intro',
          {
            y: 24,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
          },
          '-=0.45',
        )
        .from(
          '.hero-line',
          {
            yPercent: 100,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
          },
          '-=0.35',
        )
        .from(
          '.hero-copy, .hero-cta, .hero-mobile',
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
          },
          '-=0.4',
        )

      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 78%',
        },
        y: 32,
        opacity: 0,
        duration: 0.7,
        stagger: 0.14,
        ease: 'power2.out',
      })

      gsap.from('.project-item', {
        scrollTrigger: {
          trigger: '.projects-list',
          start: 'top 84%',
        },
        x: -20,
        opacity: 0,
        duration: 0.55,
        stagger: 0.12,
      })

      if (!prefersReducedMotion) {
        gsap.to('.section-rocket', {
          y: -5,
          rotate: 10,
          scale: 1.08,
          duration: 1.9,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          transformOrigin: '50% 65%',
        })
      }
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <div className="page" ref={pageRef}>
      <main className="hero-shell">
        <header className="site-header">
          <a className="logo" href="#">
            rozeedio.
          </a>

          <div className="header-actions">
            <button className="pill-btn" type="button">
              Let&apos;s Talk <ArrowRight size={18} strokeWidth={2.2} />
            </button>
            <button className="icon-btn" type="button" aria-label="Open menu">
              <Menu size={18} />
            </button>
          </div>
        </header>

        <section className="hero">
          <p className="hero-intro">Hello! We are Rozeedio.</p>

          <h1 className="hero-title">
            <span className="hero-line">Designing and building software products</span>
            <span className="hero-line">for web and mobile with</span>
            <span className="hero-line hero-line-muted">sharp engineering focus.</span>
          </h1>

          <div className="hero-meta">
            <button className="cta-dark hero-cta" type="button">
              Start a Project <ArrowRight size={18} />
            </button>
            <p className="hero-copy">
              A fully remote software development company crafting modern websites and
              Expo apps for Android and iOS.
            </p>
          </div>

          <aside className="hero-mobile" aria-hidden="true">
            <div className="phone-notch" />
            <p className="phone-eyebrow">rozeedio.</p>
            <p className="phone-heading">Web + Mobile</p>
            <p className="phone-highlight">Expo apps</p>
            <p className="phone-small">Android and iOS ready</p>
          </aside>
        </section>

        <section className="section-block">
          <div className="section-title-row">
            <h2>What we do</h2>
            <Rocket className="section-rocket" size={20} />
          </div>

          <div className="services-grid">
            {serviceCards.map((item) => {
              const Icon = item.icon
              return (
                <article className="service-card" key={item.title}>
                  <div className="service-icon-wrap">
                    <Icon size={20} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section-block projects-block">
          <h2>Selected works</h2>
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-item" key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.type}</p>
                <ArrowRight size={16} />
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
