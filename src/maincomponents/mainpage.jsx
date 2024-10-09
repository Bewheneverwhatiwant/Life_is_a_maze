import React from 'react';
import styled from 'styled-components';

import CustomFont from '../components/CommonComponents/CustomFont';
import CustomColumn from '../components/CommonComponents/CustomColumn';
import CustomRow from '../components/CommonComponents/CustomRow';

import MyInfo from './myInfo';
import MyAward from './myAward';
import MyClub from './myClub';
import MySkill from './mySkill';
import MyLisence from './myLisence';

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
            <CustomRow $width='95%' $justifyContent='space-between' $alignItems='flex-start'>
                <MyAward />
                <MyClub />
            </CustomRow>
            <Divider />
            <MySkill />
            <Divider />
            <MyLisence />
        </CustomColumn>

    );
};

export default MainPage;