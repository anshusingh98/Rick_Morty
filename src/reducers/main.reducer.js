import {combineReducers} from 'redux'
import charactersReducer from "./charasters.reducer";
import charactersInfoReducer from "./characters.info.reducer";
import charactersErrorReducer from "./characters.error.reducer";
import favChar from './favourite.reducer';
export default combineReducers({
  charactersReducer,
  charactersInfoReducer,
  charactersErrorReducer,
  favChar,
})

