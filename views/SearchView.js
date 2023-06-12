class SearchView {
  #parentEl = document.querySelector(".form-search")

  getInputValue() {
    const queryValue = this.#parentEl.querySelector(".input-search").value

    if (!queryValue) return

    return queryValue
  }

  addHandlerSearch(handlerFn) {
    this.#parentEl.addEventListener("submit", (e) => {
      e.preventDefault()
      handlerFn()
    })
  }
}

export default new SearchView()
