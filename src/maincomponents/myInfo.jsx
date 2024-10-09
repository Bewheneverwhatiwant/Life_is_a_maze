import React, { useState } from 'react';
import styled from 'styled-components';

import CustomFont from '../components/CommonComponents/CustomFont';
import CustomColumn from '../components/CommonComponents/CustomColumn';
import CustomRow from '../components/CommonComponents/CustomRow';
import StyledImg from '../components/CommonComponents/StyledImg';

import { FaUniversity } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { IoBookmarks } from "react-icons/io5";
import { FaMapMarker } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ModalContainer = styled.div`
    background-color: transparent;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1001;
    gap: 1rem;
`;

const HoverImageContainer = styled.div`
    display: inline-block;
    transition: transform 0.3s ease;

    &:hover {
        transform: rotate(-5deg);
    }
`;

const MyInfo = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (

        <CustomRow $width='95%' $alignItems='center' $justifyContent='flex-start' $gap='3rem'>
            <HoverImageContainer>
                <StyledImg src={'myPhoto.jpg'} $height='15rem' $borderRadius='0.2rem' onClick={openModal} $cursor='pointer' />
            </HoverImageContainer>
            <CustomColumn $width='80%' $height='15rem' $alignItems='flex-start' $justifyContent='space-between' $gap='0.5rem'>
                <CustomFont $color='white' $font='2.5rem' $fontWeight='bold'>이나영</CustomFont>

                <CustomColumn $width='100%' $alignItems='flex-start' $justifyContent='center' $gap='0.5rem'>
                    <CustomRow>
                        <FaUniversity style={{ color: 'white', fontSize: '1rem' }} />
                        <CustomFont $color='white' $font='1rem'>한국외국어대학교 글로벌캠퍼스 21학번</CustomFont>
                    </CustomRow>

                    <CustomRow>
                        <FaBookmark style={{ color: 'white', fontSize: '1rem' }} />
                        <CustomFont $color='white' $font='1rem'>제 1전공: 독일어통번역학과</CustomFont>
                    </CustomRow>

                    <CustomRow>
                        <IoBookmarks style={{ color: 'white', fontSize: '1rem' }} />
                        <CustomFont $color='white' $font='1rem'>제 2전공: 컴퓨터공학부</CustomFont>
                    </CustomRow>

                    <CustomRow>
                        <FaMapMarker style={{ color: 'white', fontSize: '1rem' }} />
                        <CustomFont $color='white' $font='1rem'>경기도 용인시 처인구</CustomFont>
                    </CustomRow>

                    <CustomRow>
                        <FaBuilding style={{ color: '#F93062', fontSize: '1rem' }} />
                        <CustomFont $color='#F93062' $font='1rem'>소프트웨어 엔지니어를 희망합니다.</CustomFont>
                    </CustomRow>
                </CustomColumn>

                {isModalOpen && (
                    <ModalOverlay onClick={closeModal}>
                        <ModalContainer onClick={(e) => e.stopPropagation()}>
                            <StyledImg src={'myPhoto.jpg'} $width='30rem' $borderRadius='0.2rem' />
                        </ModalContainer>
                    </ModalOverlay>
                )}

            </CustomColumn>
        </CustomRow>

    );
};

export default MyInfo;