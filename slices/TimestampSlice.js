import { createSlice } from "@reduxjs/toolkit";

function getInitialTimestampList() {
    if (typeof window !== "undefined") {
      const localTimestampList = window.localStorage.getItem("timestampList");
      if (localTimestampList) {
        return JSON.parse(localTimestampList);
      }
      window.localStorage.setItem("timestampList", JSON.stringify([]));
      return [];
    }
    return [];
}

const initialValue = {
    timestampList: getInitialTimestampList(),
};

export const timestampSlice = createSlice({
    name: "timestamp",
    initialState: initialValue,
    reducers: {
        addTimestamp: (state, action) => {
            const { startTime, endTime } = action.payload;
            state.timestampList.push(action.payload)
            const timestampList = window.localStorage.getItem("timestampList");
            
            if (timestampList) {
                const timestampListArr = JSON.parse(timestampList);
                // if (startTime > timestampList[timestampList.length - 1].endTime) {
                //     timestampListArr.push({...action.payload,});
                //     window.localStorage.setItem("timestampList", JSON.stringify(timestampListArr));
                // }
                timestampListArr.push({...action.payload,});
                window.localStorage.setItem("timestampList", JSON.stringify(timestampListArr));
            } 
            else {
                window.localStorage.setItem(
                    "timestampList",
                    JSON.stringify([{...action.payload}])
                );
            }
        },

        deleteTimestamp: (state, action) => {
            const timestampList = window.localStorage.getItem("timestampList");
            if (timestampList) {
              const timestampListArr = JSON.parse(timestampList);
              timestampListArr.forEach((timestamp, index) => {
                if (timestamp.id === action.payload) {
                    timestampListArr.splice(index, 1);
                }
              });
              window.localStorage.setItem("timestampList", JSON.stringify(timestampListArr));
              state.timestampList = timestampListArr;
            }
        },
    }
});

export const {addTimestamp, deleteTimestamp} = timestampSlice.actions;

export default timestampSlice.reducer;