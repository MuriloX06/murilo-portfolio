import { Container } from './styles'
import { TextContainer } from './styles'
import picture from '../../assets/pessoa.webp'

export default function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Foto do Murilo" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Murilo</h2>
        </TextContainer>
      </div>
    </Container>
  )
}
