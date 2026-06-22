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

console.log('Build pipeline completed successfully!');
