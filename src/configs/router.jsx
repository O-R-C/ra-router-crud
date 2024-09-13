import { createBrowserRouter } from 'react-router-dom'
import Root from '../routes/Root'
import MainPage from '../routes/main-page'
import ErrorPage from '../routes/error-page'
import PostPage from '../routes/post-page'
import EditPage from '../routes/edit-page'
import AddPostPage from '../routes/add-post-page'
import ConfirmDeletePage from '../routes/confirm-delete-page'
import { loader as mainLoader } from '../components/Main/loader'
import { loader as postLoader } from '../components/Post/loader'
import { action as addPostAction } from '../routes/add-post'
import { action as deletePostAction } from '../routes/delete-post'
import { action as editPostAction } from '../components/EditForm/action'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <MainPage />,
            loader: mainLoader,
          },
          {
            path: '/posts/new',
            element: <AddPostPage />,
          },
          {
            path: '/posts/new/add-post',
            action: addPostAction,
          },
          {
            path: '/posts/:id',
            element: <PostPage />,
            loader: postLoader,
          },
          {
            path: '/posts/:id/edit',
            element: <EditPage />,
            loader: postLoader,
            action: editPostAction,
          },
          {
            path: '/posts/:id/confirm-delete',
            element: <ConfirmDeletePage />,
          },
          {
            path: '/posts/:id/confirm-delete/delete-post',
            action: deletePostAction,
          },
          {
            path: '*',
            element: <ErrorPage />,
          },
        ],
      },
    ],
  },
])
