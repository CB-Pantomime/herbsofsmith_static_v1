
import React from 'react';

const Home = () => {
    return (
       <div className='home-main'>
        <a href='/'>
            <img src='https://res.cloudinary.com/dxov7pk4a/image/upload/v1673913026/Herbs%20Of%20Smith/HoS_BLK_logo_j0lsmz.png'
                alt='herbs of smith logo'
                className='home-link-logo'
            ></img>
            </a>
        <h1 className='home-title'>inspired to return nature and magic to everyday rituals</h1>
        {/* <h2 className='home-blurb'>some more blurb</h2> */}
        <h3 className='home-blurb-etsy'>
            find us on
            <a href='https://www.etsy.com/shop/HerbsofSmith?ref=shop_sugg_market'
            target="_blank"
            className='home-blurb-link'
            >etsy</a>
          </h3>
        <h3 className='home-blurb-ig'>follow us on<a href='https://www.instagram.com/herbsofsmith/'
            className='home-blurb-link'
            target="_blank"
            >ig</a></h3>
            <h3 className='home-blurb-comingsoon'>web store arriving in spring
          </h3>

        {/* <h4 className='home-blurb'>
            stockist<a href='/contact' className='home-blurb-link'>inquiry</a>
            </h4> */}
       </div>
    )
};

export default Home;