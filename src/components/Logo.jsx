import './Logo.css'

function Logo({ state = 'active' }) {
  return (
    <div className={`logo logo--${state}`}>
      <span className="logo__text">VORTEX</span>
      <span className="logo__subtext">BIOTECH</span>
    </div>
  )
}

export default Logo
