import { Container, TextContainer, InfosContainer, CodeItem } from './styles'
import { Fade } from 'react-reveal'

export default function HomeHero() {
  return (
    <Container>
      <Fade duration={4000} delay={1800}>
        <img src='/pessoa.webp' alt="Foto do Murilo" />
      </Fade>
      <div>
        <Fade duration={3000} delay={500}>
          <TextContainer>
            <h1>Olá</h1>
            <h2>Me chamo Murilo</h2>
          </TextContainer>
        </Fade>
        <Fade duration={3000} delay={1000}>
          <InfosContainer>
            <CodeItem>
              <span className='comment'>//Minha apresentação</span>
              <span className='purple'>Infos</span> {'\u007B'}
              <div>
                Nome: <span className='blue'>Murilo,</span>
              </div>
              <div>
                Sobrenome: <span className='blue'>Abreu Castelo Branco</span>
              </div>
              {'\u007D'}
            </CodeItem>
            <CodeItem>
              <span className='purple'>Cargo</span> {'\u007B'}
              <div>
                Função: <span className='blue'>Dev Front-End,</span>
              </div>
              <div>
                Empresa: <span className='blue'>Fire Base</span>
              </div>
              {'\u007D'}
            </CodeItem>
          </InfosContainer>
        </Fade>
      </div>
    </Container>
  )
}
