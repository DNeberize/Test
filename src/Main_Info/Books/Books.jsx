import './Books.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const Sigle =({BColor}) =>{
  return(<>
                <li style={{ backgroundColor: BColor }}>
                <img src="./src/assets/bet365.png" alt="" />
                <h5 className="bet-info">bet $1 & get $200 in free bets!</h5>
                <div className="bbox">
                  <button className="visit_btn">Visit</button>
                  <button
                    style={{ backgroundColor: BColor }}
                    className="review_btn">Review </button>
                  <div className="star-icon">
                    <input type="radio" name="rating2" id="rating2-1" />
                    <label htmlFor="rating2-1" className="fas fa-star"></label>
                    <input type="radio" name="rating2" id="rating2-2" />
                    <label htmlFor="rating2-2" className="fas fa-star"></label>
                    <input type="radio" name="rating2" id="rating2-3" />
                    <label htmlFor="rating2-3" className="fas fa-star"></label>
                    <input type="radio" name="rating2" id="rating2-4" />
                    <label htmlFor="rating2-4" className="fas fa-star"></label>
                    <input type="radio" name="rating2" id="rating2-5" />
                    <label htmlFor="rating2-5" className="fas fa-star"></label>
                  </div>
                </div>
              </li>
  </>)
}
function Books() {
  return (
    <>
      <div id="Books">
        <div id="Books1">
          <h2>Betting Sportsbooks</h2>
          <p id="book_txt">
            We do rigorous testing of the betting sites that we recommend,
            their rating are honest and based on multiple experiences within
            our team of experts.
          </p>
          <div id="books_list">
            <ul>
             
              <Sigle BColor={'rgba(5, 112, 78, 1)'} />

              <Sigle BColor={'rgba(37, 37, 37, 1)'} />

              <Sigle BColor={'rgba(5, 112, 78, 1)'} />

            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Books;
