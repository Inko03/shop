export const CartReducer = (state, action) => {
    switch(action.type){
        case "ADD":
            return {...state,Cart:[...state.Cart,action.payload]}
        case "REMOVE":{
            const newState = state.Cart.filter((element)=>element.id!==action.payload)
            return {...state,Cart:newState}
        }
        case "SET_CART":
            return {...state,Cart:action.payload}
        case "SHOW":
            return {...state,Cart:action.payload}
        case "PLUS":
            return {...state,Cart:state.Cart.map(item=>{
                if(item.id===action.payload&&item.quantity<6){
                    return{...item,quantity:item.quantity+1}
                }else{
                    return item
                }
            })}
        case "MINUS":
                return {...state,Cart:state.Cart.map(item=>{
                    if(item.id===action.payload&&item.quantity>1){
                        return{...item,quantity:item.quantity-1}
                    }else{
                        return item
                    }
                })}
        default:            
            return null
    }
  };