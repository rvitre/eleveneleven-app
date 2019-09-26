export const navActions = (props) => {
  return {
    setCurrentRoute: (data) => {
      props.dispatch({ type: "SET_CURRENT_ROUTE", data});
    },
  }
}