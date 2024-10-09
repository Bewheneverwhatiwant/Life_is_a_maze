import React from 'react';
import styled from 'styled-components';

import CustomFont from '../components/CommonComponents/CustomFont';
import CustomColumn from '../components/CommonComponents/CustomColumn';

const MyClub = () => {

    return (

        <CustomColumn $width='50%' $alignItems='flex-start' $justifyContent='flex-start' $gap='1.5rem'>
            <CustomFont $color='white' $font='2rem' $fontWeight='bold'>
                동아리 활동
            </CustomFont>

            <CustomColumn $width='100%' $alignItems='flex-start' $justifyContent='center' gap='0.5rem'>
                <CustomFont $color='white' $font='1rem'>2022.09-2023.03 GDSC HUFS 4기</CustomFont>
                <CustomFont $color='white' $font='1rem'>2023.01-2023.12 멋쟁이사자처럼 11기</CustomFont>
                <CustomFont $color='white' $font='1rem'>2023.03-2023.07 SOPT 32기 안드로이드 파트</CustomFont>
                <CustomFont $color='white' $font='1rem'>2023.03-2023.07 Gnuvil 웹 파트</CustomFont>
                <CustomFont $color='white' $font='1rem'>2024.01-2024.12 멋쟁이사자처럼 12기(운영진)</CustomFont>
                <CustomFont $color='white' $font='1rem'>2024.09-2025.02 UMC HUFS 7기</CustomFont>
            </CustomColumn>
        </CustomColumn>

    );
};

export default MyClub;