import React from 'react';
import styled from 'styled-components';

import CustomFont from '../components/CommonComponents/CustomFont';
import CustomColumn from '../components/CommonComponents/CustomColumn';

const MyClub = () => {

    return (

        <CustomColumn $width='95%' $alignItems='flex-start' $justifyContent='flex-start' $gap='0.5rem'>
            <CustomFont $color='white' $font='2rem' $fontWeight='bold'>
                동아리 활동
            </CustomFont>
        </CustomColumn>

    );
};

export default MyClub;