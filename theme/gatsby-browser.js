import React from 'react'
import { ThemeProvider } from 'figdog-theme/src/components/context/ThemeContext'
import { Helmet } from "react-helmet"

// highlight-start
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
// highlight-end


export const onInitialClientRender = () => {

}