import React from 'react'

import { ThemeProvider } from 'figdog-theme/src/components/context/ThemeContext'

// highlight-start
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
// highlight-end
