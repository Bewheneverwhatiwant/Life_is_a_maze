import React from 'react';
import styled from 'styled-components';

import CustomFont from '../components/CommonComponents/CustomFont';
import CustomColumn from '../components/CommonComponents/CustomColumn';
import CustomRow from '../components/CommonComponents/CustomRow';

const MyLisence = () => {

    return (

        <CustomColumn $width='95%' $alignItems='flex-start' $justifyContent='flex-start' $gap='1.5rem'>
            <CustomFont $color='white' $font='2rem' $fontWeight='bold'>
                자격증 및 시험
            </CustomFont>

            <CustomColumn $width='100%' $alignItems='flex-start'>
                <CustomFont $color='white' $font='1rem'>TOEIC ???점</CustomFont>
                <CustomFont $color='white' $font='1rem'>FLEX 독일어 ???점</CustomFont>
                <CustomFont $color='white' $font='1rem'>TOPCIT ???점</CustomFont>
            </CustomColumn>
        </CustomColumn>

    );
};

export default MyLisence;