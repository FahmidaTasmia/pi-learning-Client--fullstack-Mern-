import React from 'react';

import Courses from '../../Course/Courses/Courses';
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
           
        </div>
    );
};

export default Home;