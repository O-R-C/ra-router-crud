import Main from '../components/Main/Main'
import { useLoaderData } from 'react-router-dom'

export default function MainPage() {
  const { data } = useLoaderData()

  return <Main posts={data} />
}
