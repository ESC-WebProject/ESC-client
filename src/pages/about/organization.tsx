import React from 'react';

const Organization: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen font-pretendard">
      {/* 상단 헤더 */}
      <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: 'url(/schedule.jpg)' }}>
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-3xl font-bold mb-5 mt-10 text-center">조직도</h1>
          <p className="text-white text-lg mt-5 text-center">ESC 회장단의 조직도입니다.</p>
        </div>
      </div>

      {/* 소개 내용 */}
      <div className="w-full max-w-2xl p-4 text-center">
        <h1 className="text-3xl font-bold mt-10 mb-10">회장단</h1>
        <div className="flex mb-10">
          <div className="w-full h-64 bg-cover bg-center mx-4" style={{ backgroundImage: 'url(/윤찬익.jpg)' }} />
          <div className="w-full h-64 bg-cover bg-center mx-4" style={{ backgroundImage: 'url(/김혜령.jpg)' }} />
        </div>
        <div className="flex ml-36">
          <div className="flex">
            <h1 className="text-xl">회장</h1>
          </div>
          <div className="flex ml-64">
            <h1 className="text-xl">부회장</h1>
          
          </div>
        </div>
        <div className="flex ml-32 mt-4">
          <div className="flex">
            <h1 className="text-xl">윤찬익</h1>
          </div>
          <div className="flex ml-64">
            <h1 className="text-xl">김혜령</h1>
          
          </div>
        </div>
        <h1 className="text-3xl font-bold mt-10 mb-10">총무부</h1>
        <div className="flex mb-10">
          <div className="w-full h-64 bg-cover bg-left mx-4" style={{ backgroundImage: 'url(/정소빈.jpg)' }} />
          <div className="w-full h-64 bg-cover bg-left mx-4" style={{ backgroundImage: 'url(/이준호.jpg)' }} />
        </div>
        <div className="flex ml-36">
          <div className="flex">
            <h1 className="text-xl">부장</h1>
          </div>
          <div className="flex ml-64">
            <h1 className="text-xl">부원</h1>
          
          </div>
        </div>
        <div className="flex ml-32 mt-4">
          <div className="flex">
            <h1 className="text-xl">정소빈</h1>
          </div>
          <div className="flex ml-60">
            <h1 className="text-xl">이준호</h1>
          
          </div>
        </div>
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold mt-10 mb-10 mx-20 text-center">교육부</h1>
          <h1 className="text-3xl font-bold mt-10 mb-10 mx-20 text-center">운영부</h1> 
        </div>
        <div className="flex mb-10">
          <div className="w-full h-64 bg-cover bg-left mx-4" style={{ backgroundImage: 'url(/이재훈.jpg)' }} />
          <div className="w-full h-64 bg-cover bg-left mx-4" style={{ backgroundImage: 'url(/이수민.jpg)' }} />
        </div>
        <div className="flex ml-36">
          <div className="flex">
            <h1 className="text-xl">부장</h1>
          </div>
          <div className="flex ml-64">
            <h1 className="text-xl">부장</h1>
          
          </div>
        </div>
        <div className="flex ml-32 mt-4 mb-40">
          <div className="flex">
            <h1 className="text-xl">이재훈</h1>
          </div>
          <div className="flex ml-60">
            <h1 className="text-xl">이수민</h1>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization;
