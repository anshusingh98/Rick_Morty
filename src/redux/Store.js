import mainReducer from "../reducers/main.reducer"
import { createStore } from "redux"


 export const Store = createStore(mainReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
