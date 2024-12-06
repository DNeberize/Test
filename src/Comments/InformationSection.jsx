import "./InformationSection.css";
import Print_Information from "./PrintInformation/PrintInformation";

function InfoBox() {
  return (
    <>
      <section id="Information_Section">
        <Print_Information TextCount={25} />
        <div className="Information_Box">
          <div id="marks">
            <div>
              <img className="icon" src=".\src\assets\gift icon.png" alt="" />
              <section>
                <h2
                  style={{
                    fontSize: "16px",
                    margin: "0",
                    marginLeft: "10px",
                    width: "370px",
                  }}
                  className="Header_Text"
                >
                  Promotions{" "}
                </h2>
                <p
                  style={{ margin: "0", marginLeft: "10px", width: "370px" }}
                  className="Paragraph_Text"
                >
                  Promotions, including free bets and deposit bonuses, are a
                  nice perk. We flag the latest offers so you’re always in the
                  know.
                </p>
              </section>
            </div>
            <div>
              <img className="icon" src=".\src\assets\alert.png" alt="" />
              <section>
                <h2
                  style={{
                    fontSize: "16px",
                    margin: "0",
                    marginLeft: "10px",
                    width: "370px",
                  }}
                  className="Header_Text"
                >
                  Licenses{" "}
                </h2>
                <p
                  style={{ margin: "0", marginLeft: "10px", width: "370px" }}
                  className="Paragraph_Text"
                >
                  This likely goes without saying, but we’ll say it anyway! We
                  always verify that each sportsbook we review (and partner
                  with) is licensed.
                </p>
              </section>
            </div>
            <div>
              <img className="icon" src=".\src\assets\ball.png" alt="" />
              <section>
                <h2
                  style={{
                    fontSize: "16px",
                    margin: "0",
                    marginLeft: "10px",
                    width: "370px",
                  }}
                  className="Header_Text"
                >
                  Licenses{" "}
                </h2>
                <p
                  style={{ margin: "0", marginLeft: "10px", width: "370px" }}
                  className="Paragraph_Text"
                >
                  This likely goes without saying, but we’ll say it anyway! We
                  always verify that each sportsbook we review (and partner
                  with) is licensed.
                </p>
              </section>
            </div>
            <div>
              <img className="icon" src=".\src\assets\paper.png" alt="" />
              <section>
                <h2
                  style={{
                    fontSize: "16px",
                    margin: "0",
                    marginLeft: "10px",
                    width: "370px",
                  }}
                  className="Header_Text"
                >
                  Mobile Friendly/AParagraph_Text{" "}
                </h2>
                <p
                  style={{ margin: "0", marginLeft: "10px", width: "370px" }}
                  className="Paragraph_Text"
                >
                  This is probably where you’ll spend most of your time on our
                  site. We’ve tried to make it as easy as possible to follow.
                </p>
              </section>
            </div>
            <div>
              <img className="icon" src=".\src\assets\phone.png" alt="" />
              <section>
                <h2
                  style={{
                    fontSize: "16px",
                    margin: "0",
                    marginLeft: "10px",
                    width: "370px",
                  }}
                  className="Header_Text"
                >
                  Customer Service{" "}
                </h2>
                <p
                  style={{ margin: "0", marginLeft: "10px", width: "370px" }}
                  className="Paragraph_Text"
                >
                  Looking for help? We check how you can get in touch with each
                  sportsbook and find out how fast they respond to inquiries.
                </p>
              </section>
            </div>
            <div>
              <img className="icon" src=".\src\assets\headphone.png" alt="" />
              <section>
                <h2
                  style={{
                    fontSize: "16px",
                    margin: "0",
                    marginLeft: "10px",
                    width: "370px",
                  }}
                  className="Header_Text"
                >
                  Promo Codes{" "}
                </h2>
                <p
                  style={{ margin: "0", marginLeft: "10px", width: "370px" }}
                  className="Paragraph_Text"
                >
                  Everyone’s looking for promo codes and we make a big deal out
                  of only publishing promo codes that are current.
                </p>
              </section>
            </div>
          </div>
          <h2 className="Header_Text">Sportsbook Free Bets and Promo Codes</h2>
          <p className="Paragraph_Text" style={{ lineHeight: "2.5" }}>
            Below you will find a large variety of sportsbook promos, welcome
            bonuses and promo codes. The US market is growing rapidly and we
            have gathered all the best offers for you in one place! Furthermore,
            our team of experts have reviewed and given an honest rating for
            each sportsbook in order to ensure you are playing at the best
            possible place!
          </p>
        </div>
      </section>
    </>
  );
}
export default InfoBox;
