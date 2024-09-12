import MainPage from '../components/MainPage/MainPage'
import { useLoaderData } from 'react-router-dom'

export default function Root() {
  const { data } = useLoaderData()

  return <MainPage posts={data} />
}
