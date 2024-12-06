export default function Print_Sport_Book({ BColor }) {
  return (
    <>
      <li style={{ backgroundColor: BColor }}>
        <img src="./src/assets/bet365.png" alt="" />
        <h5 className="bet-info">bet $1 & get $200 in free bets!</h5>
        <div className="bbox">
          <button className="visit_btn">Visit</button>
          <button style={{ backgroundColor: BColor }} className="review_btn">
            Review{" "}
          </button>
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
    </>
  );
}
