'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projectData, type ProjectPreviewVariant } from '@/components/data/projectData'

gsap.registerPlugin(ScrollTrigger)

function MockPreview({ variant }: { variant: ProjectPreviewVariant }) {
  if (variant === 'portfolio') {
    return (
      <div className="mock-body">
        <div className="mock-hero-img hero-portfolio">
          <div className="mock-avatar" />
          <div className="mock-hero-lines">
            <div className="mock-line line-lg" />
            <div className="mock-line line-md dim" />
          </div>
        </div>
        <div className="mock-row">
          <div className="mock-block w-28" />
          <div className="mock-block w-38" />
          <div className="mock-block flex-1" />
          <div className="mock-block w-48 accent-fire" />
        </div>
        <div className="mock-card-row">
          <div className="mock-card-sm" />
          <div className="mock-card-sm" />
          <div className="mock-card-sm" />
        </div>
      </div>
    )
  }

  if (variant === 'store') {
    return (
      <div className="mock-body">
        <div className="mock-card-row">
          <div className="mock-card-sm card-tall card-indigo" />
          <div className="mock-card-sm card-tall card-violet" />
        </div>
        <div className="mock-panel">
          <div className="mock-row">
            <div className="mock-block flex-1 soft-line" />
            <div className="mock-block w-42 accent-indigo" />
          </div>
        </div>
        <div className="mock-row">
          <div className="mock-block w-55" />
          <div className="mock-block flex-1" />
          <div className="mock-block w-38 accent-indigo-soft" />
        </div>
      </div>
    )
  }

  return (
    <div className="mock-body">
      <div className="mock-hero-img hero-blog">
        <div className="mock-line line-lg" />
      </div>
      <div className="mock-post-list">
        <div className="mock-post-item">
          <div className="mock-thumb thumb-a" />
          <div className="mock-post-lines">
            <div className="mock-block post-line-a" />
            <div className="mock-block post-line-b" />
          </div>
        </div>
        <div className="mock-post-item">
          <div className="mock-thumb thumb-b" />
          <div className="mock-post-lines">
            <div className="mock-block post-line-c" />
            <div className="mock-block post-line-d" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const slotRefs = useRef<(HTMLDivElement | null)[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const wrapper = wrapperRef.current
    const progressBar = progressRef.current
    if (!wrapper || !progressBar) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 1025px)', () => {
      const cards = cardRefs.current.filter((card): card is HTMLDivElement => card !== null)
      const slots = slotRefs.current.filter((slot): slot is HTMLDivElement => slot !== null)
      if (cards.length < 2 || slots.length < 2) return

      gsap.set(cards, { transformOrigin: 'top center' })
      gsap.set(progressBar, { scaleX: 0 })

      const stackTweens = cards
        .map((card, index) => {
          if (index === cards.length - 1) return null
          return gsap.to(card, {
            scale: 0.88,
            y: -28,
            autoAlpha: 0.38,
            ease: 'none',
            scrollTrigger: {
              trigger: slots[index + 1],
              start: 'top 82%',
              end: 'top 35%',
              scrub: true,
            },
          })
        })
        .filter((tween): tween is gsap.core.Tween => tween !== null)

      const progressTween = gsap.to(progressBar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      })

      return () => {
        stackTweens.forEach(tween => tween.kill())
        progressTween.kill()
        gsap.set(cards, { clearProps: 'transform,opacity,visibility' })
        gsap.set(progressBar, { clearProps: 'transform' })
      }
    })

    mm.add('(max-width: 1024px)', () => {
      const cards = cardRefs.current.filter((card): card is HTMLDivElement => card !== null)
      gsap.set(cards, { clearProps: 'transform,opacity,visibility' })
      gsap.set(progressBar, { scaleX: 1 })

      return () => {
        gsap.set(progressBar, { clearProps: 'transform' })
      }
    })

    return () => mm.revert()
  }, [])

  const totalProjects = String(projectData.length).padStart(2, '0')

  return (
    <section id="projects">
      <div className="container">
        <div className="proj-header">
          <div>
            <div className="label">Selected Work</div>
            <h2 className="section-h proj-title">
              Recent <em>Projects</em>
            </h2>
          </div>
          <div className="proj-count">{totalProjects} Projects</div>
        </div>
        <div className="proj-progress-wrap">
          <div className="proj-progress-bar" ref={progressRef} />
        </div>
      </div>

      <div className="stack-wrapper" ref={wrapperRef}>
        {projectData.map((project, index) => (
          <div
            className="stack-slot"
            key={project.id}
            ref={el => {
              slotRefs.current[index] = el
            }}
          >
            <div
              className={`proj-card tone-${project.theme}`}
              id={project.id}
              ref={el => {
                cardRefs.current[index] = el
              }}
            >
              <div className="pc-stripe" />
              <div className="pc-img">
                <div className="pc-img-bg">
                  <div className={`mock-browser mock-${project.preview}`}>
                    <div className="mock-bar">
                      <div className="mock-dot dot-red" />
                      <div className="mock-dot dot-yellow" />
                      <div className="mock-dot dot-green" />
                      <div className="mock-url" />
                    </div>
                    <MockPreview variant={project.preview} />
                  </div>
                </div>
                <div className="pc-year-badge">{project.year}</div>
              </div>
              <div className="pc-info">
                <div className="pc-num">Project {project.num} / {totalProjects}</div>
                <div className="pc-title">
                  {project.titleLines.map(line => (
                    <span className="pc-title-line" key={`${project.id}-${line}`}>
                      {line}
                    </span>
                  ))}
                </div>
                <div className="pc-desc">{project.desc}</div>
                <div className="pc-tags">
                  {project.tags.map(tag => (
                    <span className="pc-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pc-links">
                  <a href={project.liveUrl} className="pc-link-p">View Live →</a>
                  <a href={project.githubUrl} className="pc-link-g">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="stack-spacer" />
      </div>
    </section>
  )
}
