import './StateControl.css'

function StateControl({ currentState, onStateChange }) {
  const states = ['active', 'moderate', 'critical']

  return (
    <div className={`state-control state-control--${currentState}`}>
      {states.map((state) => {
        const isActive = currentState === state
        const activeClass = isActive ? `state-control__button--active state-control__button--active-${state}` : ''
        const classes = ['state-control__button', activeClass, `state-control__button--${state}`]
          .filter(Boolean)
          .join(' ')
        return (
          <button
            key={state}
            className={classes}
            onClick={() => onStateChange(state)}
          >
            {state.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}

export default StateControl
