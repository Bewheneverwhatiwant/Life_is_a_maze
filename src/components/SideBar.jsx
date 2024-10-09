import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import CustomColumn from './CommonComponents/CustomColumn';
import CustomFont from './CommonComponents/CustomFont';
import CustomButton from './CommonComponents/CustomButton';
import CustomRow from './CommonComponents/CustomRow';

import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiNotion } from "react-icons/si";
import { FaIdCard } from "react-icons/fa";

import Modal from './Modal';

const SideBarContainer = styled.div`
    width: 15rem;
    position: fixed;
    background-color: #131517;
    padding: 0.5rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    justity-content: flex-start;
`;

const Tooltip = styled.div`
  position: absolute;
  background-color: red;
  color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
  top: 0;
  left: 15rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out;
  z-index: 1000;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: -0.5rem;
    transform: translateY(-50%);
    border-width: 5px;
    border-style: solid;
    border-color: transparent red transparent transparent;
  }
`;

const NameWrapper = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
  display: inline-block;

  &:hover ${Tooltip} {
    opacity: 1;
    visibility: visible;
  }
`;

const SideBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const GoGit = () => {
        window.location.href = 'https://github.com/Bewheneverwhatiwant';
    };

    const GoNotion = () => {
        window.location.href = 'https://bustling-milk-9c3.notion.site/7b021eede0b24c42b5efcf33b2d073d0';
    };

    return (
        <SideBarContainer>
            <CustomColumn $width='100%' $height='100vh' $alignItems='center' $justifyContent='flex-start' $gap='1rem' >

                <CustomRow $width='100%' $alignItems='center' $justifyContent='flex-start'>
                    <CustomFont $color='#F93062' $fontWeight='bold' $font='1.5rem'>
                        NAYEONGCHA
                    </CustomFont>
                </CustomRow>

                <NameWrapper>
                    <CustomRow $width='100%' $alignItems='center' $justifyContent='flex-start'>
                        <CustomButton $flexdirection='row' $justifyContent='flex-start' $gap='1rem' $width='90%'
                            $backgroundColor='transparent' $hoverColor='#282D31' onClick={GoGit}>
                            <FaGithub style={{ color: 'white', fontSize: '1rem' }} />
                            <CustomFont $color='white' $font='1rem'>Github</CustomFont>
                        </CustomButton>
                    </CustomRow>
                    <Tooltip>bewheneverwhatiwant</Tooltip>
                </NameWrapper>

                <CustomRow $width='100%' $alignItems='center' $justifyContent='flex-start'>
                    <CustomButton $flexdirection='row' $justifyContent='flex-start' $gap='1rem' $width='90%'
                        $backgroundColor='transparent' $hoverColor='#282D31' onClick={GoNotion}>
                        <SiNotion style={{ color: 'white', fontSize: '1rem' }} />
                        <CustomFont $color='white' $font='1rem'>Notion</CustomFont>
                    </CustomButton>
                </CustomRow>

                <NameWrapper>
                    <CustomRow $width='100%' $alignItems='center' $justifyContent='flex-start'>
                        <CustomButton $flexdirection='row' $justifyContent='flex-start' $gap='1rem' $width='90%'
                            $backgroundColor='transparent'>
                            <MdEmail style={{ color: 'white', fontSize: '1rem' }} />
                            <CustomFont $color='white' $font='1rem'>Email</CustomFont>
                        </CustomButton>
                    </CustomRow>
                    <Tooltip>lny021102@gmail.com</Tooltip>
                </NameWrapper>

                <CustomRow $width='100%' $alignItems='center' $justifyContent='flex-start'>
                    <CustomButton $flexdirection='row' $justifyContent='flex-start' $gap='1rem' $width='90%'
                        $backgroundColor='transparent' $hoverColor='#282D31' onClick={openModal}>
                        <FaIdCard style={{ color: 'white', fontSize: '1rem' }} />
                        <CustomFont $color='white' $font='1rem'>Namecard</CustomFont>
                    </CustomButton>
                </CustomRow>

                <Modal isOpen={isModalOpen} onClose={closeModal} />
            </CustomColumn>
        </SideBarContainer>
    );
};

export default SideBar;