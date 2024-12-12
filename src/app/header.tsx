import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">トップ</a></li>
          <li><a href="/portfolio">ポートフォリオ</a></li>
          <li><a href="/about">ブログ</a></li>
          <li><a href="/contact">連絡</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
