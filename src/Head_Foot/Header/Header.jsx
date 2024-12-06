import "./Header.css";
import { useReducer } from "react";
import { reducer, ACTIONS } from "./MenuReducer";

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
              id="State_Menu"
              style={{
                visibility:
                  state.visibleItem === "State_Menu" ? "visible" : "hidden",
              }}
            >
              States
            </li>
            <li
              id="Sports_Menu"
              style={{
                visibility:
                  state.visibleItem === "Sports_Menu" ? "visible" : "hidden",
              }}
            >
              Sports
            </li>
            <li
              id="Odds_Menu"
              style={{
                visibility:
                  state.visibleItem === "Odds_Menu" ? "visible" : "hidden",
              }}
            >
              Odds
            </li>
            <li
              id="Other_Menu"
              style={{
                visibility:
                  state.visibleItem === "Other_Menu" ? "visible" : "hidden",
              }}
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
