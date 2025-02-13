"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface GitHubProfile {
  avatar_url: string;
  name: string;
  bio: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
}

export default function PortfolioPage() {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        const response = await fetch("/api/github");
        if (!response.ok) throw new Error("Failed to fetch profile");
        const data = await response.json();
        setProfile(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("プロフィールの取得に失敗しました");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubProfile();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto">
        <section
          style={{ position: "relative", width: "100%", height: "600px" }}
          className="text-center mb-8"
        >
          <Image
            src="/2.png"
            alt="portfolio image"
            fill // 画像を親要素にフィットさせる
            style={{ objectFit: "cover" }} // 画像をトリミングして枠に収める
          />
        </section>

        <a href="https://web-network.sakura.ne.jp/web_rs-iwate/">
          <div className="space-y-8 mb-12 px-16">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                地元企業様のWEBサイト制作
              </h2>
              <p className="text-black">
                盛岡の水道会社様のWEBサイトのリニューアルに携わりました。
              </p>
              <p className="text-black">
                設計から開発まで一貫して携わり、お客様の要望に合わせたWEBサイトを制作しました。
              </p>
              <p className="text-black">使用技術: HTML, CSS</p>
            </div>
          </div>
        </a>

        <a href="https://www.etrobo.jp/%e3%80%90%e6%9d%b1%e5%8c%97%e5%9c%b0%e5%8c%ba%e3%80%912024-9-22%ef%bc%88%e6%97%a5%ef%bc%89%e6%9d%b1%e5%8c%97%e5%9c%b0%e5%8c%ba%e5%a4%a7%e4%bc%9a%e7%b5%90%e6%9e%9c/">
          <div className="space-y-8 mb-12 px-16">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-bold mb-4 text-gray-800">
                ETロボコンへの参加
              </h2>
              <p className="text-black">チーム名: exceptions</p>
              <p className="text-black">
                所属: 盛岡情報ビジネス＆デザイン専門学校／株式会社マイナビEdge
              </p>
              <p className="text-black">
                ETロボコンに初出場し、東北地区予選で4位入賞と特別賞の受賞を果たしました。
              </p>
              <p className="text-black">
                放課後や夏休み中など、学校外での活動も積極的に活動し開発を行いました。
              </p>
              <p className="text-black">使用技術: C</p>
            </div>
          </div>
        </a>

        <div className="space-y-8 mb-12 px-16">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              学外ハッカソンへの参加
            </h2>
            <p className="text-gray-600">学外のハッカソンに参加しました。</p>
            <p className="text-gray-600">
              一週間という短い時間で簡単な設計からデプロイまで出来たのは良い経験になりました。
            </p>
            <p className="text-gray-600">
              使用技術(バックエンド): Laravel supabase(postgresql) docker render
            </p>
            <p className="text-gray-600">
              使用技術(フロントエンド): NEXT.js tailwindcss vercel
            </p>
          </div>
        </div>

        {/* GitHub Profile Section */}
        <section className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
            GitHub Profile
          </h2>

          {loading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-32 w-32 bg-gray-200 rounded-full mx-auto" />
              <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
              <div className="h-3 bg-gray-200 rounded w-3/4 mx-auto" />
              <div className="grid grid-cols-3 gap-4 mt-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-8 bg-gray-200 rounded" />
                ))}
              </div>
            </div>
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : (
            profile && (
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Image
                  src={profile.avatar_url}
                  alt="GitHub Profile"
                  width={192}
                  height={192}
                  className="w-48 h-48 rounded-full border-4 border-blue-100 shadow-md"
                />

                <div className="flex-1 space-y-4">
                  <div className="text-center md:text-left">
                    <h3 className="text-3xl font-bold text-gray-900">
                      {profile.name}
                    </h3>
                    <p className="text-gray-600 mt-2">
                      {profile.bio || "No bio available"}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">
                        {profile.public_repos}
                      </p>
                      <p className="text-sm text-gray-600">Repositories</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">
                        {profile.followers}
                      </p>
                      <p className="text-sm text-gray-600">Followers</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">
                        {profile.following}
                      </p>
                      <p className="text-sm text-gray-600">Following</p>
                    </div>
                  </div>

                  <a
                    href={profile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full md:w-auto px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-center font-medium"
                  >
                    View GitHub Profile
                  </a>
                </div>
              </div>
            )
          )}
        </section>
      </main>
    </div>
  );
}
