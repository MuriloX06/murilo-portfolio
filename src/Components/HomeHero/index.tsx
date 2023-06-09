import { Container, TextContainer, InfosContainer, CodeItem } from './styles'
import { Fade } from 'react-reveal'

export default function HomeHero() {
  return (
    <Container>
      <Fade duration={2000} delay={1000}>
        <img src='/pessoa.webp' alt="Foto do Murilo" />
      </Fade>
      <div>
        <Fade duration={2000}>
          <TextContainer>
            <h1>Olá</h1>
            <h2>Me chamo Guilherme</h2>
          </TextContainer>
        </Fade>
        <Fade duration={3000} delay={400}>
          <InfosContainer>
            <CodeItem>
              <span className='comment'>//Minha apresentação</span>
              <span className='purple'>Infos</span> {'\u007B'}
              <div>
                Nome: <span className='blue'>Luis,</span>
              </div>
              <div>
                Sobrenome: <span className='blue'>Oliveira Pinto</span>
              </div>
              {'\u007D'}
            </CodeItem>
            <CodeItem>
              <span className='purple'>Cargo</span> {'\u007B'}
              <div>
                Função: <span className='blue'>Hacker,</span>
              </div>
              <div>
                Empresa: <span className='blue'>I.A.</span>
              </div>
              {'\u007D'}
            </CodeItem>
          </InfosContainer>
        </Fade>
      </div>
    </Container>
  )
}
