import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'


const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
