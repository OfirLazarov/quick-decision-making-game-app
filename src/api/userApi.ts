import { BASE_URL } from "../consts"

export const createUser = async (username: string): Promise<string> => {
  const res = await fetch(`${BASE_URL}/api/user`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username }),
  })

  if (!res.ok) {
    throw new Error('Failed to create user')
  }

  const data = await res.json()
  return data.userId
}
