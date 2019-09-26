export const themeActions = (props) => {
  return {
    setColor: (data) => {
      externSetColor(props,data);
    },
    setTheme: (data) => {
      externSetTheme(props,data);
    },
  }
}

function externSetColor(props,data) {
  props.dispatch({ type: "SET_COLOR", data});
}
function externSetTheme(props,data) {
  props.dispatch({ type: "SET_THEME", data});
}