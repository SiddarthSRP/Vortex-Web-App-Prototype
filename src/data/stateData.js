export const getStateData = (state) => {
  const stateConfigs = {
    active: {
      label: 'ACTIVE',
      message: 'Purification Optimized',
      installation: {
        title: 'Executive Suite',
        subtitle: '22 Grosvenor Sq • London W1',
      },
      metrics: {
        dataPulse: 'Stable',
        outdoorAQI: { value: 12, descriptor: 'Pure' },
        vledIntensity: 85,
        uptime: { days: 14, hours: 6 },
        location: 'Executive Office · Floor 18'
      }
    },
    moderate: {
      label: 'MODERATE',
      message: 'Service Window Recommended',
      installation: {
        title: 'Executive Suite',
        subtitle: '22 Grosvenor Sq • London W1',
      },
      metrics: {
        dataPulse: 'Attenuated',
        outdoorAQI: { value: 48, descriptor: 'Moderate' },
        vledIntensity: 65,
        uptime: { days: 14, hours: 6 },
        location: 'Executive Office · Floor 18'
      }
    },
    critical: {
      label: 'CRITICAL',
      message: 'Immediate Attention Required',
      installation: {
        title: 'Executive Suite',
        subtitle: '22 Grosvenor Sq • London W1',
      },
      metrics: {
        dataPulse: 'Interrupted',
        outdoorAQI: { value: 67, descriptor: 'Elevated' },
        vledIntensity: 95,
        uptime: { days: 0, hours: 0 },
        location: 'Executive Office · Floor 18'
      }
    }
  }

  return stateConfigs[state] || stateConfigs.active
}
