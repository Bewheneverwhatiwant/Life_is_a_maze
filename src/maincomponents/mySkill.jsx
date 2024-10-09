import React from 'react';
import styled from 'styled-components';

import CustomFont from '../components/CommonComponents/CustomFont';
import CustomColumn from '../components/CommonComponents/CustomColumn';
import CustomRow from '../components/CommonComponents/CustomRow';

const MySkill = () => {

    return (

        <CustomColumn $width='95%' $alignItems='flex-start' $justifyContent='flex-start' $gap='1.5rem'>
            <CustomFont $color='white' $font='2rem' $fontWeight='bold'>
                사용 기술
            </CustomFont>

            <CustomRow $width='100%' $alignItems='flex-start' $justifyContent='space-between'>
                <CustomColumn $width='30%' $gap='1.5rem' $alignItems='flex-start'>
                    <CustomFont $color='#F93062' $font='1rem'>JavaScript</CustomFont>
                    <CustomFont $color='#F93062' $font='1rem'>TypeScript</CustomFont>
                    <CustomFont $color='white' $font='1rem'>Dart</CustomFont>
                    <CustomFont $color='white' $font='1rem'>Kotlin</CustomFont>
                    <CustomFont $color='white' $font='1rem'>Python</CustomFont>
                    <CustomFont $color='white' $font='1rem'>Java</CustomFont>
                </CustomColumn>

                <CustomColumn $width='30%' $gap='1.5rem' $alignItems='flex-start'>
                    <CustomFont $color='#F93062' $font='1rem'>React + Vite</CustomFont>
                    <CustomFont $color='#F93062' $font='1rem'>Next.JS</CustomFont>
                    <CustomFont $color='#F93062' $font='1rem'>Flutter</CustomFont>
                    <CustomFont $color='white' $font='1rem'>React Native</CustomFont>
                    <CustomFont $color='white' $font='1rem'>Spring Boot</CustomFont>
                    <CustomFont $color='white' $font='1rem'>Django</CustomFont>
                </CustomColumn>

                <CustomColumn $width='30%' $gap='1.5rem' $alignItems='flex-start'>
                    <CustomFont $color='white' $font='1rem'>MySQL</CustomFont>
                    <CustomFont $color='white' $font='1rem'>Linux</CustomFont>
                    <CustomFont $color='white' $font='1rem'>Docker</CustomFont>
                    <CustomFont $color='white' $font='1rem'>AWS</CustomFont>
                </CustomColumn>
            </CustomRow>
        </CustomColumn>

    );
};

export default MySkill;