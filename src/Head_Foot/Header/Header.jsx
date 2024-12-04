import './Header.css';
import { useReducer } from 'react';

const ACTIONS = {
  TOGGLE_STATES: "toggle_states",
  TOGGLE_SPORTS: "toggle_sports",
  TOGGLE_ODDS: "toggle_odds",
  TOGGLE_OTHER: "toggle_other"
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_STATES:
      return { visibleItem: state.visibleItem === "one" ? "" : "one" };
    case ACTIONS.TOGGLE_SPORTS:
      return { visibleItem: state.visibleItem === "two" ? "" : "two" };
    case ACTIONS.TOGGLE_ODDS:
      return { visibleItem: state.visibleItem === "three" ? "" : "three" };
    case ACTIONS.TOGGLE_OTHER:
      return { visibleItem: state.visibleItem === "four" ? "" : "four" };
    default:
      return state;
  }
}

function Header() {
  const [state, dispatch] = useReducer(reducer, { visibleItem: "" });

  const handleToggle = (actionType) => {
    dispatch({ type: actionType });
  };

  return (
    <>
      <header id="Header">
        <div id="Header_icon">
          <img src="./src/assets/__ia_thumb.png" alt="Icon" />
        </div>
        <div id="Header_list_container">
          <ul id="Header_list">
            <li className="Header_list_element">Betting Sites</li>
            <li
              onClick={() => handleToggle(ACTIONS.TOGGLE_STATES)}
              className="Header_list_element"
            >
              Bet By State <p>&#8964;</p>
            </li>
            <li
              onClick={() => handleToggle(ACTIONS.TOGGLE_SPORTS)}
              className="Header_list_element"
            >
              Sports <p>&#8964;</p>
            </li>
            <li
              onClick={() => handleToggle(ACTIONS.TOGGLE_ODDS)}
              className="Header_list_element"
            >
              Odds <p>&#8964;</p>
            </li>
            <li
              onClick={() => handleToggle(ACTIONS.TOGGLE_OTHER)}
              className="Header_list_element"
            >
              Other <p>&#8964;</p>
            </li>
          </ul>
          <ul className="menu">
            <li
              id="one"
              style={{ visibility: state.visibleItem === "one" ? "visible" : "hidden" }}
            >
              States
            </li>
            <li
              id="two"
              style={{ visibility: state.visibleItem === "two" ? "visible" : "hidden" }}
            >
              Sports
            </li>
            <li
              id="three"
              style={{ visibility: state.visibleItem === "three" ? "visible" : "hidden" }}
            >
              Odds
            </li>
            <li
              id="four"
              style={{ visibility: state.visibleItem === "four" ? "visible" : "hidden" }}
            >
              Other
            </li>
          </ul>
        </div>
        <div id="secend_half">
          <img src="./src/assets/search-icon.png" alt="Search Icon" />
        </div>
      </header>
    </>
  );
}

export default Header;
