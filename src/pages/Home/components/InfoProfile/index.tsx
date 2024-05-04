import foragido from '../../../../assets/Foragido.png'
import { ContainerInfo, InfoUserContent, ContentHeader } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function InfoProfile() {
  return (
    <ContainerInfo>
      <img src={foragido} alt="" />
      <InfoUserContent>
        <ContentHeader>
          <h1>Vinicius - Foragido da Polícia de Curitiba</h1>
          <a href="#">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ContentHeader>
        <p>
          Sujeito perigoso e foragido da polícia de Curitiba, procurado por
          crimes graves. A população deve estar atenta e relatar qualquer
          informação às autoridades.
        </p>

        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} size="sm" />
            OhVinixus2
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} size="sm" />
            Anchieta
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} size="sm" />
            100 seguidores
          </li>
        </ul>
      </InfoUserContent>
    </ContainerInfo>
  )
}
