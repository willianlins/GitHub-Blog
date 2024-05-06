import { ContainerInfo, InfoUserContent, ContentHeader } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext } from 'react'
import { GitHubUserContext } from '../../../../contexts/GitHubUserContext'

export function InfoProfile() {
  const { user } = useContext(GitHubUserContext)

  return (
    <ContainerInfo>
      <img src={user.imgUrl} alt="" />
      <InfoUserContent>
        <ContentHeader>
          <h1>{user.name}</h1>

          <a href={user.html_git} target="_blank" rel="noreferrer">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ContentHeader>
        <p>
          {user.bio ||
            `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis,
          temporibus aperiam ratione, nesciunt illum nobis quam nulla explicabo
          exercitationem veniam facere! Illo aut quae quo voluptates porro
          blanditiis consequuntur! Dolorem?`}
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} size="sm" />
            {user.userLogin}
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} size="sm" />
            {user.company || 'Não informado'}
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} size="sm" />
            {user.followers} seguidores
          </li>
        </ul>
      </InfoUserContent>
    </ContainerInfo>
  )
}
