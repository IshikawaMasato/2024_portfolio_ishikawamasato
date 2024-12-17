import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-8 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <nav>
          <ul className="list-none p-0 flex justify-center mt-4">
            <li className="mx-4">
              <a href="/" className="text-black no-underline">
                トップ
              </a>
            </li>
            <li className="mx-4">
              <a href="/portfolio" className="text-black no-underline">
                ポートフォリオ
              </a>
              <p>
                <a href="#">自己紹介</a>
              </p>
              <p>
                <a href="#">スキル紹介</a>
              </p>
              <p>
                <a href="#">制作物紹介</a>
              </p>
            </li>
            <li className="mx-4">
              <a href="/blog" className="text-black no-underline">
                ブログ
              </a>
            </li>
            <li className="mx-4">
              <a href="/contact" className="text-black no-underline">
                連絡
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="mt-8">&copy; 2024 Ishikawa Masato. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
