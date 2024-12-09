import { createSlice } from '@reduxjs/toolkit';

const initialState = ({
  address: '',
  city: '',
  state: '',
  zipcode: '',
  orders: []
})

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    checkoutRedux:(state, action)=> {

      state.address = action.payload.address;
      state.city = action.payload.city;
      state.state = action.payload.state;
      state.zipcode = action.payload.zipcode;
    },
    addOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    resetCheckout: (state) => {
      state.name = '';
      state.houseNumber = '';
      state.address = '';
      state.city = '';
      state.state = '';
      state.zipcode = '';
    }
  },
});

export const { checkoutRedux,addOrder,resetCheckout} = checkoutSlice.actions;
export default checkoutSlice.reducer;