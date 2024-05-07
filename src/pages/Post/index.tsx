import { useParams } from 'react-router-dom'
import { InfoPost } from './InfoPost'
import { ContainerPost, ContentPost } from './styles'
import { useContext, useMemo } from 'react'
import { GitHubUserContext } from '../../contexts/GitHubUserContext'
import Markdown from 'react-markdown'

interface Post {
  id: number
  title: string
  userLogin: string
  created_at: string
  comments: number
  body: string
  html_url: string
}

export function Post() {
  const { posts } = useContext(GitHubUserContext)
  const { numberIssue } = useParams()

  const postShow = useMemo(
    () =>
      posts.find((el) => el.id === Number(numberIssue)) ?? {
        id: 0,
        title: '',
        userLogin: '',
        created_at: '',
        comments: 0,
        body: '',
        html_url: '',
      },
    [numberIssue, posts],
  )

  return (
    <ContainerPost>
      <InfoPost
        title={postShow?.title}
        userGIt={postShow?.userLogin}
        comments={postShow?.comments}
        createdAt={postShow?.created_at}
        urlPost={postShow?.html_url}
      />
      <ContentPost>
        <Markdown>{postShow.body}</Markdown>
      </ContentPost>
    </ContainerPost>
  )
}
