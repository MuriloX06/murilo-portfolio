import { Container, TextContainer } from './styles'
import Image from 'next/image'
import picture from '../../assets/pessoa.webp'

export default function HomeHero() {
  return (
    <Container>
      <Image
        className='image1'
        src={picture}
        alt="Foto de uma pessoa."
        width={1925}
        height={1800}
      />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Murilo</h2>
        </TextContainer>
      </div>
    </Container>
  )
}
