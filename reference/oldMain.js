/*
// selecting elements
const inputElement = document.querySelector("[data-input-text]")
const btnSubmit = document.querySelector("[data-input-button]")
const userImageElements = document.querySelectorAll("[data-image-user]")

const selectElement = (nameEl) => {
  return document.querySelector(nameEl)
}

const setChildText = (el, text, tagName = "span") => {
  const child = selectElement(el).querySelector(tagName)
  child.textContent = text
}

const setLoading = () => {
  const loadingElement = selectElement("[data-loading]")
  const userContentElement = selectElement("[data-content-user]")

  loadingElement.classList.remove("hidden")
  loadingElement.classList.add("flex")

  userContentElement.classList.add("hidden")
  userContentElement.classList.remove("flex")
}

const displayContent = () => {
  const loadingElement = selectElement("[data-loading]")
  const contentElement = selectElement("[data-content-user]")

  loadingElement.classList.add("hidden")
  loadingElement.classList.remove("flex")

  contentElement.classList.remove("hidden")
  contentElement.classList.add("flex")
}

const getUser = async (username) => {
  try {
    if (inputElement.value === "") return

    setLoading()
    const res = await fetch(`https://api.github.com/users/${username}`)

    if (res.status !== 200) {
      throw new Error(res.status)
    }

    const data = await res.json()

    return data
  } catch (err) {
    console.error(err.message)
  }
}

inputElement.addEventListener("keydown", async (event) => {
  if (event.key !== "Enter") return

  const {
    login: username,
    avatar_url: userImage,
    created_at,
    bio,
    public_repos: repoCount,
    followers,
    following,
    location,
    twitter_username: twitterHandle,
    html_url: githubUrl,
    company,
  } = await getUser(inputElement.value)

  userImageElements.forEach((element) => {
    element.src = userImage
  })

  selectElement("[data-nickname-user]").textContent = username
  selectElement("[data-date-created-user]").textContent =
    getJoinDateString(created_at)
  selectElement("[data-bio-user]").textContent =
    bio || "This profile has no bio"
  selectElement("[data-repos-user]").textContent = repoCount
  selectElement("[data-followers-user]").textContent = followers
  selectElement("[data-following-user]").textContent = following
  setChildText("[data-location-user]", location || "Not available")
  selectElement("[data-github-user]").href = githubUrl
  setChildText("[data-github-user]", username)
  setChildText("[data-twitter-user]", twitterHandle || "Not available")
  setChildText("[data-company-user]", company || "Not available")

  displayContent()
})

btnSubmit.addEventListener("click", async () => {
  try {
    const {
      login: username,
      avatar_url: userImg,
      created_at,
      bio,
      public_repos: repos,
      followers,
      following,
      location,
      twitter_username: twitterUser,
      html_url: githubUrl,
      company,
    } = await getUser(inputElement.value)

    userImageElements.forEach((img) => {
      img.src = userImg
    })

    console.log(parseDate(created_at))

    selectElement("[data-nickname-user]").textContent = username

    selectElement(
      "[data-date-created-user]"
    ).textContent = `Joined at ${new Intl.DateTimeFormat("id-ID", {
      dateStyle: "medium",
    }).format(parseDate(created_at))}`

    selectElement("[data-bio-user]").textContent =
      bio || "This profile has no bio"

    // info about followers and repos
    selectElement("[data-repos-user]").textContent = repos
    selectElement("[data-followers-user]").textContent = followers
    selectElement("[data-following-user]").textContent = following

    // social links
    setChildText("[data-location-user]", location || "Not available")
    selectElement("[data-github-user]").href = githubUrl
    setChildText("[data-github-user]", username)
    setChildText("[data-twitter-user]", twitterUser || "Not available")
    setChildText("[data-company-user]", company || "Not available")

    displayContent()
  } catch (err) {
    console.error(err)
  }
})
*/
