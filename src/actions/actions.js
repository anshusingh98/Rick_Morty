
export   const actionTypes = {
  // SET_ALL_CHARACTERS: "SET_ALL_CHARACTERS",
  // SEARCHED_CHARACTER: "SEARCHED_CHARACTER",
  // INC_PAGE_NUMBER: "INC_PAGE_NUMBER",
  // DEC_PAGE_NUMBER: "DEC_PAGE_NUMBER",
  // SET_STATUS: "SET_STATUS",
  // SET_GENDER: "SET_GENDER",
  // SET_SPECIES: "SET_SPECIES",
  SET_TYPE: "SET_TYPE",
  ADD_TO_FAV: "ADD_TO_FAV",
  REMOVE_FROM_FAV: "REMOVE_FROM_FAV",
  LIKE:"LIKE"
}

export const setCharactersList = characters => ({
  type: 'SET_CHARACTERS_LIST',
  characters
})

export const setCharactersInfo = charsInfo => ({
  type: 'SET_CHARACTERS_INFO',
  charsInfo
})

export const setCharactersError = isErrorOccurred => ({
  type: 'SET_CHARACTERS_ERROR',
  isErrorOccurred
})

// export const addToFavourite = payload => ({
//   type: 'Add_TO_FAVOURITE',
//   payload
// })
// export const setpath = payload => ({
//   type: 'CONNECT_PATH',
//   payload:payload
// })

// export const removeFromFavourite = payload => ({
//   type: 'REMOVE_FROM_FAV',
//   payload
// })

export const addToFav = (data) => {
  return {
      type: actionTypes.ADD_TO_FAV,
      payload: data
  }
}
export const removeFromFav = (id) => {
  return {
      type: actionTypes.REMOVE_FROM_FAV,
      payload: id
  }
}
export const like = (like) => {
  return {
      type: actionTypes.LIKE,
      payload: like
  }
}