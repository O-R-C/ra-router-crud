import { json, redirect } from 'react-router'

export async function action({ params }) {
  const res = await fetch(import.meta.env.VITE_API_URL + '/' + params.id, {
    method: 'delete',
  })

  if (!res.ok) {
    throw json({ message: 'Could not delete post' }, { status: 500 })
  }

  return redirect('/')
}
