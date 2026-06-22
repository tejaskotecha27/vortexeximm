const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting VortexExim build pipeline...');

// 1. Install frontend dependencies
console.log('Installing frontend dependencies...');
execSync('npm install', { cwd: path.join(__dirname, 'frontend'), stdio: 'inherit' });

// 2. Install backend dependencies
console.log('Installing backend dependencies...');
execSync('npm install', { cwd: path.join(__dirname, 'backend'), stdio: 'inherit' });

// 3. Build the frontend
console.log('Compiling frontend with Vite...');
execSync('npm run build', { cwd: path.join(__dirname, 'frontend'), stdio: 'inherit' });

// 4. Clean root dist directory
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  console.log('Cleaning old root dist directory...');
  fs.rmSync(distPath, { recursive: true, force: true });
}

// 5. Copy frontend/dist to root dist
console.log('Copying build output to root dist directory...');
fs.cpSync(path.join(__dirname, 'frontend', 'dist'), distPath, { recursive: true });

console.log('Build pipeline completed successfully!');
