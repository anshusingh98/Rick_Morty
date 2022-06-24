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

export const addToFavourite = payload => ({
  type: 'Add_TO_FAVOURITE',
  payload
})
export const setpath = payload => ({
  type: 'CONNECT_PATH',
  payload
})

export const removeFromFavourite = payload => ({
  type: 'REMOVE_FROM_FAV',
  payload
})