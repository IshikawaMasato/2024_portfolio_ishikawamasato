import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white text-black">
      <nav aria-label="Main Navigation">
      <ul className="flex justify-end space-x-8 p-4 pr-12 text-lg">
      <li><a href="/" className="no-underline">トップ</a></li>
      <li><a href="/portfolio" className="no-underline">ポートフォリオ</a></li>
      <li><a href="/blog" className="no-underline">ブログ</a></li>
      <li><a href="/contact" className="no-underline">連絡</a></li>
      </ul>
      </nav>
    </header>
  );
};

export default Header;
