import { styled } from 'styled-components'

export const ContainerInfo = styled.div`
  width: 54rem;
  height: 13.25rem;
  background: ${(props) => props.theme.COLORS['base-profile']};
  border-radius: 10px;
  margin-top: -6.25rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 1.875rem 2.188rem;
  gap: 2rem;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    color: ${(props) => props.theme.COLORS['base-subtitle']};
    margin-top: 1rem;
    svg {
      color: ${(props) => props.theme.COLORS['base-label']};
      margin-right: 0.625rem;
    }
  }
`

export const InfoUserContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const ContentHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    color: ${(props) => props.theme.COLORS['base-title']};
    font-size: ${(props) => props.theme.FONT_SIZE['TITLE-L']};
  }

  a {
    color: ${(props) => props.theme.COLORS.blue};
    font-size: ${(props) => props.theme.FONT_SIZE['TEXT-S']};

    svg {
      margin-left: 0.313rem;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`
