import React from "react";
import Link from "next/link"; // next/link をインポート

const Header: React.FC = () => {
  return (
    <header className="bg-white text-black">
      <nav aria-label="Main Navigation">
        <ul className="flex justify-end space-x-8 p-4 pr-12 text-lg">
          <li>
            <Link href="/" className="no-underline">
              トップ
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="no-underline">
              ポートフォリオ
            </Link>
          </li>
          <li>
            <Link href="/blog" className="no-underline">
              ブログ
            </Link>
          </li>
          <li>
            <Link href="/contact" className="no-underline">
              連絡
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
