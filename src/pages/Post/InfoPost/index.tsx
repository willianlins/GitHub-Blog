import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ContainerInfo, ContentHeader, InfoLinks } from './styled'

interface InfoProps {
  title: string
  urlPost: string
  userGIt: string
  createdAt: string
  comments: number
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
        <a href="http://localhost:5173/">
          <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
        </a>
        <a href={}>
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </InfoLinks>
      <ContentHeader>
        <h1>JavaScript data types and data structures</h1>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} size="sm" />
            OhVinixus2
          </li>
          <li>
            <FontAwesomeIcon icon={faCalendar} />
            Há 1 dia
          </li>
          <li>
            <FontAwesomeIcon icon={faComment} />5 comentários
          </li>
        </ul>
      </ContentHeader>
    </ContainerInfo>
  )
}
