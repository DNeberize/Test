export const ACTIONS = {
  TOGGLE_STATES: "toggle_states",
  TOGGLE_SPORTS: "toggle_sports",
  TOGGLE_ODDS: "toggle_odds",
  TOGGLE_OTHER: "toggle_other",
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_STATES:
      return {
        visibleItem: state.visibleItem === "State_Menu" ? "" : "State_Menu",
      };
    case ACTIONS.TOGGLE_SPORTS:
      return {
        visibleItem: state.visibleItem === "Sports_Menu" ? "" : "Sports_Menu",
      };
    case ACTIONS.TOGGLE_ODDS:
      return {
        visibleItem: state.visibleItem === "Odds_Menu" ? "" : "Odds_Menu",
      };
    case ACTIONS.TOGGLE_OTHER:
      return {
        visibleItem: state.visibleItem === "Other_Menu" ? "" : "Other_Menu",
      };
    default:
      return state;
  }
}
