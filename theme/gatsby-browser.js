import React from 'react'
import { ThemeProvider } from 'figdog-theme/src/components/context/ThemeContext'
import { Helmet } from "react-helmet"
import Script from 'react-load-script'

// highlight-start
export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
// highlight-end

// exports.onInitialClientRender = () => {
//   console.log("ReactDOM.render has executed")
// }