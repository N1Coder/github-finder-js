export const getDataJSON = async (url) => {
  try {
    const res = await fetch(url)

    if (res.status === 404) {
      throw new Error(`User not found (${res.status})`)
    }

    if (res.status !== 200) {
      throw new Error(res.status)
    }

    const data = await res.json()

    return data
  } catch (err) {
    throw new Error(err.message)
  }
}
