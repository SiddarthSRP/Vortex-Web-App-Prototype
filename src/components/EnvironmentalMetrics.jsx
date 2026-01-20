import './EnvironmentalMetrics.css'

function EnvironmentalMetrics({ data, state }) {
  return (
    <div className={`environmental-metrics environmental-metrics--${state}`}>
      <MetricCard
        label="Data Pulse"
        value={data.dataPulse}
        state={state}
      />
      <MetricCard
        label="Outdoor AQI"
        value={`${data.outdoorAQI.value} – ${data.outdoorAQI.descriptor}`}
        state={state}
      />
      <MetricCard
        label="VLED Intensity"
        value={`${data.vledIntensity}%`}
        state={state}
      />
      <MetricCard
        label="Uptime"
        value={`${data.uptime.days}d ${data.uptime.hours}h`}
        state={state}
      />
    </div>
  )
}

function MetricCard({ label, value, state }) {
  return (
    <div className={`metric-card metric-card--${state}`}>
      <div className="metric-card__label">{label}</div>
      <div className="metric-card__value">{value}</div>
    </div>
  )
}

export default EnvironmentalMetrics
