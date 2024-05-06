import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface GitHubContextProviderProps {
  children: ReactNode
}

interface UserInfo {
  userLogin: string
  name: string
  imgUrl: string
  company: string
  followers: number
  html_git: string
  bio: string
  public_repos: number
}

interface Post {
  id: number
  title: string
  userLogin: string
  created_at: string
  comments: number
  body: string
}

interface GitHubContextType {
  user: UserInfo
  posts: Post[]
  getPosts: (query?: string) => Promise<void>
}

export const GitHubUserContext = createContext({} as GitHubContextType)

export function GitHubContextProvider({
  children,
}: GitHubContextProviderProps) {
  const [user, setUser] = useState<UserInfo>({} as UserInfo)
  const [posts, setPost] = useState<Post[]>([])

  const getUserInfo = useCallback(async () => {
    const response = await api.get('/users/willianlins')
    setUser({
      userLogin: response.data.login,
      name: response.data.name,
      imgUrl: response.data.avatar_url,
      company: response.data.company,
      followers: response.data.followers,
      html_git: response.data.html_url,
      bio: response.data.bio,
      public_repos: response.data.public_repos,
    })
  }, [])

  const getPosts = useCallback(async (query?: string) => {
    const response = await api.get('search/issues', {
      params: {
        q: `${query || ''} user:willianlins`,
      },
    })

    const postArrAux = []

    for (const post of response.data.items) {
      postArrAux.push({
        id: post.id,
        title: post.title,
        userLogin: post.user.login,
        created_at: post.created_at,
        comments: post.comments,
        body: post.body,
      })
    }
    setPost(postArrAux)
  }, [])

  useEffect(() => {
    getUserInfo()
    getPosts()
  }, [getUserInfo, getPosts])

  return (
    <GitHubUserContext.Provider value={{ user, posts, getPosts }}>
      {children}
    </GitHubUserContext.Provider>
  )
}
