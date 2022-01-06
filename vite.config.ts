import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteAliases } from 'vite-aliases'
import EnvironmentPlugin from 'vite-plugin-environment'

import ENV from './ENV'

export default defineConfig({
  plugins: [react(), ViteAliases(), EnvironmentPlugin(ENV)],
})
