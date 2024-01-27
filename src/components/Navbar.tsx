import Link from "next/link";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="navbar">
        <Link href="/" className="navbar__logo">
          MuckitList
        </Link>
        <div className="navbar__list">
          <Link href="/stores" className="navbar__list--item">
            맛집 목록
          </Link>
          <Link href="/stores/new" className="navbar__list--item">
            맛집 등록
          </Link>
          <Link href="/users/like" className="navbar__list--item">
            찜한 맛집
          </Link>
          <Link href="/users/login" className="navbar__list--item">
            로그인
          </Link>
        </div>
        {/* movile button */}
        <div
          role="presentation"
          className="navbar__button"
          onClick={() => setIsOpen((val) => !val)}
        >
          {isOpen ? <IoClose /> : <LuMenu />}
        </div>
      </div>
      {/* mobile navbar */}
      <div className="navbar--mobile">
        <div className="navbar__list--mobile">
          <Link href="/stores" className="navbar__list--item--mobile">
            맛집 목록
          </Link>
          <Link href="/stores/new" className="navbar__list--item-mobile">
            맛집 등록
          </Link>
          <Link href="/users/like" className="navbar__list--item-mobile">
            찜한 맛집
          </Link>
          <Link href="/users/login" className="navbar__list--item-mobile">
            로그인
          </Link>
        </div>
      </div>
    </>
  );
}
