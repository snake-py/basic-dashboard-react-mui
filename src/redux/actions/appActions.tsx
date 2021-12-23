import store from '../store';

export const switchTheme = (darkMode: boolean) => (dispatch: Function) => {
    console.log("switchTheme: ", darkMode);    
    dispatch({ type: 'SWITCH_THEME', payload: { darkMode: darkMode} });
};
