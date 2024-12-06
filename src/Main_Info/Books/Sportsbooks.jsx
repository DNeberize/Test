import "./Sportsbooks.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Print_Sport_Book from "./PrintBookBox/PrintBookBox";
function Books() {
  return (
    <>
      <div id="Books">
        <div id="Books1">
          <h2>Betting Sportsbooks</h2>
          <p id="book_txt">
            We do rigorous testing of the betting sites that we recommend, their
            rating are honest and based on multiple experiences within our team
            of experts.
          </p>
          <div id="books_list">
            <ul>
              <Print_Sport_Book BColor={"rgba(5, 112, 78, 1)"} />

              <Print_Sport_Book BColor={"rgba(37, 37, 37, 1)"} />

              <Print_Sport_Book BColor={"rgba(5, 112, 78, 1)"} />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Books;
