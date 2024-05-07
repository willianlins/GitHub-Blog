import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContainerInfo, ContentHeader, InfoLinks } from './styled'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { NavLink } from 'react-router-dom'

interface InfoProps {
  title: string | undefined
  urlPost: string
  userGIt: string | undefined
  createdAt: string
  comments: number | undefined
}

export function InfoPost({
  title,
  urlPost,
  comments,
  userGIt,
  createdAt,
}: InfoProps) {
  return (
    <ContainerInfo>
      <InfoLinks>
        <NavLink to="/" title="voltar">
          <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
        </NavLink>
        <NavLink to={urlPost} target="black" title="Ver no git">
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </NavLink>
      </InfoLinks>
      <ContentHeader>
        <h1>{title}</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} size="sm" />
            {userGIt}
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendar} />
            {formatDistanceToNow(new Date(createdAt), {
              addSuffix: true,
              locale: ptBR,
            })}
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />
            {comments}
          </li>
        </ul>
      </ContentHeader>
    </ContainerInfo>
  )
}
