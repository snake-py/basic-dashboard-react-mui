import { createStore, applyMiddleware  } from 'redux';
import reducers from './reducers/reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { TypedUseSelectorHook, useDispatch as useDispatchJS, useSelector as useSelectorJS } from 'react-redux'


export const middlewares = [thunk]

export const reducerStore = createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));


export type RootState = ReturnType<typeof reducerStore.getState>
export type AppDispatch = typeof reducerStore.dispatch

export const useCustomDispatch = () => useDispatchJS<AppDispatch>()
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelectorJS