import { useState } from 'react'
import TriangleVisualization from './components/TriangleVisualization'
import StateMessaging from './components/StateMessaging'
import EnvironmentalMetrics from './components/EnvironmentalMetrics'
import SecureCloudSyncBar from './components/SecureCloudSyncBar'
import StateControl from './components/StateControl'
import ContactServicesButton from './components/ContactServicesButton'
import Header from './components/Header'
import { getStateData } from './data/stateData'
import './App.css'

function App() {
  const [currentState, setCurrentState] = useState('active')
  const stateData = getStateData(currentState)

  return (
    <div className={`app app--${currentState}`}>
      <div className="app__container">
        <Header
          state={currentState}
          installation={stateData.installation}
          location={stateData.metrics.location}
        />
        <TriangleVisualization state={currentState} />
        <StateMessaging state={currentState} />
        <EnvironmentalMetrics data={stateData.metrics} state={currentState} />
        <ContactServicesButton state={currentState} visible={currentState !== 'active'} />
        <StateControl currentState={currentState} onStateChange={setCurrentState} />
        <SecureCloudSyncBar state={currentState} />
      </div>
    </div>
  )
}

export default App
