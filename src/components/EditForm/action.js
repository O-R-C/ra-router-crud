import { json, redirect } from 'react-router-dom'

export async function action({ request, params }) {
  const formData = await request.formData()
  const res = await fetch(import.meta.env.VITE_API_URL + '/' + params.id, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: formData.get('content'),
    }),
  })

  if (!res.ok) {
    throw json({ message: 'Could not update post' }, { status: 500 })
  }

  return redirect('/')
}
