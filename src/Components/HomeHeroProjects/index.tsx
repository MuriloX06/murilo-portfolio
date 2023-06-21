import { Container, TextContainer, InfosContainer, CodeItem } from './styles'
import { Fade } from 'react-reveal'

export default function HomeHeroProjects() {
  return (
    <Container>
          <InfosContainer>
            <Fade duration={2000} delay={200}>
              <CodeItem>
                <span className='purple'>Informações sobre o site</span> {'\u007B'}
                <div>
                  <span className='blue'>Página em desenvolvimento</span>
                </div>
                {'\u007D'}
              </CodeItem>
            </Fade>
          </InfosContainer>
    </Container>
  )
}
