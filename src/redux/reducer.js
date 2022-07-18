// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const initialState = {
//   items: [],
//   filter: '',
// };

// const counterSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     add: {
//       reducer(state, { payload }) {
//         state.items.push(payload);
//       },
//       prepare(state) {
//         return {
//           payload: { ...state, id: nanoid() },
//         };
//       },
//     },
//     remove(state, { payload }) {
//       state.items = state.items.filter(({ id }) => id !== payload);

//     },
//     filter(state, { payload }) {
//       state.filter = payload;
//     },
//     addd(state, {payload}) {
//       return {
//         ...state,
//         items: [...state.items, ...payload]
//       }
//     }
//   },
// });

// export const { add, addd, remove, filter } = counterSlice.actions;
// export default counterSlice.reducer;
