import { Container, InfosContainer, CodeItem } from './styles'
import { Fade } from 'react-reveal'

interface Props {
  title: string
  msg: string
}

export default function HomeHeroProjects({title, msg}: Props) {
  return (
    <Container>
          <InfosContainer>
            <Fade duration={2000} delay={200}>
              <CodeItem>
                <span className='purple'>{title}</span> {'\u007B'}
                <div>
                  <span className='blue'>{msg}</span>
                </div>
                {'\u007D'}
              </CodeItem>
            </Fade>
          </InfosContainer>
    </Container>
  )
}
