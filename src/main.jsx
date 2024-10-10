import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// 모바일 및 태블릿 장치 감지
const isMobileOrTablet = /Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent);

if (isMobileOrTablet) {
  // 모바일 또는 태블릿일 경우 접근 차단
  document.body.innerHTML = '<h1>모바일 및 태블릿 장치로는 이 페이지에 접속할 수 없습니다.</h1>';
} else {
  // PC일 경우에만 React 앱을 렌더링
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
