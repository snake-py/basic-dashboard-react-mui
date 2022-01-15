import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteAliases } from 'vite-aliases';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [
    react(),
    ViteAliases(),
    EnvironmentPlugin(
      {
        API_GATEWAY_URL: undefined,
        STATE: undefined,
      },
      { loadEnvFiles: true }
    ),
  ],
});
