import "./news.css";
import PrintNews from "./PrintNews/PrintNews";

function News() {
  return (
    <>
      <div id="News_box">
        <div id="News_info">
          <h2>Betting News, Picks & Insights</h2>
          <p>
            The latest news, picks & insights sorted by publish date from our
            expert team.
          </p>
        </div>
        <div id="News">
          <div className="News_Grid">
            <PrintNews />
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
