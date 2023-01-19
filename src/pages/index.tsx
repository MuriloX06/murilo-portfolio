import React from 'react'
import {HomeContainer} from '../styles/HomeStyles'
import Header from '../Components/Header'
import HomeHero from '../Components/HomeHero'

const Home: React.FC = () => {
  return (
     <HomeContainer>
      <Header />
      <main className="container">
        <HomeHero />
      </main>
    </HomeContainer>
  )
}

export default Home
