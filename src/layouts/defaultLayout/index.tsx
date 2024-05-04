import { Outlet } from 'react-router-dom'
import { LayoutContainer, LayoutHeader } from './styles'

import imgLogo from '../../assets/logo.svg'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <LayoutHeader>
        <img src={imgLogo} alt="" />
      </LayoutHeader>
      <Outlet />
    </LayoutContainer>
  )
}
