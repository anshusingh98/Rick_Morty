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
const favChar = {
  favouriteChars: []
  ,isfavourite:true,
}


 const favourites = (state = favChar, {type, payload})=>{
  switch (type) {
      case actionTypes.ADD_TO_FAV:
          console.log("payload", payload);
          return{...state, favouriteChars:[...state.favouriteChars, payload] }
      case actionTypes.REMOVE_FROM_FAV:
          return{...state, favouriteChars:state.favouriteChars.filter(char=>char.id !== payload)}
          case actionTypes.LIKE:
            return state.isfavourite = payload

      default:
          return state;
  }
}
export default favourites;
// const FavReducer = (state = { favouriteCharacters: [
//   {
//     id: 1,
//     name: "Rick Sanchez",
//     status: "Alive",
//     species: "Human",
//     type: "",
//     gender: "Male",
//     origin: {
//       name: "Earth (C-137)",
//       url: "https://rickandmortyapi.com/api/location/1",
//     },
//     location: {
//       name: "Citadel of Ricks",
//       url: "https://rickandmortyapi.com/api/location/3",
//     },
//     image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//     episode: [
//       "https://rickandmortyapi.com/api/episode/1",
//       "https://rickandmortyapi.com/api/episode/2",
//       "https://rickandmortyapi.com/api/episode/3",
//       "https://rickandmortyapi.com/api/episode/4",
//       "https://rickandmortyapi.com/api/episode/5",
//       "https://rickandmortyapi.com/api/episode/6",
//       "https://rickandmortyapi.com/api/episode/7",
//       "https://rickandmortyapi.com/api/episode/8",
//       "https://rickandmortyapi.com/api/episode/9",
//       "https://rickandmortyapi.com/api/episode/10",
//       "https://rickandmortyapi.com/api/episode/11",
//       "https://rickandmortyapi.com/api/episode/12",
//       "https://rickandmortyapi.com/api/episode/13",
//       "https://rickandmortyapi.com/api/episode/14",
//       "https://rickandmortyapi.com/api/episode/15",
//       "https://rickandmortyapi.com/api/episode/16",
//       "https://rickandmortyapi.com/api/episode/17",
//       "https://rickandmortyapi.com/api/episode/18",
//       "https://rickandmortyapi.com/api/episode/19",
//       "https://rickandmortyapi.com/api/episode/20",
//       "https://rickandmortyapi.com/api/episode/21",
//       "https://rickandmortyapi.com/api/episode/22",
//       "https://rickandmortyapi.com/api/episode/23",
//       "https://rickandmortyapi.com/api/episode/24",
//       "https://rickandmortyapi.com/api/episode/25",
//       "https://rickandmortyapi.com/api/episode/26",
//       "https://rickandmortyapi.com/api/episode/27",
//       "https://rickandmortyapi.com/api/episode/28",
//       "https://rickandmortyapi.com/api/episode/29",
//       "https://rickandmortyapi.com/api/episode/30",
//       "https://rickandmortyapi.com/api/episode/31",
//       "https://rickandmortyapi.com/api/episode/32",
//       "https://rickandmortyapi.com/api/episode/33",
//       "https://rickandmortyapi.com/api/episode/34",
//       "https://rickandmortyapi.com/api/episode/35",
//       "https://rickandmortyapi.com/api/episode/36",
//       "https://rickandmortyapi.com/api/episode/37",
//       "https://rickandmortyapi.com/api/episode/38",
//       "https://rickandmortyapi.com/api/episode/39",
//       "https://rickandmortyapi.com/api/episode/40",
//       "https://rickandmortyapi.com/api/episode/41",
//       "https://rickandmortyapi.com/api/episode/42",
//       "https://rickandmortyapi.com/api/episode/43",
//       "https://rickandmortyapi.com/api/episode/44",
//       "https://rickandmortyapi.com/api/episode/45",
//       "https://rickandmortyapi.com/api/episode/46",
//       "https://rickandmortyapi.com/api/episode/47",
//       "https://rickandmortyapi.com/api/episode/48",
//       "https://rickandmortyapi.com/api/episode/49",
//       "https://rickandmortyapi.com/api/episode/50",
//       "https://rickandmortyapi.com/api/episode/51",
//     ],
//     url: "https://rickandmortyapi.com/api/character/1",
//     created: "2017-11-04T18:48:46.250Z",
//   },
// ],
// isFavourite: true,}, action) => {
//   switch (action.type) {
//     case 'Add_TO_FAVOURITE':
//       return   state.favouriteCharacters = [
//         action.payload,
//         ...state.favouriteCharacters,
//       ];
//     default:
//           return state
//         // state.favouriteCharacters = [
//         //   action.payload,
//         //   ...state.favouriteCharacters,
//         // ]
      
//   }
// }

// export default FavReducer
