import { TypedUseSelectorHook, useDispatch as useDispatchJS, useSelector as useSelectorJS } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = () => useDispatchJS<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorJS