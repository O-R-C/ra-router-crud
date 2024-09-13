export async function loader({ params }) {
  const res = await fetch(import.meta.env.VITE_API_URL + '/' + params.id)
  const data = await res.json()
  return { data }
}
