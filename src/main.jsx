import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// 모바일 및 태블릿 장치 감지
const isMobileOrTablet = /Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent);

if (isMobileOrTablet) {
  // 모바일 또는 태블릿일 경우 접근 차단 및 스타일링 추가
  document.body.innerHTML = `
    <div style="
      display: flex; 
      justify-content: center; 
      align-items: center; 
      height: 100vh; 
      background-color: #f0f0f0;
      font-family: Arial, sans-serif;
      text-align: center;
    ">
      <div style="
        background-color: #ffcccb; 
        padding: 20px 40px; 
        border: 2px solid #ff6f61; 
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      ">
        <h2 style="
          color: #ff6f61; 
          font-size: 24px; 
          margin: 0 0 10px 0;
        ">모바일 및 태블릿으로는 접속할 수 없습니다.</h2>
        <p style="
          color: #333; 
          font-size: 16px; 
          margin: 0;
        ">데스크톱에서 접속해 주세요.</p>
      </div>
    </div>
  `;
} else {
  // PC일 경우에만 React 앱을 렌더링
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
