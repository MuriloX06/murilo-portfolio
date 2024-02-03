import { Container, InfosContainer, CodeItem } from './styles'

interface Props {
  title: string
  msg: string
}

export default function HomeHeroProjects({title, msg}: Props) {
  return (
    <Container>
          <InfosContainer>
            <CodeItem>
              <span className='purple'>{title}</span> {'\u007B'}
                <div>
                  <span className='blue'>{msg}</span>
                </div>
              {'\u007D'}
            </CodeItem>
          </InfosContainer>
    </Container>
  )
}
