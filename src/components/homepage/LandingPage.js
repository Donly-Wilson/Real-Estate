import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class LandingPage extends Component {
    render() {
        return (
            <div className="jumbo">
            <div className="jumbo__background">
                <div className="jumbo__background__image">
                    <picture>
                        <source srcset="/img/apartment.webp" type="image/webp"/>
                        <source srcset="/img/apartment.jpg" type="image/jpeg"/> 
                        <img src="/img/apartment.jpg" alt="apartment"/>
                    </picture>
                    {/* <img src="http://studio-bonsai.com/wp-content/uploads/2016/03/night_cam2_web.jpg" alt="apartment"/> */}
                </div>
                <div className="jumbo__background__overlay"></div>
            </div>
            <div className="jumbo__info">
                <div className="container">
                    <p className="jumbo__info__intro">We will help you find your <span>wonderful</span> home</p>
                    <div className="jumbo__info__search">
                        <div className="">
                            <select className="property__select__picker" data-style="btn-info">
                                <option>New Constraction Property</option>
                                <option>Old Constraction Property</option>
                                <option>All Constraction Property</option>
                            </select>
                        </div>
                        <div className="">
                            <select className="option__select__picker" data-style="btn-info">
                                <option>Buy(590)</option>
                                <option>Rent(203)</option>
                                <option>Sell(1)</option>
                            </select>
                        </div>
                        <div className="search__field">
                            <svg className="search__field__icon" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeLinecap="round"
                                    strokeLinejoin="round" strokeWidth="1.5"></circle>
                                <path fill="currentColor"
                                    d="M18.7197 19.7803C19.0126 20.0732 19.4874 20.0732 19.7803 19.7803C20.0732 19.4874 20.0732 19.0126 19.7803 18.7197L18.7197 19.7803ZM14.9697 16.0303L18.7197 19.7803L19.7803 18.7197L16.0303 14.9697L14.9697 16.0303Z">
                                </path>
                            </svg>
                            <input placeholder="Enter city,street,zip code" type="text"/>
                        </div>
                        <Link to="/homes">
                            <div className="jumbo__info__search__button">
                                535 properties found
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"></path>
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="1.5" d="M19 12H4.75"></path>
                                </svg>
                            </div>
                        </Link>
                    </div>
                    <div className="jumbo__info__requests">
                        <div className="jumbo__info__requests__one">
                            <span className="jumbo__info__requests__one-icon">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeLinecap="round"
                                        strokeLinejoin="round" strokeWidth="1.5"></circle>
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M6.8475 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6408 17.2584C17.8563 15.7731 16.068 14 12 14C7.93201 14 6.14367 15.7731 5.35924 17.2584C4.82597 18.2681 5.70558 19.25 6.8475 19.25Z">
                                    </path>
                                </svg>
                            </span>
                            <div className="jumbo__info__requests__one-largeText">
                                <p>Want to sell a house in St.Lucia?</p>
                                <button>
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"></path>
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="1.5" d="M19 12H4.75"></path>
                                    </svg>
                                </button>
                            </div>
                            <p className="jumbo__info__requests__one-miniText">Call the broker for a quote!</p>
                        </div>
                        <div className="jumbo__info__requests__two">
                            <span className="jumbo__info__requests__one-icon">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z">
                                    </path>
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z">
                                    </path>
                                </svg>
                            </span>
                            <div className="jumbo__info__requests__one-largeText">
                                <p>What is the value of your home?</p>
                                <button>
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="1.5" d="M13.75 6.75L19.25 12L13.75 17.25"></path>
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                            strokeWidth="1.5" d="M19 12H4.75"></path>
                                    </svg>
                                </button>
                            </div>
                            <p className="jumbo__info__requests__one-miniText"> Calculate the estimated value!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
