# Vortex Biotech - Environmental Air Quality Health Demo

A premium, executive-style single-page web application that visualizes environmental air quality health. Built with React and Vite.

## Features

- **Three Environmental Health States**: Active (Teal/Green), Moderate (Amber/Yellow), Critical (Red/Crimson)
- **Central Triangle Visualization**: Animated geometric triangle with glow effects, orbiting rings, and radar sweep
- **State-Based Transitions**: Smooth color and animation transitions between states
- **Environmental Metrics**: Data Pulse, Outdoor AQI, VLED Intensity, Uptime, and Installation Location
- **Pulse Tracker**: Animated environmental activity indicator
- **Responsive Design**: Fits viewport on desktop and mobile with no scrolling
- **Executive Aesthetic**: Dark, atmospheric design suitable for premium installations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

- Use the bottom control buttons to switch between **ACTIVE**, **MODERATE**, and **CRITICAL** states
- Each state displays different environmental metrics and visual styling
- All animations and transitions are smooth and subtle
- The application is designed to fit within the viewport with no scrolling required

## Project Structure

```
src/
  ├── components/          # React components
  │   ├── Logo.jsx
  │   ├── TriangleVisualization.jsx
  │   ├── StateMessaging.jsx
  │   ├── EnvironmentalMetrics.jsx
  │   ├── PulseTracker.jsx
  │   └── StateControl.jsx
  ├── data/
  │   └── stateData.js     # State configuration and dummy data
  ├── App.jsx              # Main application component
  ├── main.jsx             # Application entry point
  └── index.css            # Global styles
```

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **CSS3** - Styling with animations and transitions

## Notes

- This is a frontend-only demo application
- All data is dummy data (backend integration ready)
- No authentication or persistence required
- Designed for executive and commercial installations
