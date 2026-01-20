import Logo from './Logo'
import './Header.css'

function Header({ state, installation, location }) {
  return (
    <header className="header">
      <div className="header__left">
        <Logo state={state} />
      </div>

      <div className="header__right" aria-label="Installation location">
        <div className="header__title">{installation?.title}</div>
        {location && <div className="header__location">{location}</div>}
        <div className="header__subtitle">{installation?.subtitle}</div>
      </div>
    </header>
  )
}

export default Header

