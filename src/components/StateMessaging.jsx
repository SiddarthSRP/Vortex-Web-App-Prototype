import { getStateData } from '../data/stateData'
import './StateMessaging.css'

function StateMessaging({ state }) {
  const stateData = getStateData(state)

  return (
    <div className={`state-messaging state-messaging--${state}`}>
      <div className="state-messaging__label">{stateData.label}</div>
      <div className="state-messaging__message">{stateData.message}</div>
    </div>
  )
}

export default StateMessaging
