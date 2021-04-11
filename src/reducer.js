

export const ADD_ITEM = 'ADD_ITEM';


export const addItem = item => ({

  type: ADD_ITEM,

  payload: item
  

})

const initialState = {

  itemList: []

}

const rootReducer = (state = initialState, action) => {

  console.log("itemList :"+ state);
  switch (action.type) {
    case ADD_ITEM:
      
      return {

        ...state,

        itemList: state.itemList.concat({

          id: Math.random(),

          name: action.payload

        })



      }

      break;
  
    default:
      return state
      break;
   

      

  }

}

export default rootReducer