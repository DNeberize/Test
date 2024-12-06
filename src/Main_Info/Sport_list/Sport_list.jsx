import "./Sport_list.css";
import Print_Element from "./List_Elements/PrintListElements";
function Sport_list() {
  return (
    <>
      <div id="text_box">
        <div>
          <h2>Popular Right Now</h2>
          <p>
            What is popular right now? Here's a list of what our visitors are
            betting on right now.
          </p>
        </div>

        <div id="sports">
          <ul id="list">
            <Print_Element />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sport_list;
