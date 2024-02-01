export const CartReducer = (state, action) => {
    switch(action.type){
        case "ADD":
            return {...state,Cart:[...state.Cart,action.payload]}
        case "REMOVE":{
            const newState = state.Cart.filter((element)=>element.id!==action.payload)
            console.log(newState)
            return {...state,Cart:newState}
        }
        default:            
            return null
    }
  };