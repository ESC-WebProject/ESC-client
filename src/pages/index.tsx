import img1 from '../images/groupPhoto/1.jpg'
import img2 from '../images/groupPhoto/2.jpg'
import img3 from '../images/groupPhoto/3.jpg'
import img4 from '../images/groupPhoto/4.jpg'
import img5 from '../images/groupPhoto/5.jpg'
import img6 from '../images/groupPhoto/6.jpg'

const HomePage = () => {
    console.log(img4)
    return (     
        <div className="flex flex-col mx-auto mt-14 overflow-auto">
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
                <div className="my-4 text-3xl">About</div>
                <div className='text-left mx-auto max-w-screen-lg'>
                    ESC는 Engineering Students Communication의 약자로, 공학을 사랑하는 학생들이 함께 소통하고 성장하기 위해 2010년 9월 창립되었습니다.
                    우리 ESC는 컴퓨터학부 학생들이 공학이라는 큰 틀 안에서 다양한 전공, 관심사, 그리고 목표를 가진 학생들이 모여 자유롭게 아이디어를 공유하고 지식을 나누며 함께 성장하는 공간입니다.
                    ESC는 지식의 공유를 넘어 학문적 깊이와 넓이를 확장하고, 현실에서 유용한 아이디어를 프로젝트를 통해 실현하는 것을 목표로 합니다. 또한, 기술적 도전과 성취를 넘어 컴퓨터학부 학생들을 위한 따뜻한 커뮤니티와 쉼터를 만들어가고자 합니다.
                </div>                
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto mb-20 gap-3">
                <div className='flex flex-col rounded-lg w-full text-center shadow-blur-outline p-0'>
                    <div className='bg-brightBlue px-2 py-1'>123</div>
                    <div>first div</div>
                </div>
                <div className='flex flex-col rounded-lg w-full text-center shadow-blur-outline p-0'>                    
                    <div className='bg-brightBlue px-2 py-1'>123</div>
                    <div>second div</div>
                </div>
                <div className='flex flex-col rounded-lg w-full text-center shadow-blur-outline p-0'>
                    <div className='bg-brightBlue px-2 py-1'>123</div>
                    <div>third div</div>
                </div>
            </div>
        </div>
    )
};

export default HomePage;