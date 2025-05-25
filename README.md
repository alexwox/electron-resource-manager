# Electron Starter App

A modern Electron application built with React, TypeScript, and Vite.

## Development

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm (comes with Node.js)

### Installation

```bash
# Install dependencies
npm install
```

### Development Workflow

The project uses a dual-process development setup:

- A Vite dev server for the React frontend
- An Electron process for the desktop application

To start development:

```bash
npm run dev
```

This command runs two processes in parallel:

- `dev:react`: Starts the Vite development server for the React frontend
- `dev:electron`: Compiles the Electron TypeScript code and launches the Electron app

### Available Scripts

- `npm run dev` - Start development environment (both React and Electron)
- `npm run dev:react` - Start only the React development server
- `npm run dev:electron` - Start only the Electron process
- `npm run build` - Build both React and Electron applications
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the built React application

### Building for Production

The project supports building for multiple platforms:

```bash
# For macOS (ARM64)
npm run dist:mac

# For Windows (x64)
npm run dist:win

# For Linux (x64)
npm run dist:linux
```

Each build command:

1. Transpiles the Electron TypeScript code
2. Builds the React application
3. Packages everything into a distributable using electron-builder

## Project Structure

- `src/electron/` - Electron main process code
- `src/ui/` - React frontend code
- `dist-electron/` - Compiled Electron code
- `dist-react/` - Built React application

## Technology Stack

- Electron - Desktop application framework
- React - Frontend library
- TypeScript - Type-safe JavaScript
- Vite - Frontend build tool and dev server
- ESLint - Code linting
