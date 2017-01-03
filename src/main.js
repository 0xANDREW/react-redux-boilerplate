import App from './comp'
import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

var store = createStore(function(){})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

