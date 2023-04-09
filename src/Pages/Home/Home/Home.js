import React from 'react';
import Expert from '../../About/Expert';

import Courses from '../../Course/Courses/Courses';
import NewsLetter from '../../Course/NewsLetter/NewsLetter';
import Pricing from '../../Course/Pricing/Pricing';
import AnotherSec from '../AnotherSec/AnotherSec';
import Banner from '../Banner/Banner';

import Team from '../Team/Team';
import WhatDo from '../WhatDo/WhatDo';
import useTitle from './../../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
           
            <WhatDo></WhatDo>
            <Courses></Courses>
            <Team></Team>
            <AnotherSec></AnotherSec>
            <Pricing></Pricing>
            <div className='pb-10 pt-20'>
            <Expert></Expert>
            </div>
           
            <NewsLetter></NewsLetter>
           
        </div>
    );
};

export default Home;