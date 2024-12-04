import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Head_Foot/Header/Header.jsx'
import First_Look from './Main_Info/First_look/First_Look.jsx'
import Sport_list from './Main_Info/Sport_list/Sport_list.jsx'
import Books from './Main_Info/Books/Books.jsx'
import Bets from './Main_Info/Bets/Bets.jsx'
import News from './News/News.jsx'
import BlaBla from './Comments/BlaBla.jsx'
import Footer from './Head_Foot/Footer/Footer.jsx'

createRoot(document.getElementById('root')).render(
 <>
    <Header />
    <First_Look/>
    <Sport_list/>
    <Books/>
    <Bets/>
    <News/>
    <BlaBla/>
    <Footer/>
 </> );
