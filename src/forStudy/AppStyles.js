// AppStyles.js
import styled, { keyframes } from 'styled-components';

// #root 스타일을 담당하는 컨테이너 컴포넌트
export const RootContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

// 로고 스타일링을 위한 컴포넌트
export const Logo = styled.img`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }
`;

// 로고 애니메이션 정의
const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// 특정 조건에서 로고에 애니메이션을 적용하는 컴포넌트
export const AnimatedLogo = styled(Logo)`
  @media (prefers-reduced-motion: no-preference) {
    animation: ${logoSpin} infinite 20s linear;
  }
`;

// 카드 스타일을 담당하는 컴포넌트
export const Card = styled.div`
  padding: 2em;
`;

// 설명 텍스트를 위한 컴포넌트
export const ReadTheDocs = styled.p`
  color: #888;
`;
