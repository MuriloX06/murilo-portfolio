import React from 'react'
import Head from 'next/head'
import { HomeContainer } from '../styles/HomeStyles'
import Header from '../Components/Header'
import HomeHeroProjects from '../Components/HomeHeroProjects'

const Projects: React.FC = () => {
  return (
    <>
      <Head>
        <title>Projetos</title>
      </Head>

      <HomeContainer>
        <Header />
        <main className="container">
          <HomeHeroProjects
            title="Informações do site"
            msg="Página em desenvolvimento." />
        </main>
      </HomeContainer>
    </>
  )
}

export default Projects
