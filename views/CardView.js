import { getJoinDateString } from "../helper/getJoinDateString"

class CardView {
  #parentEl = document.querySelector(".card-container")
  #errorMsg = "Something went wrong, please try again!"
  #data = {}

  renderLoad() {
    const markup = `
      <div class="flex animate-pulse gap-4 md:w-[672px]">
      
        <div class="hidden md:block md:-shrink-0">
          <span
            class="w-24 h-24 block bg-gray-200 rounded-full dark:bg-gray-700"
          ></span>
        </div>

        <div style="--width-skeleton: 10%" class="w-full">
          <div class="flex gap-4">
            <span
              class="md:hidden w-12 h-12 block bg-gray-200 rounded-full dark:bg-gray-700 aspect-square"
            ></span>

            <div class="flex flex-col gap-2 md:gap-3 w-full">
              <span
                class="inline-block h-4 md:h-5 bg-gray-200 rounded-md md:rounded-lg dark:bg-gray-700"
                style="width: calc(var(--width-skeleton) * 7)"
              ></span>
              <span
                class="inline-block h-4 md:h-5 bg-gray-200 rounded-md md:rounded-lg dark:bg-gray-700"
                style="width: calc(var(--width-skeleton) * 4)"
              ></span>
              <span
                class="inline-block h-4 md:h-5 bg-gray-200 rounded-md md:rounded-lg dark:bg-gray-700"
                style="width: calc(var(--width-skeleton) * 7)"
              ></span>
            </div>

            <span
              class="hidden md:inline-block h-4 md:h-5 bg-gray-200 rounded-md md:rounded-lg dark:bg-gray-700"
              style="width: calc(var(--width-skeleton) * 5)"
            ></span>
          </div>

          <ul class="mt-8 space-y-3 md:space-y-4">
            <li
              class="w-full h-4 md:h-5 bg-gray-200 rounded-md md:rounded-lg dark:bg-gray-700"
            ></li>
            <li
              class="w-full h-4 md:h-5 bg-gray-200 rounded-md md:rounded-lg dark:bg-gray-700"
            ></li>
            <li
              class="w-full h-4 md:h-5 bg-gray-200 rounded-md md:rounded-lg dark:bg-gray-700"
            ></li>
            <li
              class="w-full h-4 md:h-5 bg-gray-200 rounded-md md:rounded-lg dark:bg-gray-700"
            ></li>
          </ul>
        </div>
      </div>
    `

    this.#clearParent()
    this.#insertMarkup(markup)
  }

  renderError(msg = this.#errorMsg) {
    const markup = `
      <div class="error" role="alert">
        <span class="msg">Error:</span> ${msg}
      </div>
    `

    this.#clearParent()
    this.#insertMarkup(markup)
  }

  render(data) {
    if (!data) return this.renderError()

    this.#data = data
    const markup = this.#generateMarkup()

    this.#clearParent()
    this.#insertMarkup(markup)
  }

