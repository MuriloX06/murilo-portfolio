import React from 'react'
import { Analytics } from '@vercel/analytics/react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import NextNProgress from 'nextjs-progressbar'
import { lighten } from 'polished'
import { ShortcutHandler } from '../Components/ShortcutHandler/ShortcurHandler'


const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const salvar = () => {
    alert('"Ctrl + s" pressionados com sucesso!')
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="favicon.png" type="image/png" />
        <meta name="description" content="Um simples projeto para o meu Portfólio." />
        <title>Portfólio | Murilo</title>
      </Head>

      <ShortcutHandler keyCode={83} action={salvar} ctrlKey />
      <Analytics />
      <GlobalStyle />
      <NextNProgress
        options={{ showSpinner: false }}
        color={lighten(0.2, theme.primary)}
        startPosition={0.3}
        stopDelayMs={200}
        height={2}
        showOnShallow={true} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
