# API Reference

This document provides detailed information about the Black Hole Simulation's architecture, components, and APIs.

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [React Components](#react-components)
- [TypeScript Interfaces](#typescript-interfaces)
- [WebGL Shaders](#webgl-shaders)
- [Utility Functions](#utility-functions)
- [Configuration](#configuration)

---

## Architecture Overview

The Black Hole Simulation follows a modern React architecture with TypeScript for type safety and Three.js for WebGL rendering.

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│     App.tsx     │    │  Navigation     │    │ Mobile Panel    │
│   (State Mgmt)  │◄──►│     Bar         │◄──►│   Controls      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │
         ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ BlackHole       │    │   Three.js      │    │  WebGL Shaders  │
│ Simulation      │◄──►│    Scene        │◄──►│   (Physics)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## React Components

### App Component

**File:** `src/App.tsx`

Main application component that manages global state and coordinates all child components.

```typescript
interface AppState {
  accretion_disk: boolean;
  animate: boolean;
  speed: number;
  max_iterations: number;
}

export default function App(): JSX.Element
```

#### State Management

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `accretion_disk` | `boolean` | `true` | Show/hide accretion disk visualization |
| `animate` | `boolean` | `true` | Enable/disable camera auto-animation |
| `speed` | `number` | `0.1` | Animation speed (0.0-1.0) |
| `max_iterations` | `number` | `300` | Ray tracing iterations (50-2000) |

#### Methods

- `handleSettingChange(key: string, value: any)` - Update simulation settings
- `resetToDefaults()` - Reset all settings to default values

---

### BlackHoleSimulation Component

**File:** `src/components/BlackHoleSimulation.tsx`

Core physics simulation component that manages the Three.js scene and WebGL rendering.

```typescript
interface SimulationProps {
  settings: SimulationSettings;
}

export default function BlackHoleSimulation({ settings }: SimulationProps): JSX.Element
```

#### Props

| Prop | Type | Description |
|------|------|-------------|
| `settings` | `SimulationSettings` | Current simulation parameters |

#### Lifecycle Methods

- `useEffect(() => {...}, [])` - Initialize Three.js scene
- `useEffect(() => {...}, [settings])` - Update shader uniforms when settings change
- Cleanup function - Dispose of Three.js resources

#### Scene Objects

- **Camera**: Perspective camera with orbital controls
- **Scene**: Three.js scene container
- **Renderer**: WebGL renderer with custom shaders
- **Geometry**: Plane geometry for ray tracing canvas
- **Material**: Shader material with custom vertex/fragment shaders

---

### NavigationBar Component

**File:** `src/components/NavigationBar.tsx`

Desktop navigation interface with dropdown menus and real-time controls.

```typescript
interface NavigationProps {
  settings: SimulationSettings;
  onSettingChange: (key: keyof SimulationSettings, value: any) => void;
  onReset: () => void;
}

export default function NavigationBar(props: NavigationProps): JSX.Element
```

#### Features

- **Physics Controls**: Iteration count and animation speed sliders
- **Visual Controls**: Accretion disk and camera animation toggles
- **Help System**: Usage instructions and physics explanations
- **Responsive Design**: Hidden on mobile devices (<1200px)

---

### MobileControlPanel Component

**File:** `src/components/MobileControlPanel.tsx`

Mobile-optimized control interface with slide-out panel design.

```typescript
interface MobileControlProps {
  settings: SimulationSettings;
  onSettingChange: (key: keyof SimulationSettings, value: any) => void;
  onReset: () => void;
}

export default function MobileControlPanel(props: MobileControlProps): JSX.Element
```

#### Features

- **Touch-Friendly**: Large buttons and sliders optimized for touch
- **Slide-Out Panel**: Overlay panel that slides from the bottom
- **Gesture Support**: Tap outside to close, swipe interactions
- **Mobile Optimization**: Only visible on mobile devices (<1200px)

---

## TypeScript Interfaces

### SimulationSettings

**File:** `src/App.tsx`

Core interface defining simulation parameters.

```typescript
interface SimulationSettings {
  accretion_disk: boolean;    // Show accretion disk
  animate: boolean;          // Camera auto-animation
  speed: number;            // Animation speed (0.0-1.0)
  max_iterations: number;   // Ray tracing precision (50-2000)
}
```

#### Validation Rules

- `speed`: Must be between 0.0 and 1.0
- `max_iterations`: Must be between 50 and 2000
- `accretion_disk`: Boolean toggle
- `animate`: Boolean toggle

#### Default Values

```typescript
const DEFAULT_SETTINGS: SimulationSettings = {
  accretion_disk: true,
  animate: true,
  speed: 0.1,
  max_iterations: 300
};
```

---

## WebGL Shaders

### Vertex Shader

**File:** `src/shaders/canvasVertexShader.ts`

Simple pass-through vertex shader for full-screen quad rendering.

```glsl
attribute vec2 position;
varying vec2 vUv;

void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
}
```

#### Attributes

- `position`: Vertex position in normalized device coordinates

#### Varyings

- `vUv`: UV coordinates passed to fragment shader

---

### Fragment Shader

**File:** `src/shaders/canvasFragmentShader.ts`

Complex fragment shader implementing ray tracing and relativistic physics.

```glsl
uniform float u_time;
uniform float u_max_iterations;
uniform bool u_accretion_disk;
uniform float u_speed;
```

#### Uniforms

| Uniform | Type | Description |
|---------|------|-------------|
| `u_time` | `float` | Current time for animation |
| `u_max_iterations` | `float` | Maximum ray tracing steps |
| `u_accretion_disk` | `bool` | Enable accretion disk rendering |
| `u_speed` | `float` | Animation speed multiplier |

#### Physics Constants

```glsl
#define SPEED_OF_LIGHT 1.0          // c = 1 (natural units)
#define EVENT_HORIZON_RADIUS 1.0    // Schwarzschild radius
#define BACKGROUND_DISTANCE 10000.0  // Distance to stars
#define PROJECTION_DISTANCE 1.0     // Observer distance
```

#### Key Functions

- `integrate_ray_rk4()` - Runge-Kutta 4th order geodesic integration
- `accretion_disk_color()` - Calculate disk color with Doppler shift
- `background_color()` - Sample background star field
- `noise()` - Fractal noise generation

---

## Utility Functions

### Mathematical Utilities

**File:** `src/utils/math.ts`

Mathematical helper functions for physics calculations.

```typescript
// Vector operations
export function vec3Add(a: [number, number, number], b: [number, number, number]): [number, number, number]
export function vec3Scale(v: [number, number, number], s: number): [number, number, number]
export function vec3Normalize(v: [number, number, number]): [number, number, number]
export function vec3Length(v: [number, number, number]): number
export function vec3Dot(a: [number, number, number], b: [number, number, number]): number

// Physics calculations
export function schwarzschildRadius(mass: number): number
export function gravitationalRedshift(radius: number, mass: number): number
export function orbitalVelocity(radius: number, mass: number): number
```

#### Vector Operations

Standard 3D vector mathematics for physics calculations.

#### Physics Functions

- **Schwarzschild Radius**: `rs = 2GM/c²`
- **Gravitational Redshift**: `z = 1/√(1 - rs/r) - 1`
- **Orbital Velocity**: `v = √(GM/r)`

---

## Configuration

### Build Configuration

**File:** `vite.config.ts`

Vite build configuration for development and production.

```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          three: ['three']
        }
      }
    }
  }
});
```

#### Development Server

- **Host**: `0.0.0.0` (accessible on network)
- **Port**: `5173` (Vite default)
- **Hot Reload**: Enabled for React components

#### Production Build

- **Output**: `dist/` directory
- **Source Maps**: Enabled for debugging
- **Code Splitting**: Vendor and Three.js chunks separated

### TypeScript Configuration

**File:** `tsconfig.json`

TypeScript compiler configuration.

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

#### Key Settings

- **Strict Mode**: Full TypeScript strict checking
- **Modern Target**: ES2020 for modern browser features
- **React JSX**: New JSX transform
- **Module Resolution**: Bundler mode for Vite

### ESLint Configuration

**File:** `eslint.config.js`

ESLint configuration for code quality.

```javascript
export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 'off'
    }
  }
];
```

---

## Performance Considerations

### GPU Optimization

- **Ray Tracing Iterations**: Adaptive based on device capability
- **Shader Complexity**: Optimized for mobile GPUs
- **Texture Usage**: Minimal texture operations for performance

### Memory Management

- **Three.js Resources**: Proper disposal in cleanup functions
- **Event Listeners**: Removed on component unmount
- **State Updates**: Batched to minimize re-renders

### Mobile Optimization

- **Parameter Ranges**: Lower defaults for mobile devices
- **Touch Events**: Optimized for touch interaction
- **Layout**: Responsive design with mobile-first approach

---

## Browser Compatibility

### Minimum Requirements

- **WebGL 2.0**: Required for advanced shader features
- **ES2020**: Modern JavaScript features
- **CSS Grid**: For responsive layout
- **Touch Events**: For mobile interaction

### Tested Browsers

- Chrome 90+ ✅
- Firefox 88+ ✅
- Safari 14+ ✅
- Edge 90+ ✅
- Mobile Safari 14+ ✅
- Chrome Mobile 90+ ✅

---

## Error Handling

### Shader Compilation Errors

The application includes comprehensive error handling for shader compilation failures:

```typescript
if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
  const error = gl.getShaderInfoLog(shader);
  console.error('Shader compilation error:', error);
  // Fallback rendering or user notification
}
```

### WebGL Context Loss

Handles WebGL context loss and restoration:

```typescript
canvas.addEventListener('webglcontextlost', (event) => {
  event.preventDefault();
  // Stop rendering loop
});

canvas.addEventListener('webglcontextrestored', () => {
  // Recreate WebGL resources
});
```

### Device Compatibility

Graceful fallbacks for unsupported features:

```typescript
if (!gl.getExtension('EXT_color_buffer_float')) {
  // Use lower precision fallback
}
```

---

*This API reference is automatically updated with each release. For the most current information, see the source code documentation.*
