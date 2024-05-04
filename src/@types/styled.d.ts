import defualTheme from '../styles/theme/default'

type ThemeType = typeof defualTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
