import { createSlice } from '@reduxjs/toolkit'

export interface CartState {
  cart:{id:string,name:string,price:string,quantity:string,img:string}[],
  count:number
}

const initialState: CartState = {
  cart:[],
  count:0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      state.cart.push(action.payload.cart)
      state.count=state.cart.length
    },
    removeFromCart: (state,action) => {
      let index = state.cart.findIndex((obj)=>obj.id==action.payload.id)
      if(index>-1){
        state.cart.splice(index,1);
      }
      state.count=state.cart.length
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer