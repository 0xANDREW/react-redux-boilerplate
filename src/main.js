import butt, {ass2} from './m1'
import App from './comp'
import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

console.log('ass1')
console.log(butt)
console.log(ass2)

var store = createStore(function(){})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

