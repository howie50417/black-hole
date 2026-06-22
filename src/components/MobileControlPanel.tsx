import React, { useState } from 'react';
import './MobileControlPanel.css';

interface SimulationSettings {
  accretion_disk: boolean;
  animate: boolean;
  speed: number;
  max_iterations: number;
}

interface MobileControlPanelProps {
  settings: SimulationSettings;
  onSettingsChange: (key: keyof SimulationSettings, value: SimulationSettings[keyof SimulationSettings]) => void;
  onRestart: () => void;
  onTogglePause: () => void;
  isPaused: boolean;
}

const MobileControlPanel: React.FC<MobileControlPanelProps> = ({
  settings,
  onSettingsChange,
  onRestart,
  onTogglePause,
  isPaused
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const togglePanel = () => {
    setIsVisible(!isVisible);
  };

  const handleSliderChange = (key: keyof SimulationSettings, value: number) => {
    onSettingsChange(key, value);
  };

  return (
    <>
      <button className="menu-button" onClick={togglePanel}>
        ☰ Controls
      </button>

      <div className={`control-panel ${isVisible ? 'visible' : 'hidden'}`}>
        <button className="close-button" onClick={togglePanel}>
          ✕
        </button>

        <h2>Black Hole Simulation</h2>

        {/* Main Controls Section */}
        <div className="section">
          <h3>Controls</h3>
          <div className="control-group">
            <button
              onClick={onTogglePause}
              className={isPaused ? 'play-button' : 'pause-button'}
            >
              {isPaused ? '▶ Play' : '⏸ Pause'}
            </button>
            <button onClick={onRestart} className="restart-button">
              🔄 Restart
            </button>
          </div>
        </div>

        {/* Physics Section */}
        <div className="section">
          <h3>Physics</h3>
          <div className="control-group">
            <label>Max Iterations: {settings.max_iterations}</label>
            <input
              type="range"
              min="50"
              max="2000"
              step="50"
              value={settings.max_iterations}
              onChange={(e) => handleSliderChange('max_iterations', parseInt(e.target.value))}
            />
          </div>
          <div className="control-group">
            <label>Animation Speed: {settings.speed.toFixed(3)}</label>
            <input
              type="range"
              min="0.001"
              max="1"
              step="0.001"
              value={settings.speed}
              onChange={(e) => handleSliderChange('speed', parseFloat(e.target.value))}
            />
          </div>
        </div>

        {/* Visuals Section */}
        <div className="section">
          <h3>Visuals</h3>
          <div className="control-group">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={settings.accretion_disk}
                onChange={(e) => onSettingsChange('accretion_disk', e.target.checked)}
              />
              <span>Show Accretion Disk</span>
            </label>
          </div>
          <div className="control-group">
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={settings.animate}
                onChange={(e) => onSettingsChange('animate', e.target.checked)}
              />
              <span>Auto-animate Camera</span>
            </label>
          </div>
        </div>

        {/* Help Section */}
        <div className="section">
          <h3>Help</h3>
          <div className="help-content">
            <p>
              <strong>Controls:</strong><br />
              • Mouse wheel to zoom in/out<br />
              • Adjust physics parameters in real-time<br />
              • Toggle accretion disk visualization<br />
              • Auto-animate for dynamic camera movement
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileControlPanel;
