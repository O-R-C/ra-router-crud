import { json, redirect } from 'react-router'

export async function action({ request }) {
  const formData = await request.formData()
  const res = await fetch(import.meta.env.VITE_API_URL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content: formData.get('content') }),
  })

  if (!res.ok) {
    throw json({ message: 'Could not add post' }, { status: 500 })
  }

  return redirect('/')
}
