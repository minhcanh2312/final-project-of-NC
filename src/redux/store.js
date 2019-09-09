import {createStore} from 'redux'
import appState from './reducers'

const store = createStore(
    appState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store