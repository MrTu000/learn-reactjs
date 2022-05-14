const { createSlice } = require("@reduxjs/toolkit");


const CounterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        increase(state, action) {
            return state + 1
        },

        decrease(state, action) {
            return state - 1
        }
    }
})

const { actions, reducer } = CounterSlice
export const { increase, decrease } = actions
export default reducer