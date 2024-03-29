import styled from "styled-components"

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main{
    display: flex;
    flex-direction: column;
    gap: 8rem;

    >h1{
      color: ${({ theme }) => theme.primary};
    }

   >h2{
      color: ${({ theme }) => theme.primary};
    }
  }
`
