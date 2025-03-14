const Footer = () => {
    return (
      <footer className="bg-lightBlue text-white px-24 py-8 fixed bottom-0 left-0 w-full text-sm">
        <div className="flex justify-between items-center">
          <p>Copyright ⓒ ESC All Rights Reserved.</p>
          <div className="flex">
            <a href="https://www.instagram.com/http.esc.com_/" target="_blank" rel="noopener noreferrer">
              <img 
                src="/instagram-icon.png" 
                alt="instagram-icon" 
                className="h-[20px]" 
              />
            </a>
          </div>
        </div>

        <div className="flex justify-between border-t border-white mt-[10px] pt-[10px]">
          <div className="space-y-1">
            <p className="text-lg font-bold">Made by ESC</p>
            <p className="text-xs">2025 ver. Created by 윤찬익, 박윤호, 염수민, 김소연, 김혜령, 박민성, 이재훈, 이준규, 류효정</p>
            <br />
            <p className="text-xs">주소: 경상북도 경산시 대학로 280 영남대학교 IT관 320호(바뀔 예정)</p>
            <p className="text-xs">esc201009@gmail.com</p>
          </div>

          <div className="space-y-1">
            <p className="text-[13px] font-bold">회장</p>
            <p className="text-xs">윤찬익 010-2252-5383</p>
            
            <p className="text-[13px] font-bold">부회장</p>
            <p className="text-xs">김혜령 010-4820-1573</p>
            
            <p className="text-[13px] font-bold">총무</p>
            <p className="text-xs">정소빈 010-4549-7220</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  