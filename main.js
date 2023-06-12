import SearchView from "./views/SearchView"
import * as Model from "./model/model.js"
import CardView from "./views/CardView"

const controllerUser = async () => {
  try {
    // render skeleton loading
    CardView.renderLoad()

    // get data
    const queryValue = SearchView.getInputValue()
    await Model.getUser(queryValue)

    // render card content
    CardView.render(Model.state.dataUser)
  } catch (err) {
    console.error(err.message)
    CardView.renderError(err.message)
  }
}

const initEvent = () => {
  SearchView.addHandlerSearch(controllerUser)
}

initEvent()
