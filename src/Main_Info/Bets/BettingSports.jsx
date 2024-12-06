import "./BettingSports.css";
function Bets() {
  return (
    <>
      <div id="Bets">
        <div id="Bets1">
          <h2>Bet on Everything</h2>
          <p>
            Browse the most popular league & sports that we provide extensive
            betting guides,sportsbooks reviews & predictions for.{" "}
          </p>
          <div id="Bets_list">
            <ul>
              <li>
                <img src=".\src\assets\img boxing.png" alt="" />
                <p>Boxing Betting</p>
              </li>
              <li>
                <img src=".\src\assets\img golf.png" alt="" />
                <p>Golf Betting</p>
              </li>
              <li>
                <img src=".\src\assets\img formula.png" alt="" />
                <p>Formula 1 Betting</p>
              </li>
              <li>
                <img src=".\src\assets\img horse racing.png" alt="" />
                <p>Horse Racing Betting</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Bets;
