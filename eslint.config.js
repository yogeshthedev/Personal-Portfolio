import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'

export default defineConfig([
  ...nextVitals,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'dist/**']),
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
