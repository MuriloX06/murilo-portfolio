import { Container, TextContainer } from './styles'

export default function HomeHero() {
  return (
    <Container>
      <img src='/pessoa.webp' alt="Foto do Murilo" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Murilo</h2>
        </TextContainer>
      </div>
    </Container>
  )
}
