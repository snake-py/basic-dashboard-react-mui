import { createStore, applyMiddleware  } from 'redux';
import reducers from './reducers/reducers';
import thunk from 'redux-thunk';

export const middlewares = [thunk]

const store = createStore(reducers, applyMiddleware(...middlewares));

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch