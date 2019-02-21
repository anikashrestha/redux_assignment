const initailState={
    theme: "themeLight",
}
function ThemeReducer(state=initailState,action) {
  switch (action.type) {
        case 'themeLight':
        return {...state,theme:"themeDark"};

        case 'themeDark' :
            return {...state,theme:"themeLight"};
        default:
        return state;
    }
}
export  default ThemeReducer;
