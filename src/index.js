import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
// import mainReducer from './redux/reducers/main.reducer'
import './index.css'
import App from './components/App'
import { Store } from './redux/Store'

render(
    <Provider store={Store}>
      <App/>
    </Provider>,
    document.getElementById('root')
)
