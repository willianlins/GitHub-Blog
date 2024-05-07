import { useContext } from 'react'
import { InfoProfile } from './components/InfoProfile'
import {
  ContainerPosts,
  ContainerSearch,
  ContentHeader,
  ContentPostUser,
  ContainerMain,
} from './styled'
import { GitHubUserContext } from '../../contexts/GitHubUserContext'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { NavLink } from 'react-router-dom'

const searchInputSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchInputSchema>

export function Home() {
  const { posts, getPosts } = useContext(GitHubUserContext)
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchInputSchema),
    defaultValues: {
      query: '',
    },
  })

  function handleSearchPost(data: SearchFormInput) {
    getPosts(data.query)
  }

  return (
    <ContainerMain>
      <InfoProfile />
      <ContainerSearch onSubmit={handleSubmit(handleSearchPost)}>
        <div>
          <h2>Publicações</h2>
          <span>{posts.length} publicações</span>
        </div>
        <input
          type="text"
          placeholder="Buscar Conteúdo"
          {...register('query')}
        />
      </ContainerSearch>
      <ContainerPosts>
        {posts.map((post) => {
          return (
            <NavLink to={`http://localhost:5173/post/${post.id}`} key={post.id}>
              <ContentPostUser>
                <ContentHeader>
                  <h2>{post.title}</h2>
                  <span>
                    {formatDistanceToNow(new Date(post.created_at), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </span>
                </ContentHeader>
                <p>{post.body.substring(0, 180)}...</p>
              </ContentPostUser>
            </NavLink>
          )
        })}
      </ContainerPosts>
    </ContainerMain>
  )
}
