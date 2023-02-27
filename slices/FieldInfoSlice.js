import { createSlice } from "@reduxjs/toolkit";

function getInitialFieldList() {
    if (typeof window !== "undefined") {
      const localFieldList = window.localStorage.getItem("fieldList");
      if (localFieldList) {
        return JSON.parse(localFieldList);
      }
      window.localStorage.setItem("fieldList", JSON.stringify([]));
      return [];
    }
    return [];
}

const initialValue = {
    fieldList: getInitialFieldList(),
};
  
export const fieldInfoSlice = createSlice({
    name: "field",
    initialState: initialValue,
    reducers: {
        addField: (state, action) => {
            state.fieldList.push(action.payload);
            const fieldList = window.localStorage.getItem("fieldList");
            if (fieldList) {
                const fieldListArr = JSON.parse(fieldList);
                fieldListArr.push({
                ...action.payload,
                });
                window.localStorage.setItem("fieldList", JSON.stringify(fieldListArr));
            } else {
                window.localStorage.setItem(
                    "fieldList",
                    JSON.stringify([{ ...action.payload }])
                );
            }
        },

        deleteField: (state, action) => {
            // state.fieldList.push(action.payload);
            const fieldList = window.localStorage.getItem("fieldList");
            if (fieldList) {
              const fieldListArr = JSON.parse(fieldList);
              fieldListArr.forEach((field, index) => {
                if (field.id === action.payload) {
                    fieldListArr.splice(index, 1);
                    console.log('Delete', index)
                }
                else {console.log('False', index)}
              });
              window.localStorage.setItem("fieldList", JSON.stringify(fieldListArr));
              state.fieldList = fieldListArr;
            }
        },
    }
});

export const {addField, deleteField} = fieldInfoSlice.actions;

export default fieldInfoSlice.reducer