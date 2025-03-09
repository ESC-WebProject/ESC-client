
const HomePage = () => {
    return (
        <div className="flex flex-col mx-auto mt-28 overflow-auto">
            <div className="my-20">
                <div className="text-center text-5xl font-['Pretendard-Bold'] mt-6 mb-8">
                    <span className="text-brightBlue">E</span>ngineering<br/>
                    <span className="text-brightBlue">S</span>tudents<br/>
                    <span className="text-brightBlue">C</span>ommunication
                </div>
                <div className="mb-8 text-center text-xl font-['Pretendard-Bold']"><span className="text-brightBlue">ESC</span>와 함께 더 나은 내일을 설계하세요. 당신의 이야기가 <span className="text-brightBlue"
                >ESC</span>의 이야기가 됩니다</div>
            </div>
            <div className="text-lg text-center font-['Pretendard-SemiBold'] mb-20">
                <h3 className="mt-16 mb-4 text-2xl">About</h3>
                <div className='text-left mx-auto max-w-screen-lg'>
                    ESC는 Engineering Students Communication의 약자로, 공학을 사랑하는 학생들이 함께 소통하고 성장하기 위해 2010년 9월 창립되었습니다.
                    우리 ESC는 컴퓨터학부 학생들이 공학이라는 큰 틀 안에서 다양한 전공, 관심사, 그리고 목표를 가진 학생들이 모여 자유롭게 아이디어를 공유하고 지식을 나누며 함께 성장하는 공간입니다.
                    ESC는 지식의 공유를 넘어 학문적 깊이와 넓이를 확장하고, 현실에서 유용한 아이디어를 프로젝트를 통해 실현하는 것을 목표로 합니다. 또한, 기술적 도전과 성취를 넘어 컴퓨터학부 학생들을 위한 따뜻한 커뮤니티와 쉼터를 만들어가고자 합니다.
                </div>                
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto mb-20">
                <div className='rounded-lg w-full text-center mx-2 shadow-blur-outline p-2'>first div</div>
                <div className='rounded-lg w-full text-center mx-2 shadow-blur-outline p-2'>second div</div>
                <div className='rounded-lg w-full text-center mx-2 shadow-blur-outline p-2'>third div</div>
            </div>
        </div>
    )
};

export default HomePage;