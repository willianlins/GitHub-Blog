import styled from 'styled-components'

import backgroundImg from '../../assets/header-background.svg'

export const LayoutContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LayoutHeader = styled.div`
  width: 100%;
  height: 18.5rem;
  padding-top: 3.125rem;
  display: flex;
  background-image: url(${backgroundImg});
  background-size: cover;
  align-items: flex-start;
  justify-content: center;
`
