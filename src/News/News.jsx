
import './news.css'
import NewsList from "../News.json"
const SmallNews = ({Date,Context,Img}) => {
     return(
        <div className='News_context'>
          <p  className='date'>{Date}</p>
          <p className='context'>{Context}</p>
          <img src={Img}  alt="Image not Imaging" />
          
          
        </div>
        )
}
const PrintNews = () => { 
  const LatestNews = NewsList.slice(-5);
  const ReversedNewsArray = [...LatestNews].reverse();
  return ReversedNewsArray.map((news, index) => {
    if (index === 0) { 
      return (
        <section id="one_news" key={index}>
          <SmallNews
            Date={news.Date}
            Context={news.Context}
            Img={news.Image}
          />
        </section>
      );
    } else {
      return (
        <SmallNews
          key={index}
          Date={news.Date}
          Context={news.Context}
          Img={news.Image}
        />
      );
    }
  });
};

function News(){
  return(<>
  <div id='News_box'>
    <div id='News_info'>
      
      <h2>Betting News, Picks & Insights</h2>
      <p>The latest news, picks & insights sorted by publish date from our expert team.</p>

    </div>
    <div id='News'>
      <div className='two_news'>
        <PrintNews/>
      </div>
    </div>

  </div>
  </>)
}

export default News