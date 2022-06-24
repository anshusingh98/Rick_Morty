const FavReducer = (state = {favouriteCharacters: [{}],
  isFavourite: true,}, action) => {
    switch (action.type) {
      case 'Add_TO_FAVOURITE':
        return state.favouriteCharacters = [
            action.payload,
            ...state.favouriteCharacters,
          ];
          
        case 'CONNECT_PATH':
              return state.isFavourite = action.payload;
        // case 'REMOVE_FROM_FAV':
        //       return {...state,}
              
              
              
      default:
        return state
    }
  }
  
  export default FavReducer
  