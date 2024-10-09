import React, { useState } from 'react';
import styled from 'styled-components';

import CustomFont from './CommonComponents/CustomFont';
import CustomButton from './CommonComponents/CustomButton';
import StyledImg from './CommonComponents/StyledImg';
import { MdDownload } from "react-icons/md";

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
    width: 50%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    z-index: 1001;
    gap: 1rem;
`;

const Modal = ({ isOpen, onClose }) => {
    // 모달이 열려있을 때만 렌더링
    if (!isOpen) return null;

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'NameCard_NY.png'; // 이미지 파일 경로
        link.download = 'NameCard_NY.png'; // 다운로드될 파일명
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <ModalOverlay onClick={onClose}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <CustomButton $flexdirection='row' $backgroundColor='transparent' onClick={handleDownload}>
                    <CustomFont $color='white' $font='1rem' $fontweight='bold'>Download</CustomFont>
                    <MdDownload style={{ color: 'white', fontSize: '1rem' }} />
                </CustomButton>
                <StyledImg src={'NameCard_NY.png'} $width='100%' />
            </ModalContainer>
        </ModalOverlay>
    );
};

export default Modal;
