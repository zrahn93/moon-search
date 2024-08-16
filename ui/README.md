# Moon Search

## Installation
```
npm init vite moon-search
cd moon search
npm install
npm install --save cesium resium
npm install --save-dev vite-plugin-cesium
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/material @mui/styled-engine-sc styled-components
npm install @fontsource/roboto
npm install @mui/icons-material
```

Edit `vite.config.js`
```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cesium from 'vite-plugin-cesium';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cesium()]
})
```
