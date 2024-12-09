import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    basket: []
}


export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToCartRedux: (state, action)=>{
          console.log(action.payload)
            const index = state.basket.findIndex((item)=> item.id === action.payload.id)
           console.log(index);
            if(index >= 0){
                state.basket[index].qty +=1
                state.basket[index].total = (state.basket[index].qty * state.basket[index].price).toString()
            }else{
                const newItem = {
                ...action.payload,
                qty: 1,
                total: action.payload.price
                
                }
                console.log(newItem.total)
                state.basket.push(newItem)
            }
        },
        increaseItem : (state, action)=>{
            const index = state.basket.findIndex((item)=> item.id === action.payload.id)
            //    console.log(index);
                if(index >= 0){
                    state.basket[index].qty +=1
                    state.basket[index].total = (state.basket[index].qty * state.basket[index].price).toString()
                }
        },
        decreaseItem: (state, action) => {
            const index = state.basket.findIndex((item)=> item.id === action.payload.id)
        //    console.log(index);
            if(index >= 0){
                state.basket[index].qty -=1
                state.basket[index].total = (state.basket[index].qty * state.basket[index].price).toString()
            }
        },
        removeItem : (state, action) => {
            const index = state.basket.findIndex((item)=> item.id === action.payload.id)
        //    console.log(index);
            if(index >= 0){
               state.basket.splice(index, 1)
            }
        },
        resetCart: (state) => {
            state.basket = [];

    },
}
})

export const { addToCartRedux,increaseItem,decreaseItem, removeItem, resetCart } = basketSlice.actions

export default basketSlice.reducer