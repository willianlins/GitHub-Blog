import { InfoProfile } from './components/InfoProfile'
import {
  ContainerPosts,
  ContainerSearch,
  ContentHeader,
  ContentPostUser,
  ContainerMain,
} from './styled'

export function Home() {
  return (
    <ContainerMain>
      <InfoProfile />
      <ContainerSearch>
        <div>
          <h2>Publicações</h2>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar Conteúdo" />
      </ContainerSearch>
      <ContainerPosts>
        <a href="">
          <ContentPostUser>
            <ContentHeader>
              <h2>JavaScript data types and data structures</h2>
              <span> Há 1 dia </span>
            </ContentHeader>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...
            </p>
          </ContentPostUser>
        </a>
        <a href="">
          <ContentPostUser>
            <ContentHeader>
              <h2>JavaScript data types and data structures</h2>
              <span> Há 1 dia </span>
            </ContentHeader>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...
            </p>
          </ContentPostUser>
        </a>
        <a href="">
          <ContentPostUser>
            <ContentHeader>
              <h2>JavaScript data types and data structures</h2>
              <span> Há 1 dia </span>
            </ContentHeader>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...
            </p>
          </ContentPostUser>
        </a>
        <a href="">
          <ContentPostUser>
            <ContentHeader>
              <h2>JavaScript data types and data structures</h2>
              <span> Há 1 dia </span>
            </ContentHeader>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...
            </p>
          </ContentPostUser>
        </a>
        <a href="">
          <ContentPostUser>
            <ContentHeader>
              <h2>JavaScript data types and data structures</h2>
              <span> Há 1 dia </span>
            </ContentHeader>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...
            </p>
          </ContentPostUser>
        </a>
        <a href="">
          <ContentPostUser>
            <ContentHeader>
              <h2>JavaScript data types and data structures</h2>
              <span> Há 1 dia </span>
            </ContentHeader>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...
            </p>
          </ContentPostUser>
        </a>
        <a href="">
          <ContentPostUser>
            <ContentHeader>
              <h2>JavaScript data types and data structures</h2>
              <span> Há 1 dia </span>
            </ContentHeader>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...
            </p>
          </ContentPostUser>
        </a>
        <a href="">
          <ContentPostUser>
            <ContentHeader>
              <h2>JavaScript data types and data structures</h2>
              <span> Há 1 dia </span>
            </ContentHeader>
            <p>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in...
            </p>
          </ContentPostUser>
        </a>
      </ContainerPosts>
    </ContainerMain>
  )
}
