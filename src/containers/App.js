import React from "react"
import { Provider } from "react-redux"

import store from "../store/index"

import UserContainer from "./UserContainer"

const App = ({ name, isLoaded }) => {
  return (
    <Provider store={store}>
      <div className="app">
        <UserContainer />
      </div>
    </Provider>
  )
}
export default App
