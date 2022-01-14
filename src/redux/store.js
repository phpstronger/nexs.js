import { createStore, applyMiddleware } from 'redux'
import { createWrapper } from "next-redux-wrapper"
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers'

// Проверяем какая сборка проекта если production то не испоьзуем DevTools
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension")

    return composeWithDevTools(applyMiddleware(middleware))
  }

  return applyMiddleware(middleware)
};

// Инициализация "создания" хранилища
const initStore = () => {
  return createStore(rootReducer, bindMiddleware(thunkMiddleware))
}

export const wrapper = createWrapper(initStore)