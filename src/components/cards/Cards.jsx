import { useEffect, useRef, useState } from 'react';
import './Cards.css';
import { IoIosSearch } from "react-icons/io";
import sun from '../../accets/cards/sun.png'


function Cards() {
    return (
        <div className='cards'>
            <div className='cards-location'>
                <p className="cards-location-city">Orlando</p>
                <p className="cards-loactation-country">U.S.A</p>
            </div>
            <div className="cards-time">
                <p className="cards-time-timer">14:00</p>
            </div>
            <div className="cards-forcast">
                <button className="cards-forcast-hourly">Hourly forcast</button>
                <button className="cards-forcast-weekly">Weekly forcast</button>
            </div>
            <div className="cards-fact">
                <p className="cards-fact-date">1/25/2026</p>
                <div className="cards-fact-line">|</div>
                <p className="cards-fact-day">Sunday</p>
            </div>
            <div className="cards-main">
                <img src={sun} alt="sun" className="cards-main-logo" />
                <p className="cards-main-temp">9999*C</p>
            </div>
            <div className="icons">
                <button className="icons-see"> See more </button>
            </div>

        </div>
        // <header className='header'>
        //     <h1 className="header-title">Weather dashboard</h1>
        //     <div className="header-desc">
        //         <p className="header-desc-title">Create your personal list of favorite cities and always be aware of the weather.</p>
        //         <span className="header-desc-vertical-line"></span>
        //         <p ref={date} className="header-desc-date"></p>
        //          {date.toLocaleString()}
        //     </div>
        //     <form className="header-search" onSubmit={handleSearch}>
        //         <input type="text" placeholder='Search location...' className='header-search-weather'/>
        //         <button className="header-search-find">
        //             <IoIosSearch className='header-search-find-icon'/>
        //         </button>
        //     </form>
        // </header>
    )
}
export default Cards