import React from 'react';
import AnotherSec from '../AnotherSec/AnotherSec';
import Banner from '../Banner/Banner';
import Team from '../Team/Team';
import WhatDo from '../WhatDo/WhatDo';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhatDo></WhatDo>
            <Team></Team>
            <AnotherSec></AnotherSec>
        </div>
    );
};

export default Home;