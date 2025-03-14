import img1 from '../images/groupPhoto/1.jpg'
import img2 from '../images/groupPhoto/2.jpg'
import img3 from '../images/groupPhoto/3.jpg'
import img4 from '../images/groupPhoto/4.jpg'
import img5 from '../images/groupPhoto/5.jpg'
import img6 from '../images/groupPhoto/6.jpg'
import img7 from '../images/groupPhoto/7.jpg'
import img8 from '../images/groupPhoto/8.jpg'
import img9 from '../images/groupPhoto/9.jpg'
import img10 from '../images/groupPhoto/10.jpg'
import img15 from '../images/groupPhoto/15.jpg'




const HomePage = () => {
    return (     
        <div className="flex flex-col mt-14 mb-14 overflow-auto">
            <div className="w-screen h-screen bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${img1.src})` }}>
                <div className="text-center text-5xl font-['Pretendard-Bold']">
                    <span className="text-brightBlue">E</span><span className='text-white'>ngineering</span><br/>
                    <span className="text-brightBlue">S</span><span className='text-white'>tudents</span><br/>
                    <span className="text-brightBlue">C</span><span className='text-white'>ommunication</span>
                </div>
                <div className="mt-4 text-center text-xl font-['Pretendard-Bold']">
                    <span className="text-brightBlue">ESC</span>
                    <span className='text-white'>와 함께 더 나은 내일을 설계하세요. 당신의 이야기가</span>
                    <span className="text-brightBlue">ESC</span>
                    <span className='text-white'>의 이야기가 됩니다.</span>
                </div>
            </div>

            <div className="text-lg text-center font-['Pretendard-SemiBold'] mb-20">
                <div className="my-4 text-3xl">소개</div>
                <div className='text-left mx-auto max-w-screen-lg text-xl'>
                    ESC는 Engineering Students Communication의 약자로, 공학을 사랑하는 학생들이 함께 소통하고 성장하기 위해 2010년 9월 창립되었습니다.
                    우리 ESC는 컴퓨터학부 학생들이 공학이라는 큰 틀 안에서 다양한 전공, 관심사, 그리고 목표를 가진 학생들이 모여 자유롭게 아이디어를 공유하고 지식을 나누며 함께 성장하는 공간입니다.
                    ESC는 지식의 공유를 넘어 학문적 깊이와 넓이를 확장하고, 현실에서 유용한 아이디어를 프로젝트를 통해 실현하는 것을 목표로 합니다. 또한, 기술적 도전과 성취를 넘어 컴퓨터학부 학생들을 위한 따뜻한 커뮤니티와 쉼터를 만들어가고자 합니다.
                </div>                
            </div>
            <div className="flex flex-col mb-14">
                <div className="text-3xl font-['Pretendard-SemiBold'] mx-auto my-4 ">
                    활동
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 mb-8 gap-8 px-40 w-full mx-auto w-1/2">
                    <div className='flex flex-col rounded-xl text-center shadow-blur-outline p-0 w-full'>
                        <div className='h-48 bg-no-repeat bg-center bg-cover rounded-t-xl' style={{backgroundImage:`url(${img7.src})`}}></div>
                        <div className="h-20 mt-4"><div className="font-['Pretendard-SemiBold'] text-xl">홈 커밍 데이</div><div className="font-['Pretendard-Light']">내용</div></div>
                    </div>
                    <div className='flex flex-col rounded-xl text-center shadow-blur-outline p-0 w-full'>                    
                        <div className=' h-48 bg-no-repeat bg-center bg-cover rounded-t-xl' style={{backgroundImage:`url(${img9.src})`}}></div>
                        <div className='h-20 mt-4'><div className="font-['Pretendard-SemiBold'] text-xl">MT</div><div className="font-['Pretendard-Light']">내용</div></div>
                    </div>
                    <div className='flex flex-col rounded-xl text-center shadow-blur-outline p-0 w-full'>                     
                        <div className=' h-48 bg-no-repeat bg-center bg-cover rounded-t-xl' style={{backgroundImage:`url(${img15.src})`}}></div>
                        <div className='h-20 mt-4'><div className="font-['Pretendard-SemiBold'] text-xl">회식</div><div className="font-['Pretendard-Light']">내용</div></div>
                    </div>
                </div>
                <div className="flex justify-center w-screen">
                    <button 
                        type="button" 
                        className="w-32 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        버튼
                    </button>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className="text-3xl font-['Pretendard-SemiBold'] mx-auto my-4">
                    모집
                </div>
                <div className="text-left mx-auto mb-8 max-w-screen-lg text-xl font-['Pretendard-Light']">
                우리 ESC는 컴퓨터학부 학생들이 공학이라는 큰 틀 안에서 다양한 전공, 관심사, 그리고 목표를 가진 학생들이 모여 자유롭게 아이디어를 공유하고 지식을 나누며 함께 성장하는 공간입니다.<br/>
                ESC는 지식의 공유를 넘어 학문적 깊이와 넓이를 확장하고, 현실에서 유용한 아이디어를 프로젝트를 통해 실현하는 것을 목표로 합니다. 또한, 기술적 도전과 성취를 넘어 컴퓨터학부 학생들을 위한 따뜻한 커뮤니티와 쉼터를 만들어가고자 합니다.<br/>
                우리는 서로를 격려하고 응원하며, 같은 목표를 향해 나아가는 동료로서 함께 성장합니다.<br/>
                여러분의 무한한 발전과 더 나은 학교생활을 위해 ESC에서 새로운 도전을 시작해보세요!<br/>
                </div>
                <div className="flex justify-center w-screen">
                    <button 
                        type="button" 
                        className="w-32 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                    >
                        지원하기
                    </button>
                </div>
            </div>
            
            {/* <div className="flex justify-center w-full mb-20">
                <div className="animate-slide mx-4 flex flex-col items-center">
                    <div>첫 번째 애니메이션 div</div>
                </div>
                <div className="animate-slide mx-4 flex flex-col items-center">
                    <div>두 번째 애니메이션 div</div>
                </div>
                <div className="animate-slide mx-4 flex flex-col items-center">
                    <div>세 번째 애니메이션 div</div>
                </div>
            </div> */}
        </div>
    )
};

export default HomePage;