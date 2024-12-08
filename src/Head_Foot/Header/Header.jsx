import "./Header.css";
import { useReducer } from "react";
import { reducer, ACTIONS } from "./MenuReducer";

function Header() {
  const [state, dispatch] = useReducer(reducer, { visibleItem: "" });

  const handleToggle = (menuName) => {
    dispatch({
      type: ACTIONS.TOGGLE_MENU,
      payload: menuName === state.visibleItem ? "" : menuName,
    });
  };

  return (
    <>
      <header id="Header">
        <div id="Header_icon">
          <img src="./src/assets/__ia_thumb.png" alt="Icon" />
        </div>
        <ul id="Header_list">
          <li className="Header_list_element">Betting Sites</li>
          <li
            onClick={() => handleToggle("State_Menu")}
            className="Header_list_element"
          >
            Bet By State <img src="./src/assets/Vector.png" alt="" />
            {state.visibleItem === "State_Menu" && (
              <div className="dropdown" id="State_Menu">
                States Dropdown Content
              </div>
            )}
          </li>
          <li
            onClick={() => handleToggle("Sports_Menu")}
            className="Header_list_element"
          >
            Sports <img src="./src/assets/Vector.png" alt="" />
            {state.visibleItem === "Sports_Menu" && (
              <div className="dropdown" id="Sports_Menu">
                Sports Dropdown Content
              </div>
            )}
          </li>
          <li
            onClick={() => handleToggle("Odds_Menu")}
            className="Header_list_element"
          >
            Odds <img src="./src/assets/Vector.png" alt="" />
            {state.visibleItem === "Odds_Menu" && (
              <div className="dropdown" id="Odds_Menu">
                Odds Dropdown Content
              </div>
            )}
          </li>
          <li
            onClick={() => handleToggle("Other_Menu")}
            className="Header_list_element"
          >
            Other <img src="./src/assets/Vector.png" alt="" />
            {state.visibleItem === "Other_Menu" && (
              <div className="dropdown" id="Other_Menu">
                Other Dropdown Content
              </div>
            )}
          </li>
        </ul>
      </header>
      <div id="Search_icon_Box">
        <img src="./src/assets/search-icon.png" alt="Search Icon" />
      </div>
      <div id="Menu_icon_Box">
        <img src="./src/assets/menu icon.svg" alt="Menu Icon" />
      </div>
    </>
  );
}

export default Header;
