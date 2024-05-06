import { useParams } from 'react-router-dom'
import { InfoPost } from './InfoPost'
import { ContainerPost, ContentPost } from './styles'
import { useContext } from 'react'
import { GitHubUserContext } from '../../contexts/GitHubUserContext'

export function Post() {
  const { posts } = useContext(GitHubUserContext)
  const { numberIssue } = useParams()

  return (
    <ContainerPost>
      <InfoPost />
      <ContentPost>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
        itaque architecto nobis dignissimos magni esse iste odit, quos assumenda
        nam. Exercitationem suscipit vitae magni officiis excepturi nemo, sunt
        quod reiciendis.
      </ContentPost>
    </ContainerPost>
  )
}
