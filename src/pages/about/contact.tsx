import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen font-pretendard">
      {/* 상단 헤더 */}
      <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: 'url(/schedule.jpg)' }}>
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-3xl font-bold mb-5 mt-10 text-center">CONTACT</h1>
          <p className="text-white text-lg text-center">ESC는 언제나 여러분들에게 열려있습니다.</p>
        </div>
      </div>

      {/* 소개 내용 */}
      <div className="w-full max-w-2xl p-4 font-Pretendard-regular">
        <h1 className="text-4xl font-bold mt-10 mb-10 text-center">지도</h1>
        <div className="w-full h-80 bg-cover bg-[url('/짭지도.png')] mb-5"></div> {/* 지도 표시할 div */}
        <div className="flex">
            <h1 className="text-2xl font-bold mb-3 mt-10 text-center">주소</h1>
        </div>
        <h1 className="text-10">[38542]</h1>
        <h1 className="text-10 mb-6">경북 경산시 삼풍동 300, 320호</h1>
        <div className="flex">
            <h1 className="text-2xl font-bold mb-3 mt-10 text-center">연락처</h1>
        </div>
        <h1 className="text-10 mb-1">회장 윤찬익 010-1234-1234</h1>
        <h1 className="text-10 mb-10">부회장 김혜령 010-1231-3123</h1>
        <h1 className="text-4 mb-40">부재중 시, <a href="mailto:esc201009@gmail.com">esc201009@gmail.com</a>으로 연락 바랍니다.</h1>
      </div>
    </div>
  );
};

export default Contact;
