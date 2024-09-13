import { useLoaderData } from 'react-router-dom'
import Post from '../components/Post/Post'

export default function PostPage() {
  const { data } = useLoaderData()

  return <Post post={data} />
}
