import React from 'react'
import Head from 'next/head'
import {HomeContainer} from '../styles/HomeStyles'
import Header from '../Components/Header'

const Projects: React.FC = () => {
  return (
    <>
      <Head>
        <title>Projetos</title>
      </Head>

      <HomeContainer>
        <Header />
        <main className="container">
          <h1>Página em desenvolvimento...</h1>
          <h2>Murilo Abreu Castelo Branco</h2>
        </main>
      </HomeContainer>
    </>
  )
}

export default Projects
