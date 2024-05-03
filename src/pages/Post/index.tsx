import { InfoPost } from './InfoPost'
import { ContainerPost, ContentPost } from './styles'

export function Post() {
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
