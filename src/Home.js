import React from 'react';
import Product from './Product';
import './Home.css';

const Home = () => {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />
            <div className="home__row">
                <Product
                    id="12345"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                />
                <Product
                    id="123456"
                    title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
                    price={369.95}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41DQoLIfsRL._AC_US218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="1234567"
                    title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler"
                    price={289.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51wpN1SESrL._AC_US160_.jpg"
                />
                <Product
                    id="12345678"
                    title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox (STGX2000400)"
                    price={59.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL._AC_US160_.jpg"
                />
                <Product
                    id="12345"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="12345"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
                />
            </div>
        </div>
    );
};

export default Home;