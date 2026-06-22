<div align="center">

# 🌌 Black Hole Simulation

### Interactive Real-Time Physics Simulation with WebGL

_Explore the mysteries of spacetime through cutting-edge visualization_

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?logo=three.js&logoColor=white)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![WebGL](https://img.shields.io/badge/WebGL-990000?logo=webgl&logoColor=white)](https://www.khronos.org/webgl/)

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()

[![Medium](https://img.shields.io/badge/Medium-000000?logo=medium&logoColor=white)](https://medium.com/@christianmatabaro92/building-a-real-time-black-hole-simulation-physics-webgl-typescript-and-react-b8675322cde2)

[🚀 Live Demo](https://black-hole-simulation-by-chris-mat.vercel.app/) • [📖 Documentation](#-table-of-contents) • [🐛 Report Bug](https://github.com/chrismatgit/black-hole-simulation/issues) • [✨ Request Feature](https://github.com/chrismatgit/black-hole-simulation/issues) • [📝 Article on Medium](https://medium.com/@christianmatabaro92/building-a-real-time-black-hole-simulation-physics-webgl-typescript-and-react-b8675322cde2)

![Black Hole Simulation](/screenshot/image.png)

</div>

---

## 📋 Table of Contents

- [🌟 Features](#-features)
- [🔬 Physics Implementation](#-physics-implementation)
- [🛠️ Technologies](#️-technologies)
- [🚀 Quick Start](#-quick-start)
- [📱 Usage](#-usage)
- [🏗️ Project Structure](#️-project-structure)
- [⚙️ Configuration](#️-configuration)
- [🎯 Controls](#-controls)
- [📐 Physics Parameters](#-physics-parameters)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---

## 🌟 Features

A physics-based black hole simulation built with React, TypeScript, Three.js, and WebGL shaders, showcasing relativistic effects including gravitational lensing and accretion disk dynamics. Here are the live demo links hosted on [GitHub pages](https://chrismatgit.github.io/black-hole-simulation/) and [Vercel](https://black-hole-simulation-by-chris-mat.vercel.app/). Please read my [Medium](https://medium.com/@christianmatabaro92/building-a-real-time-black-hole-simulation-physics-webgl-typescript-and-react-b8675322cde2) article for further explanation.

### ✨ Core Features

- 🌀 **Real-time gravitational lensing** - Watch light bend around massive objects
- 💫 **Interactive accretion disk** - Visualize matter spiraling into the black hole
- 🎮 **Responsive controls** - Desktop navigation bar and mobile-friendly interface
- 🔄 **Real-time physics** - GPU-accelerated calculations for smooth performance
- 📱 **Cross-platform** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Stunning visuals** - Realistic rendering with custom WebGL shaders

### 🚀 Technical Highlights

- **GPU-Accelerated Physics** - Utilizing WebGL fragment shaders for real-time calculations
- **Responsive Design** - Adaptive UI that works across all screen sizes
- **Modern Architecture** - Built with React 18, TypeScript, and Vite
- **Educational Focus** - Perfect for physics students and space enthusiasts

---

## 🔬 Physics Implementation

Our simulation implements cutting-edge astrophysics concepts with mathematical precision:

### 🌌 Relativistic Effects

- **Schwarzschild Metric** - Proper spacetime curvature around a black hole
- **Geodesic Integration** - Runge-Kutta 4th order integration for accurate light path calculations
- **Gravitational Lensing** - Light bending effects around massive objects
- **Event Horizon** - Proper black hole boundary visualization with Schwarzschild radius

### ⚛️ Advanced Physics

- **Doppler Shift** - Relativistic frequency shifts in the accretion disk
- **Gravitational Redshift** - Energy loss of light escaping gravitational wells
- **Angular Momentum Conservation** - Realistic orbital mechanics
- **Fractal Noise Generation** - Procedural accretion disk structure

---

## 🛠️ Technologies

<div align="center">

| Frontend                                                                       | Physics & Graphics                                                              | Development                                                                         | Deployment                                                               |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| ![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)          | ![Three.js](https://img.shields.io/badge/Three.js-0.176.0-000000?logo=three.js) | ![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?logo=typescript) | ![Vite](https://img.shields.io/badge/Vite-6.3.3-646CFF?logo=vite)        |
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) | ![WebGL](https://img.shields.io/badge/WebGL-2.0-990000?logo=webgl)              | ![ESLint](https://img.shields.io/badge/ESLint-8.55.0-4B32C3?logo=eslint)            | ![Node.js](https://img.shields.io/badge/Node.js-20+-339933?logo=node.js) |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)    | ![GLSL](https://img.shields.io/badge/GLSL-Shaders-orange)                       | ![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white)            | ![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github)        |

</div>

### 🏗️ Architecture

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Full type safety and enhanced developer experience
- **Three.js** - 3D graphics engine and WebGL abstraction
- **Custom GLSL Shaders** - GPU-accelerated physics calculations
- **Vite** - Lightning-fast build tool and development server
- **Responsive CSS** - Mobile-first design with breakpoints

---

## 🚀 Quick Start

### 📋 Prerequisites

Ensure you have the following installed:

- **Node.js** `>=18.0.0` ([Download here](https://nodejs.org/))
- **npm** `>=8.0.0` (comes with Node.js)
- **Modern browser** with WebGL 2.0 support

### 💻 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/chrismatgit/black-hole-simulation.git
   cd black-hole-simulation
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

### 🏗️ Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### 🐳 Docker Support (Optional)

```bash
# Build Docker image
docker build -t black-hole-simulation .

# Run container
docker run -p 5173:80 black-hole-simulation
```

---

## 📱 Usage

### 🖥️ Desktop Experience

- **Navigation Bar** - Full-featured controls with dropdown menus
- **Real-time Sliders** - Adjust physics parameters instantly
- **Keyboard Shortcuts** - Quick access to common functions
- **Mouse Interaction** - Zoom with scroll wheel

### 📱 Mobile Experience

- **Slide-out Panel** - Touch-friendly control interface
- **Gesture Support** - Pinch to zoom, tap to control
- **Optimized Layout** - Responsive design for all screen sizes

### 🎮 Interactive Features

- **Play/Pause Simulation** - Control time flow
- **Adjust Physics Parameters** - Real-time parameter modification
- **Toggle Accretion Disk** - Show/hide matter visualization
- **Camera Animation** - Automated cinematic views
- **Reset to Defaults** - Quick restoration of initial settings

---

## 🏗️ Project Structure

```
black-hole-simulation/
├── 📁 src/
│   ├── 📁 components/           # React components
│   │   ├── BlackHoleSimulation.tsx    # Main simulation engine
│   │   ├── NavigationBar.tsx          # Desktop navigation
│   │   ├── MobileControlPanel.tsx     # Mobile interface
│   │   └── GitHubLink.tsx             # Attribution component
│   ├── 📁 shaders/              # WebGL shaders
│   │   ├── canvasVertexShader.ts      # Vertex transformations
│   │   └── canvasFragmentShader.ts    # Physics calculations
│   ├── 📁 utils/                # Utility functions
│   │   └── math.ts                    # Mathematical helpers
│   ├── 📄 App.tsx               # Root application component
│   ├── 📄 main.tsx              # React entry point
│   └── 🎨 *.css                # Styling files
├── 📁 public/                   # Static assets
│   └── 🖼️ *.jpg                # Background textures
├── 📁 dist/                     # Production build output
├── 📄 package.json              # Dependencies and scripts
├── 📄 vite.config.ts           # Vite configuration
├── 📄 tsconfig.json            # TypeScript configuration
└── 📄 README.md                # This file
```

### 🔧 Key Components

| Component             | Purpose              | Features                                   |
| --------------------- | -------------------- | ------------------------------------------ |
| `BlackHoleSimulation` | Core physics engine  | WebGL rendering, Three.js scene management |
| `NavigationBar`       | Desktop controls     | Dropdown menus, real-time sliders          |
| `MobileControlPanel`  | Mobile interface     | Touch-friendly slide-out panel             |
| `Fragment Shader`     | Physics calculations | GPU-accelerated ray tracing                |

---

## ⚙️ Configuration

### 🎛️ Physics Parameters

Customize the simulation by modifying these constants in the fragment shader:

```glsl
// Core physics constants
#define SPEED_OF_LIGHT 1.0          // Normalized light speed
#define EVENT_HORIZON_RADIUS 1.0    // Schwarzschild radius
#define BACKGROUND_DISTANCE 10000.0 // Distance to background stars
#define PROJECTION_DISTANCE 1.0     // Camera projection distance

// Accretion disk parameters
float innerDiskRadius = 2.0;        // Inner disk boundary
float outerDiskRadius = 8.0;        // Outer disk boundary
float disk_flow = 10.0;             // Orbital flow rate
```

### 🎨 Visual Settings

Adjust visual quality and performance:

```typescript
interface SimulationSettings {
  accretion_disk: boolean; // Show/hide accretion disk
  animate: boolean; // Enable camera animation
  speed: number; // Animation speed (0-1)
  max_iterations: number; // Ray tracing precision (50-2000)
}
```

### 📱 Responsive Breakpoints

```css
/* Desktop navigation */
@media (min-width: 1200px) {
  ...;
}

/* Tablet and mobile */
@media (max-width: 1199px) {
  ...;
}
```

---

## 🎯 Controls

### 🖱️ Mouse & Keyboard

| Action    | Control     | Description                   |
| --------- | ----------- | ----------------------------- |
| **Zoom**  | Mouse Wheel | Zoom in/out of the simulation |
| **Pause** | Spacebar    | Toggle simulation pause/play  |
| **Reset** | R Key       | Reset to default parameters   |

### 🎛️ Interface Controls

#### Desktop Navigation Bar

- **⚛️ Physics** - Adjust simulation parameters
  - Max Iterations (50-2000) - Ray tracing precision
  - Animation Speed (0-1) - Camera movement speed
- **🎨 Visuals** - Control visual elements
  - Accretion Disk toggle - Show/hide disk visualization
  - Auto-animate Camera - Enable cinematic movement
- **❓ Help** - Usage instructions and tips

#### Mobile Control Panel

- **🎮 Controls** - Play/Pause/Restart buttons
- **⚙️ Settings** - Same parameters as desktop in touch-friendly format
- **📱 Responsive** - Optimized for touch interaction

---

## 📐 Physics Parameters

### 🔢 Core Constants

The simulation implements real physics with these carefully chosen parameters:

```glsl
// Fundamental Constants (Normalized Units)
#define SPEED_OF_LIGHT 1.0          // c = 1 (natural units)
#define EVENT_HORIZON_RADIUS 1.0    // rs = 2GM/c²
#define BACKGROUND_DISTANCE 10000.0 // Distance to celestial sphere
#define PROJECTION_DISTANCE 1.0     // Observer screen distance

// Accretion Disk Parameters
float innerRadius = 2.0;            // Inner stable circular orbit (3rs)
float outerRadius = 8.0;            // Outer disk boundary
float angularVelocity = 10.0;       // Orbital flow rate
```

### 🎛️ Adjustable Parameters

| Parameter           | Range   | Description           | Physics Impact                 |
| ------------------- | ------- | --------------------- | ------------------------------ |
| **Max Iterations**  | 50-2000 | Ray tracing precision | Higher = more accurate lensing |
| **Animation Speed** | 0.0-1.0 | Camera orbit rate     | Cinematic effect control       |
| **Accretion Disk**  | On/Off  | Matter visualization  | Shows infalling material       |

### ⚡ Performance Optimization

- **Low Settings (Mobile)**: 50-200 iterations, disk off
- **Medium Settings (Desktop)**: 200-800 iterations, disk on
- **High Settings (High-end)**: 800-2000 iterations, all effects

---

## 🤝 Contributing

We welcome contributions from the physics and programming community! Whether you're fixing bugs, adding features, or improving documentation, your help is appreciated.

### 🚀 How to Contribute

1. **🍴 Fork the repository**

   ```bash
   git clone https://github.com/chrismatgit/black-hole-simulation.git
   cd black-hole-simulation
   ```

2. **🌟 Create a feature branch**

   ```bash
   git checkout -b feature/amazing-new-feature
   ```

3. **✨ Make your changes**

   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed

4. **🧪 Test your changes**

   ```bash
   npm run lint      # Check code quality
   npm run build     # Ensure production build works
   npm run preview   # Test production build
   ```

5. **📝 Commit and push**

   ```bash
   git add .
   git commit -m "✨ Add amazing new feature"
   git push origin feature/amazing-new-feature
   ```

6. **🎯 Create a Pull Request**
   - Use clear, descriptive titles
   - Explain the changes and their purpose
   - Reference any related issues

### 🐛 Bug Reports

Found a bug? Please create an issue with:

- **Clear description** of the problem
- **Steps to reproduce** the issue
- **Expected vs actual** behavior
- **Browser/device** information
- **Screenshots** if applicable

### 💡 Feature Requests

Have an idea? We'd love to hear it! Please include:

- **Use case** - Why is this feature needed?
- **Description** - What should it do?
- **Implementation ideas** - Any technical thoughts?

### 🏆 Recognition

Contributors will be added to our [Contributors](#-acknowledgments) section. Significant contributions may be highlighted in release notes.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Chris Matabaro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👏 Acknowledgments

### 🌟 Original Work

- [**Chris Matabaro**](https://www.linkedin.com/in/chris-matabaro/) - Original black hole simulation implementation
- **Three.js Community** - 3D graphics framework and ecosystem
- **WebGL Specification** - Graphics API standards

### 🔬 Scientific References

- **Karl Schwarzschild** - Schwarzschild metric and black hole geometry
- **Einstein's General Relativity** - Theoretical foundation for spacetime curvature
- **Chandrasekhar** - Black hole physics and accretion disk theory
- **NASA/ESA** - Reference imagery and astrophysical data

### 🛠️ Technical Stack

- **React Team** - Modern UI framework
- **TypeScript Team** - Type-safe JavaScript development
- **Vite Team** - Fast build tool and development server
- **ESLint Team** - Code quality and consistency

### 🎨 Assets & Resources

- **Space Background Textures** - NASA/ESA public domain imagery
- **Mathematical Formulations** - Open physics literature
- **Shader Techniques** - WebGL and OpenGL communities

### 🤝 Community

Special thanks to:

- Physics simulation enthusiasts who provided feedback
- Open source contributors who suggest improvements
- Educational institutions using this for physics demonstrations
- The broader scientific computing community

---

<div align="center">

### ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=chrismatgit/black-hole-simulation&type=Date)](https://star-history.com/#chrismatgit/black-hole-simulation&Date)

---

**Made with ❤️ for physics education and space exploration**

_"The most beautiful thing we can experience is the mysterious." - Albert Einstein_

[🔝 Back to Top](#-black-hole-simulation)

</div>
