import { useState } from 'react'
import './App.css'
import BlackHoleSimulation, { SimulationSettings } from './components/BlackHoleSimulation'
import GitHubLink from './components/GitHubLink'
import MobileControlPanel from './components/MobileControlPanel'
import NavigationBar from './components/NavigationBar'

function App() {
  const [settings, setSettings] = useState<SimulationSettings>({
    accretion_disk: false,
    animate: true,
    speed: 0.01,
    max_iterations: 400,
  });

  const [isPaused, setIsPaused] = useState(false);

  const handleSettingsChange = (key: keyof SimulationSettings, value: SimulationSettings[keyof SimulationSettings]) => {
    setSettings((prev: SimulationSettings) => ({
      ...prev,
      [key]: value
    }));
  };

  const handleRestart = () => {
    setSettings({
      accretion_disk: false,
      animate: true,
      speed: 0.01,
      max_iterations: 400,
    });
    setIsPaused(false);
  };

  const handleTogglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="App">
      <NavigationBar
        settings={settings}
        onSettingsChange={handleSettingsChange}
        onRestart={handleRestart}
        onTogglePause={handleTogglePause}
        isPaused={isPaused}
      />
      <MobileControlPanel
        settings={settings}
        onSettingsChange={handleSettingsChange}
        onRestart={handleRestart}
        onTogglePause={handleTogglePause}
        isPaused={isPaused}
      />
      <BlackHoleSimulation 
        settings={settings}
        onSettingsChange={handleSettingsChange}
        isPaused={isPaused}
      />
      <GitHubLink />
    </div>
  )
}

export default App
