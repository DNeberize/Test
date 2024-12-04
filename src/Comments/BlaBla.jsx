import './BlaBla.css'
import { useEffect, useState } from 'react'




function BlaBla(){
  const [Comments, setComments] = useState([])
  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/comments/')
    .then(res => res.json()) 
    .then(data => {
     
      setComments(data.slice(0, 20))
    })

}, []);
 const Coms = () => {
    if (Comments.length === 0) {
      return (
        <>
          <h2>Loading...</h2>
          <p>Loading Comment...</p>
        </>
      );
    }

    return Comments.map((Com, index) => (
      <div className='Comment_Box' key={index}>
        <h2 className='HH' >{Com.name}</h2>
        <p className='pp' >{Com.body}</p>
      </div>
    ));
  };

  return(<>
  <section id='blabla'>
    <Coms/>
    <div className='Comment_Box'>
      <h2 className='HH'>
    Expert Picks & Previews
    </h2>
    <p className='pp'>
    The online betting experts we work with are unrivalled and love to provide picks on all major leagues in the U.S. for free. They eat, sleep, and breathe sports stats 24/7 to make sure you get the most accurate picks and previews throughout the season, playoffs, and finals. Want to know who’s hot and who’s not? Our professional handicappers know. Looking for bet calculators to help you with your online sports betting? We have all the online betting tools you’ll ever need. Keep going down this page for more info about the sportsbooks we’ve partnered with, their promo codes, and hottest promotions.
    </p>
    
    
   
      <h2 className='HH'>
      Improve Your Chances Of Winning With Our Online Betting Tools </h2>
     <p className='pp'>
      Expand your arsenal with our incredible online betting tools to vastly improve your chances of placing winning bets. We’ve put together a toolbox with the best betting calculators, parlay- and bonus generator, but this is barely scratching the surface. Do you track your bets in a spread sheet? Join the 21st century and upload your online betting history to our betting portfolio and keep track of everything in a single place. Seriously, our betting tools are state-of-the-art and will not only improve your success rate, but they will also help you with your bankroll management.
      </p>
    
    
     <h2 style={{fontSize: "20px",marginLeft: '20PX'}} className='HH'>
      2. Register accounts with our partnered sportsbook
    </h2>
    <p className='pp'>When it comes to creating betting accounts, why not cast the net wide with multiple betting sites? It gives you access to an even larger selection of markets and peace of mind that you’re getting the best price in the market. 

    If you’re looking for the best online sports betting on NBA or NFL, for example, one sportsbook may stand out with more markets to engage. Because sportsbooks are competing for customers, you’ll always have an advantage since you’re free to compare odds between them. This will do most of the heavy lifting for you in terms of getting the best potential payout every time you win.
    <br /><br />
    (Remember, registering accounts with multiple sportsbooks should not be considered a pathway to undisciplined wagering or a guarantee of winning bets. It simply puts a sharper spotlight on the  best deals available.)
    <br /><br />
    Rest assured that the Betting.com team has carefully vetted and reviewed each of our partnered sportsbooks, making sure the wagering experience meets our high standards. You’ll find information on each sportsbook on our site, and our assessments touch on the following features:
    </p>

    <div id='marks'>
      <div>
        <img className='icon' src=".\src\assets\gift icon.png" alt="" />
        <section>
         <h2 style={{fontSize: "16px",margin:'0',marginLeft: '10px',width: '370px'}} className='HH'>
          Promotions </h2>
          <p style={{margin:'0',marginLeft: '10px',width: '370px'}} className='pp'>
            Promotions, including free bets and deposit bonuses, are a nice perk. We flag the latest offers so you’re always in the know.</p>

        </section>
 
      </div>
      <div>
         <img className='icon' src=".\src\assets\alert.png" alt="" />
         <section>
         <h2 style={{fontSize: "16px",margin:'0',marginLeft: '10px',width: '370px'}} className='HH'>
          Licenses </h2>
          <p style={{margin:'0',marginLeft: '10px',width: '370px'}} className='pp'>This likely goes without saying, but we’ll say it anyway! We always verify that each sportsbook we review (and partner with) is licensed.</p>

        </section>
      </div>
            <div>
        <img className='icon' src=".\src\assets\ball.png" alt="" />
        <section>
         <h2 style={{fontSize: "16px",margin:'0',marginLeft: '10px',width: '370px'}} className='HH'>
          Licenses </h2>
          <p style={{margin:'0',marginLeft: '10px',width: '370px'}} className='pp'>This likely goes without saying, but we’ll say it anyway! We always verify that each sportsbook we review (and partner with) is licensed.</p>

        </section>
 
      </div>
      <div>
         <img className='icon' src=".\src\assets\paper.png" alt="" />
         <section>
         <h2 style={{fontSize: "16px",margin:'0',marginLeft: '10px',width: '370px'}} className='HH'>
          Mobile Friendly/App </h2>
          <p style={{margin:'0',marginLeft: '10px',width: '370px'}} className='pp'>This is probably where you’ll spend most of your time on our site. We’ve tried to make it as easy as possible to follow.</p>

        </section>
      </div>
            <div>
        <img className='icon' src=".\src\assets\phone.png" alt="" />
        <section>
         <h2 style={{fontSize: "16px",margin:'0',marginLeft: '10px',width: '370px'}} className='HH'>
          Customer Service </h2>
          <p style={{margin:'0',marginLeft: '10px',width: '370px'}} className='pp'>Looking for help? We check how you can get in touch with each sportsbook and find out how fast they respond to inquiries.</p>

        </section>
 
      </div>
      <div>
         <img className='icon' src=".\src\assets\headphone.png" alt="" />
         <section>
         <h2 style={{fontSize: "16px",margin:'0',marginLeft: '10px',width: '370px'}} className='HH'>
          Promo Codes </h2>
          <p style={{margin:'0',marginLeft: '10px',width: '370px'}} className='pp'>Everyone’s looking for promo codes and we make a big deal out of only publishing promo codes that are current.</p>

        </section>
      </div>

    </div>
    <h2 className='HH'>
      Sportsbook Free Bets and Promo Codes
    </h2>
    <p className='pp' style={{lineHeight: '2.5'}}>
      Below you will find a large variety of sportsbook promos, welcome bonuses and promo codes. The US market is growing rapidly and we have gathered all the best offers for you in one place! Furthermore, our team of experts have reviewed and given an honest rating for each sportsbook in order to ensure you are playing at the best possible place!
      </p>


</div>


  </section>
  </>)
}
export default BlaBla