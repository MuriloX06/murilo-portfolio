import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import NextNProgress from 'nextjs-progressbar'
import { lighten } from 'polished'


const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
       <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="favicon.png" type="image/png" />
        <meta name="description" content="Um simples projeto para o meu Portfólio." />
        <title>Portfólio | Murilo</title>
      </Head>

      <Analytics />
      <GlobalStyle />
      <NextNProgress
        color={lighten(0.2, theme.primary)}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
