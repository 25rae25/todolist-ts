import { configureStore } from '@reduxjs/toolkit'
import { slice } from './slice/slice'

export const store = configureStore({
	reducer: {
		todos : slice.reducer,
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch