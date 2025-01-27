import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image from "../images/우유식빵.jpg"

const HomePage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow:true,
      };
    return (
        <div className="flex flex-col mx-auto mt-40 ">
            <div className="text-center text-4xl font-['Pretendard-Bold'] ">Engineering<br/>Students<br/>Communication</div>
            {/* <div className="max-w-1024px"> 
                <Slider {...settings}>
                    <div className="h-screen w-screen bg-[url('../images/우유식빵.jpg')] bg-cover bg-no-repeat ">
                    </div>                    
                </Slider>
            </div> */}
            <div className="text-lg text-center font-['Pretendard-SemiBold']">
                <h3 className="mt-16 mb-10 text-2xl">about</h3>
                <div>내용</div>
            </div>
        </div>
    )
};

export default HomePage;