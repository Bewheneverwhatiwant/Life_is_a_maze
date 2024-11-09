import React from 'react';
import styled from 'styled-components';

import CustomFont from '../components/CommonComponents/CustomFont';
import CustomColumn from '../components/CommonComponents/CustomColumn';

const MyAward = () => {

    return (

        <CustomColumn $width='50%' $alignItems='flex-start' $justifyContent='flex-start' $gap='1.5rem'>
            <CustomFont $color='white' $font='2rem' $fontWeight='bold'>
                수상 경력
            </CustomFont>

            <CustomColumn $width='100%' $alignItems='flex-start' $justifyContent='center' $gap='0.5rem'>
                <CustomFont $color='white' $font='1rem'>2023 경기 메타버스 해커톤 결선진출</CustomFont>
                <CustomFont $color='white' $font='1rem'>2024 멋쟁이사자처럼 동아리 미니프로젝트 대상</CustomFont>
                <CustomFont $color='white' $font='1rem'>2024 HUFSummer 교내 해커톤 우수상</CustomFont>
                <CustomFont $color='white' $font='1rem'>2024 고용노동부 공공데이터 활용공모전 12팀/150팀 1차 합격</CustomFont>
                <CustomFont $color='white' $font='1rem'>2024 멋쟁이사자처럼 중앙해커톤 교내 3위</CustomFont>
                <CustomFont $color='white' $font='1rem'>2024 한국외대 GBT 학부 주관 AI 해커톤 대상(총장상)</CustomFont>
            </CustomColumn>
        </CustomColumn>

    );
};

export default MyAward;