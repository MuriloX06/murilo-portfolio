import React from 'react'
import Head from 'next/head'
import Header from '../Components/Header/Header'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <title>Portfólio | Murilo</title>
      </Head>

      <main>
        <Header />
      </main>
    </>
  )
}

export default Home
