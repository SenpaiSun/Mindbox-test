import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css'
import App from './App.tsx'
import { DEFAULT_THEME, MantineProvider } from '@mantine/core'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme='dark' theme={DEFAULT_THEME}>
      <App />
    </MantineProvider>
  </StrictMode>
)
