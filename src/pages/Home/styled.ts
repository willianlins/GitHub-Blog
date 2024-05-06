import { styled } from 'styled-components'

export const ContainerMain = styled.main`
  width: 54rem;
  margin-bottom: 8rem;
`

export const ContainerSearch = styled.form`
  display: flex;
  flex-direction: column;
  margin: 4rem 0 3rem;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
    h2 {
      font-size: ${(props) => props.theme.FONT_SIZE['TITLE-S']};
      color: ${(props) => props.theme.COLORS['base-subtitle']};
    }

    span {
      color: ${(props) => props.theme.COLORS['base-span']};
      font-size: ${(props) => props.theme.FONT_SIZE['TEXT-M']};
    }
  }
  input {
    padding: 14px;
    border-radius: 6px;
    background: ${(props) => props.theme.COLORS['base-input']};
    border: 1px solid ${(props) => props.theme.COLORS['base-border']};
    color: ${(props) => props.theme.COLORS['base-text']};

    &::placeholder {
      color: ${(props) => props.theme.COLORS['base-label']};
    }

    &:focus {
      border-color: ${(props) => props.theme.COLORS.blue};
    }
  }
`

export const ContainerPosts = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  justify-content: space-between;
`

export const ContentPostUser = styled.div`
  width: 26rem;
  height: 16.25rem;
  background: ${(props) => props.theme.COLORS['base-post']};
  border-radius: 10px;
  padding: 2rem;
  border: 1px solid transparent;
  color: ${(props) => props.theme.COLORS['base-text']};
  line-height: 160%;
  &:hover {
    border-color: ${(props) => props.theme.COLORS['base-label']};
  }
`

export const ContentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  line-height: 160%;

  h2 {
    flex: 1;
    color: ${(props) => props.theme.COLORS['base-title']};
    font-size: ${(props) => props.theme.FONT_SIZE['TITLE-M']};
    /* line-height: 160%; */
  }

  span {
    font-size: ${(props) => props.theme.FONT_SIZE['TEXT-S']};
    color: ${(props) => props.theme.COLORS['base-span']};
  }
`
