import { BASE_URL } from "../config/config"
import { getDataJSON } from "../helper/getDataJSON"

export const state = {
  dataUser: {},
}

const parseData = (data) => {
  const {
    name,
    login: username,
    avatar_url: userImg,
    created_at: createdAt,
    bio,
    public_repos: repos,
    followers,
    following,
    location,
    twitter_username: twitterUser,
    html_url: githubUrl,
    company,
  } = data

  return {
    name,
    username,
    userImg,
    createdAt,
    bio,
    repos,
    followers,
    following,
    location,
    twitterUser,
    githubUrl,
    company,
  }
}

export const getUser = async (username) => {
  try {
    const data = await getDataJSON(`${BASE_URL}${username}`)
    state.dataUser = parseData(data)

    return data
  } catch (err) {
    throw new Error(err.message)
  }
}
