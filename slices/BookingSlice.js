import { createSlice } from "@reduxjs/toolkit";

function getInitialBookingList() {
    if (typeof window !== "undefined") {
      const localBookingList = window.localStorage.getItem("bookingList");
      if (localBookingList) {
        return JSON.parse(localBookingList);
      }
      window.localStorage.setItem("bookingList", JSON.stringify([]));
      return [];
    }
    return [];
}

const initialValue = {
    bookingList: getInitialBookingList(),
};

export const bookingSlice = createSlice({
    name: "booking",
    initialState: initialValue,
    reducers: {
        addBooking: (state, action) => {
            state.bookingList.push(action.payload)
            const bookingList = window.localStorage.getItem("bookingList");
            
            if (bookingList) {
                const bookingListArr = JSON.parse(bookingList);
                bookingListArr.push({...action.payload,});
                window.localStorage.setItem("bookingList", JSON.stringify(bookingListArr));
            } 
            else {
                window.localStorage.setItem(
                    "bookingList",
                    JSON.stringify([{...action.payload}])
                );
            }
        },

        deleteBooking: (state, action) => {
            const bookingList = window.localStorage.getItem("bookingList");
            if (bookingList) {
              const bookingListArr = JSON.parse(bookingList);
              bookingListArr.forEach((booking, index) => {
                if (booking.id === action.payload) {
                    bookingListArr.splice(index, 1);
                }
              });
              window.localStorage.setItem("bookingList", JSON.stringify(bookingListArr));
              state.bookingList = bookingListArr;
            }
        },
    }
});

export const {addBooking, deleteBooking} = bookingSlice.actions;

export default bookingSlice.reducer;