import React from 'react';
import styled from 'styled-components';

import CustomFont from '../components/CommonComponents/CustomFont';
import CustomColumn from '../components/CommonComponents/CustomColumn';

import MyInfo from './myInfo';
import MyAward from './myAward';
import MyClub from './myClub';
import MySkill from './mySkill';

const Divider = styled.div`
    background-color: #666666;
    height: 1px;
    width: 95%;
`;

const MainPage = () => {

    return (

        <CustomColumn $width='100%' $alignItems='center' $justifyContent='flex-start' $gap='2rem'>
            <MyInfo />
            <Divider />
            <MyAward />
            <Divider />
            <MyClub />
            <Divider />
            <MySkill />
        </CustomColumn>

    );
};

export default MainPage;