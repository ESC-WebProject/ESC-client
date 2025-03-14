import React from 'react';

const Introduction: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen font-pretendard">
      {/* 상단 헤더 */}
      <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: 'url(/schedule.jpg)' }}>
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
          <h1 className="text-white text-3xl font-bold mb-2 mt-5 text-center">소개</h1>
          <p className="text-white text-lg text-center">ESC에 대한 모든 정보를 확인하세요.</p>
        </div>
      </div>

      {/* 소개 내용 */}
      <div className="w-full max-w-2xl p-4 text-center"> {/* 여기에 text-center 추가 */}
        <h1 className="text-5xl font-bold mt-10 mb-10">인사말</h1>
        <p className="mb-10 italic font-bold">
          [ESC와 함께 더 나은 내일을 설계하세요. 당신의 이야기가 ESC의 이야기가 됩니다]
        </p>
        <p className="mb-10">
          ESC는 Engineering Students Communication의 약자로, 공학을 사랑하는 학생들이 함께 소통하고 성장하기 위해 2010년 9월 창립되었습니다.
        </p>
        <p className="mb-10">
          우리 ESC는 컴퓨터학부 학생들이 공학이라는 큰 틀 안에서 다양한 전공, 관심사, 그리고 목표를 가진 학생들이 모여 자유롭게 아이디어를 공유하고 지식을 나누며 함께 성장하는 공간입니다.
        </p>
        <p className="mb-10">
          ESC는 지식의 공유를 넘어 학문적 깊이와 넓이를 확장하고, 현실에서 유용한 아이디어를 프로젝트를 통해 실현하는 것을 목표로 합니다. 또한, 기술적 도전과 성취를 넘어 컴퓨터학부 학생들을 위한 따뜻한 커뮤니티와 쉼터를 만들어가고자 합니다.
        </p>
        <p className="mb-10">
          우리는 서로를 격려하고 응원하며, 같은 목표를 향해 나아가는 동료로서 함께 성장합니다.
          여러분의 무한한 발전과 더 나은 학교생활을 위해 ESC에서 새로운 도전을 시작해보세요!
        </p>
        <h2 className="font-bold mt-20 mb-40">
          ESC는 언제나 여러분의 열정과 도전을 환영합니다.
        </h2>
      </div>
    </div>
  );
};


export default Introduction;
