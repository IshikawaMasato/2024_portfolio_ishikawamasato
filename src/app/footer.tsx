import React from "react";
import Link from "next/link"; // next/link をインポート

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-8 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <nav>
          <ul className="list-none p-0 flex justify-center mt-4">
            <li className="mx-4">
              <Link href="/" className="text-black no-underline">
                トップ
              </Link>
            </li>
            <li className="mx-4">
              <Link href="/portfolio" className="text-black no-underline">
                ポートフォリオ
              </Link>
              <p>
                <Link href="#">自己紹介</Link>
              </p>
              <p>
                <Link href="#">スキル紹介</Link>
              </p>
              <p>
                <Link href="#">制作物紹介</Link>
              </p>
            </li>
            <li className="mx-4">
              <Link href="/blog" className="text-black no-underline">
                ブログ
              </Link>
            </li>
            <li className="mx-4">
              <Link href="/contact" className="text-black no-underline">
                連絡
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="mt-8">&copy; 2024 Ishikawa Masato. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
