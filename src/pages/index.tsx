import React from 'react'
import Head from 'next/head'
import {HomeContainer} from '../styles/HomeStyles'
import Header from '../Components/Header'
import HomeHero from '../Components/HomeHero'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
        <title>Portfólio | Murilo</title>
      </Head>

      <HomeContainer>
        <Header />
        <main className="container">
          <HomeHero />
        </main>
      </HomeContainer>
    </>
  )
}

export default Home
