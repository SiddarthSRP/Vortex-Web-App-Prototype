import './ContactServicesButton.css'

function ContactServicesButton({ state, visible }) {
  const label = state === 'critical' ? 'Contact Services – Priority' : 'Contact Services'
  const stateClass = visible ? 'contact-services--visible' : 'contact-services--hidden'

  return (
    <div className={`contact-services ${stateClass}`}>
      <button className={`contact-btn contact-btn--${state}`} type="button" aria-hidden={!visible}>
        {label}
      </button>
    </div>
  )
}

export default ContactServicesButton

