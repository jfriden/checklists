import {configureStore} from "@reduxjs/toolkit"
import listsReducer from "./slices/listsSlice"
import entriesReducer from "./slices/entriesSlice"

export const store = configureStore({
  reducer: {
    lists: listsReducer,
    entries: entriesReducer
  }
})