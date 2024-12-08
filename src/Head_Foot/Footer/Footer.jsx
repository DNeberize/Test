import "./Footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div id="Icons_for_Phone">
          <div id="phone_Main_icon">
            <img src="./src/assets/__ia_thumb.png" alt="Icon" />
          </div>
          <div id="phone_link_icons">
            <img src=".\src\assets\facebook icon.png" alt="" />
            <img src=".\src\assets\linkdin icon.png" alt="" />
            <img src=".\src\assets\twitter icon.png" alt="" />
          </div>
        </div>

        <div id="List_of_Lists">
          <div>
            <h2>Company</h2>
            <ul>
              <li>About us</li>
              <li>Terms & conditions</li>
              <li>Cookie Policy</li>
              <li>Become Affiliate</li>
              <li>Frequently asked Questions</li>
            </ul>
          </div>

          <div>
            <h2>Popular Pages</h2>
            <ul>
              <li>Bet by State</li>
              <li>Sports</li>
              <li>Odds</li>
              <li>Picks</li>
              <li>Betting Sites</li>
            </ul>
          </div>

          <div>
            <h2>Popular Sportbooks</h2>
            <ul>
              <li>Soccer Stats</li>
              <li>Sports Stats</li>
              <li>Horse Form</li>
              <li>Sports & Betting news</li>
              <li>Australian Horse Form</li>
            </ul>
          </div>

          <div>
            <h2>Subscribe Today</h2>
            <input placeholder="Enter Email Address" id="email" type="text" />
            <div id="link_icons">
              <img src=".\src\assets\facebook icon.png" alt="" />
              <img src=".\src\assets\linkdin icon.png" alt="" />
              <img src=".\src\assets\twitter icon.png" alt="" />
            </div>
          </div>
        </div>
        <div id="The_end">
          <p>
            Historical results are not an indication of future results. The
            information on Betting.com website is not investment advice.
            Betting.com does not facilitate betting on sports. Betting.com is
            not a bookmaker and does not handle any payments for sports betting
            activities. Values quoted on the site hold no real or implied value.
            <br />
            <br />
            In New Jersey state, Game Lounge Limited possesses a Vendor
            Affiliate License, Vendor ID 91481, issued on 11 June 2019.
            <br />
            <br />© 2022 Betting.com All rights reserved
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
