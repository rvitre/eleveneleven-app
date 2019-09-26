import { themeActions } from './themeActions';
import { navActions } from './navActions';

export const useActions = (state, dispatch) => {
  return {
    themeActions: themeActions({state,dispatch}),
    navActions: navActions({state,dispatch})
  }
};