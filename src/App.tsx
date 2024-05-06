import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import defaultTheme from './styles/theme/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { GitHubContextProvider } from './contexts/GitHubUserContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GitHubContextProvider>
          <Router />
        </GitHubContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
