import { Container, TextContainer, InfosContainer, CodeItem } from './styles'

export default function HomeHero() {
  return (
    <Container>
      <img src='/pessoa.webp' alt="Foto do Murilo" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Murilo</h2>
        </TextContainer>
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
      </div>
    </Container>
  )
}
