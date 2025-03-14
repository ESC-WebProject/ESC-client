import { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <header
        className="flex items-center justify-between fixed top-0 left-0 w-full z-10 border-b border-[#D0D0D0]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="ml-24">
          <Link href="/">
            <img src="/esc_logo-09.png" alt="ESC Logo" className="h-14 cursor-pointer" />
          </Link>
        </div>

        <nav className="flex-grow text-center">
          <ul className="flex justify-end space-x-10 font-bold">
            <li>About ESC</li>
            <li>커뮤니티</li>
            <li>마일리지</li>
            <li>마이페이지</li>
          </ul>
        </nav>

        <div className="mr-10 ml-14 text-sm">로그인</div>
      </header>

      {isDropdownOpen && (
        <div
          className="fixed top-14 right-0 w-full z-10 mr-80" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center justify-end h-32"> 
            {/* About ESC 메뉴 */}
            <ul className="space-y-2 text-[14px]"> 
              <li><Link href="/about/introduction">소개</Link></li>
              <li><Link href="/about/organization">조직도</Link></li>
              <li><Link href="/about/schedule">일정</Link></li>
              <li><Link href="/about/contact">CONTACT</Link></li>
            </ul>
            {/* 커뮤니티 메뉴 */}
            <ul className="space-y-2 text-[14px]"> 
              <li><Link href="/community/announcements">공지사항</Link></li>
              <li><Link href="/community/free-board">자유게시판</Link></li>
              <li><Link href="/community/info-board">정보게시판</Link></li>
              <li><Link href="/community/honor">명예의 전당</Link></li>
            </ul>
            {/* 마일리지 메뉴 */}
            <ul className="space-y-2 text-[14px]"> 
              <li><Link href="/mileage/shop">마일리지샵</Link></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
