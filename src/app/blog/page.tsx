"use client";

import Image from "next/image";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto">
        <section
          style={{ position: "relative", width: "100%", height: "600px" }}
          className="text-center mb-8"
        >
          <Image
            src="/3.png"
            alt="blog image"
            fill // 画像を親要素にフィットさせる
            style={{ objectFit: "cover" }} // 画像をトリミングして枠に収める
          />
        </section>

        <div className="space-y-20 mb-12 px-20">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              技術選定について(NEXT.js)
            </h2>
            <p className="text-black">メイン言語はNEXT.jsを使用しました。</p>
            <p className="text-black">
              NEXT.jsは、Reactベースのフレームワークで、サーバーサイドレンダリング（SSR）や静的サイト生成（SSG）を簡単に実装できるのが特徴です。
            </p>
            <p className="text-black">
              また、TypeScriptに対応しており、堅牢な開発が可能
            </p>
            <p className="text-black">
              APIエンドポイントを作成でき、バックエンドの機能を簡単に組み込める。
            </p>
            <p className="text-black">
              Vercelと互換性があり、GitHubと連携するだけでデプロイが可能
            </p>
          </div>
        </div>

        <div className="space-y-20 mb-12 px-20">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-gray-800">GitHub API</h2>
            <p className="text-black">
              GitHub
              APIを使用することで、GitHubのプロフィール情報を取得し、表示することができます。
            </p>
            <p className="text-black">
              他にもリポジトリの作成、削除、クローン、フォーク、スター付けが可能。
              コミット、ブランチ、タグの管理や、ファイルの読み書きもAPIを通じて行える。
            </p>
            <p className="text-black">
              また、GitHub
              Actionsを使用することで、CI/CDパイプラインを構築することも可能。
            </p>
            <p className="text-black">
              認証なしだと1時間に60request、認証ありだと5000requestまでの制限あり
            </p>
          </div>
        </div>

        <div className="space-y-20 mb-12 px-20">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Nodemailer</h2>
            <p className="text-black">シンプルなAPIでメール送信が可能。</p>
            <p className="text-black">
              Gmail、Outlook、Yahooなどの一般的なSMTPサーバーに対応。※今回はGmailを使用
            </p>
            <p className="text-black">メール送信の仕組み</p>
            <p className="text-black">1. ユーザーがフォームに値を入力</p>
            <p className="text-black">
              2. フォーム送信時のバリデーション（検証）
            </p>
            <p className="text-black">3. APIエンドポイントへのデータ送信</p>
            <p className="text-black">
              4. メールサーバーがメールを受け取り、相手に配信
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
