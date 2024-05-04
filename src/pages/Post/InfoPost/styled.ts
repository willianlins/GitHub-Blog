import styled from 'styled-components'

export const ContainerInfo = styled.header`
  width: 54rem;
  height: 10.5rem;
  background: ${(props) => props.theme.COLORS['base-profile']};
  border-radius: 10px;
  margin-top: -6.25rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`

export const InfoLinks = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: ${(props) => props.theme.COLORS.blue};
    font-size: ${(props) => props.theme.FONT_SIZE['TEXT-S']};

    svg {
      margin-left: 0.313rem;
      &:first-child {
        margin-right: 0.313rem;
      }
    }

    &:hover {
      text-decoration: underline;
    }
  }
`
export const ContentHeader = styled.div`
  margin-top: 1rem;
  h1 {
    font-size: ${(props) => props.theme.FONT_SIZE['TITLE-L']};
    color: ${(props) => props.theme.COLORS['base-title']};
  }

  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    color: ${(props) => props.theme.COLORS['base-span']};
    margin-top: 1rem;
    svg {
      color: ${(props) => props.theme.COLORS['base-label']};
      margin-right: 0.625rem;
    }
  }
`
