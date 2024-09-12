import { createBrowserRouter } from 'react-router-dom'
import Root from '../routes/Root'
import ErrorPage from '../routes/error-page'
import { loader as rootLoader } from '../components/MainPage/loader'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
  },
  {
    path: '/posts',
    element: <div>Posts</div>,
  },
  {
    path: '/posts/:id',
    element: <div>Post</div>,
  },
])