  #generateMarkup() {
    const markup = `
      <div class="flex">
        <img
          class="hidden md:inline-block h-[5.5rem] w-[5.5rem] rounded-full ring-2 ring-white dark:ring-gray-800 mr-4"
          src="${this.#data.userImg}"
          alt="${this.#data.username} Image Profile"
        />

        <article class="w-full flex flex-col gap-4">
          <!-- USERNAME DETAIL -->
          <header class="flex gap-1 flex-row w-full">
            <img
              class="inline-block md:hidden h-[5.5rem] w-[5.5rem] rounded-full ring-2 ring-white dark:ring-gray-800 mr-4"
              src="${this.#data.userImg}"
              alt="${this.#data.username} Image Profile"
            />

            <div
              class="flex flex-col md:flex-row md:justify-between w-full"
            >
              <h2
                class="flex flex-col text-lg lg:text-xl font-semibold"
              >
                ${this.#data.name || this.#data.username}

                <span class="text-sm text-indigo-500">
                  @${this.#data.username}
                </span>
              </h2>

              <h3 class="text-sm" data-date-created-user>
                ${getJoinDateString(new Date(this.#data.createdAt))}
              </h3>
            </div>
          </header>

          <!-- USER DESCRIPTION DETAIL -->
          <div class="text-sm my-4">
            <p>
              ${this.#data.bio || "This profile has no bio!"}
            </p>
          </div>

          <!-- REPO, FOLLOWERS, FOLLOWING DETAIL -->
          <div
            class="flex gap-8 px-6 py-3 bg-slate-200 dark:bg-slate-800 rounded-md"
          >
            <div class="flex flex-col w-full">
              <p class="tracking-wider">Repos</p>
              <span class="font-semibold"> ${this.#data.repos} </span>
            </div>

            <div class="flex flex-col w-full">
              <p class="tracking-wider">Followers</p>
              <span class="font-semibold"> ${this.#data.followers} </span>
            </div>

            <div class="flex flex-col w-full">
              <p class="tracking-wider">Following</p>
              <span class="font-semibold"> ${this.#data.following} </span>
            </div>
          </div>

          <!-- SOCIAL MEDIA -->
          <ul class="grid grid-cols-2 gap-3">
            <li>
              <p class="flex gap-2 items-center" data-location-user>
                <svg
                  class="h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <circle cx="256" cy="192" r="32" fill="currentColor" />
                  <path
                    fill="currentColor"
                    d="M256 32c-88.22 0-160 68.65-160 153c0 40.17 18.31 93.59 54.42 158.78c29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0 0 51.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153Zm0 224a64 64 0 1 1 64-64a64.07 64.07 0 0 1-64 64Z"
                  />
                </svg>

                <span> ${this.#data.location || "No location"} </span>
              </p>
            </li>

            <li>
              <a href="${
                this.#data.githubUrl
              }" class="flex gap-2 items-center" data-github-user>
                <svg
                  class="h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="48"
                    d="M200.66 352H144a96 96 0 0 1 0-192h55.41m113.18 0H368a96 96 0 0 1 0 192h-56.66m-142.27-96h175.86"
                  />
                </svg>

                <span> ${this.#data.username} </span>
              </a>
            </li>

            <li>
              <p class="flex gap-2 items-center" data-twitter-user>
                <svg
                  class="h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3a97.51 97.51 0 0 0 43.33-53.6a197.74 197.74 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 0 0 2.54 22.1a280.7 280.7 0 0 1-203-101.3A95.69 95.69 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 0 1-25.94 3.4a94.38 94.38 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.68 278.68 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8c0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 0 0 496 109.5Z"
                  />
                </svg>

                <span> ${
                  this.#data.twitterUser || "No twitter user available"
                } </span>
              </p>
            </li>

            <li>
              <p class="flex gap-2 items-center" data-company-user>
                <svg
                  class="h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width="512"
                  height="512"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M432 176H320V64a48 48 0 0 0-48-48H80a48 48 0 0 0-48 48v416a16 16 0 0 0 16 16h104a8 8 0 0 0 8-8v-71.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 192 416v72a8 8 0 0 0 8 8h264a16 16 0 0 0 16-16V224a48 48 0 0 0-48-48ZM98.08 431.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm80 240a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm80 320a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79ZM444 464H320V208h112a16 16 0 0 1 16 16v236a4 4 0 0 1-4 4Z"
                  />
                  <path
                    fill="currentColor"
                    d="M400 400a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm-64 160a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16Z"
                  />
                </svg>

                <span> ${this.#data.company || "No company"} </span>
              </p>
            </li>
          </ul>
        </article>
      </div>
    `

    return markup
  }

  #clearParent() {
    this.#parentEl.innerHTML = ""
  }

  #insertMarkup(markup, position = "afterbegin") {
    this.#parentEl.insertAdjacentHTML(position, markup)
  }
}

export default new CardView()
