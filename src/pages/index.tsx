import React from 'react'
import {HomeContainer} from '../styles/HomeStyles'
import Header from '../Components/Header'
import HomeHero from '../Components/HomeHero'

const Home: React.FC = () => {
  return (
     <HomeContainer>
      <Header />
      <h1>Danielly<h1>
      <main className="container">
        <HomeHero />
      </main>
    </HomeContainer>
  )
}

export default Home
