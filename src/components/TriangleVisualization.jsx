import './TriangleVisualization.css'

function TriangleVisualization({ state }) {
  return (
    <div className={`triangle-container triangle-container--${state}`}>
      <div className="triangle-aura" />
      <div className="triangle-halo"></div>
      <div className="orbit-ring orbit-ring--1"></div>
      <div className="orbit-ring orbit-ring--2"></div>
      <div className="orbit-ring orbit-ring--3"></div>
      <div className={`triangle triangle--${state}`}>
        <div className="triangle__inner"></div>
        <div className="triangle__pulse"></div>
      </div>
      <div className="radar-sweep"></div>
    </div>
  )
}

export default TriangleVisualization
