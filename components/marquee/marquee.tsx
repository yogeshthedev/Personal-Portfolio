const items = ['Frontend Dev', 'Backend Eng', 'REST APIs', 'React', 'Node.js', 'MongoDB', 'SCSS', 'Architecture', 'Full-Stack', 'JavaScript', 'Express.js']

export default function Marquee() {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-bar">
      <div className="marquee-track">
        {doubled.map((t, i) => (
          <span className="mq-item" key={i}>{t}</span>
        ))}
      </div>
    </div>
  )
}
