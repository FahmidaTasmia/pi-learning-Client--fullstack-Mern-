import React from 'react';

import Courses from '../../Course/Courses/Courses';
import NewsLetter from '../../Course/NewsLetter/NewsLetter';
import Pricing from '../../Course/Pricing/Pricing';
import AnotherSec from '../AnotherSec/AnotherSec';
import Banner from '../Banner/Banner';

import Team from '../Team/Team';
import WhatDo from '../WhatDo/WhatDo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           
            <WhatDo></WhatDo>
            <Courses></Courses>
            <Team></Team>
            <AnotherSec></AnotherSec>
            <Pricing></Pricing>

            <NewsLetter></NewsLetter>
           
        </div>
    );
};

export default Home;