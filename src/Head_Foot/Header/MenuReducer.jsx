export const ACTIONS = {
  TOGGLE_MENU: "toggle_menu",
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_MENU:
      return {
        visibleItem: state.visibleItem === action.payload ? "" : action.payload,
      };
    default:
      return state;
  }
}
