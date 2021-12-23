import store from './redux/store';

export const loadApp = () => {
    store.dispatch({ type: 'APP_READY', payload: { ready: true} });
}
