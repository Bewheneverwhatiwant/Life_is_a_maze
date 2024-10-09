import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import CustomRow from './CommonComponents/CustomRow';
import sentences from './sentence';

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 15rem;
    width: calc(100% - 15rem); /* 전체 화면 너비에서 SideBar의 너비를 뺀 나머지 영역을 차지 */
    height: 7vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #131517;
`;

const TypingText = styled.span`
    font-size: 1rem;
    color: white;
    display: inline-block;
`;

const Dot = styled.span`
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
`;

export default function Header() {
    const [displayedText, setDisplayedText] = useState(''); // 현재 타이핑 중인 텍스트
    const [isDotVisible, setIsDotVisible] = useState(true); // 초기 흰색 동그라미 표시 여부
    const [currentSentence, setCurrentSentence] = useState(''); // 현재 선택된 문장

    useEffect(() => {
        // 랜덤으로 문장 선택
        const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
        setCurrentSentence(randomSentence);

        // 첫 글자부터 글자 애니메이션 시작
        const dotTimer = setTimeout(() => {
            setIsDotVisible(false);
            let charIndex = -1;
            setDisplayedText(''); // 기존 문장을 초기화

            const typingTimer = setInterval(() => {
                if (charIndex < randomSentence.length - 1) {
                    setDisplayedText((prevText) => prevText + randomSentence[charIndex]);
                    charIndex++;
                } else {
                    clearInterval(typingTimer);
                }
            }, 200); // 글자가 0.2초마다 추가됨
        }, 300); // 0.3초 동안 흰 동그라미 표시

        // useEffect 종료 시 타이머 정리
        return () => {
            clearTimeout(dotTimer);
            setDisplayedText(''); // 컴포넌트가 언마운트되기 전에 기존 문장을 초기화
        };
    }, []); // 빈 배열로 지정하여 컴포넌트가 처음 마운트될 때만 실행

    return (
        <HeaderContainer>
            <CustomRow $width='97%' $justifyContent='flex-end'>
                {isDotVisible ? <Dot /> : <TypingText>{displayedText}</TypingText>}
            </CustomRow>
        </HeaderContainer>
    );
}
