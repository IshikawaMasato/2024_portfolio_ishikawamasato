export default function HomePage() {
  return (
    <div className="container mx-auto p-6">
      {/* ヒーローセクション */}
      <section className="text-center mb-8">
        <img
          src="https://placehold.jp/1920x1080.png"
          alt="Top Image"
          className="mx-auto mb-4"
        />
      </section>

      {/* コンテンツセクション */}
      <section className="grid grid-cols-1 gap-8 py-16">
        {/* 自己紹介 */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <img
            src="https://placehold.jp/600x400.png"
            alt="Placeholder"
            className="object-cover w-full md:w-1/2"
          />
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-bold mb-2">自己紹介</h2>
            <p>
              MCL盛岡情報ビジネス&デザイン専門学校に所属している石川雅音です!
            </p>
            <p>今回は私の自己紹介を記載していきます。</p>
            <p>
              私の出身は秋田の北東部に位置している鹿角市で生まれ育ちました。
            </p>
            <p>
              鹿角市は人口約27000人の住む地域で青森、秋田、岩手の県境に位置しておりアクセスはそれなりに良いです
            </p>
            <p>鹿角市はあの有名なきりたんぽの発祥の地ともされています！</p>
            <p>出身校</p>
            <ul>
              <li>小学校:鹿角市立十和田小学校</li>
              <li>中学校:鹿角市立十和田中学校</li>
              <li>高校:秋田県立大館桂桜高等学校</li>
            </ul>
          </div>
        </div>

        {/* スキル紹介 */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-bold mb-2">スキル紹介</h2>
            <p>
              私は主にバックエンド開発を得意としており、特にLaravelを用いた開発に多くの経験があります。また、フルスタックエンジニアを目指しており、バックエンド以外にも幅広い技術の習得に取り組んでいます。
              フロントエンド分野ではNext.jsを勉強中で、最新のフロントエンド技術を実践に活かせるようスキルを磨いています。また、AWSを活用したインフラやサーバー関連の技術にも挑戦しており、クラウド技術を取り入れたシステム構築にも意欲的です。
              さらに、組み込みシステムの開発にも挑戦した経験があります。ETロボコンでは、初出場ながら東北地区予選で4位入賞を果たし、地区特別賞を受賞することができました。これらの経験を通じて、ソフトウェア開発だけでなく、ハードウェアとの連携にも理解を深めています。
              私は常に新しい技術を学びながら成長を続けるエンジニアであり、多様な分野での挑戦を通じて、より幅広い技術力と視野を持つエンジニアを目指しています。
            </p>
          </div>
          <img
            src="https://placehold.jp/600x400.png"
            alt="Placeholder"
            className="object-cover w-full md:w-1/2"
          />
        </div>

        {/* メッセージ */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <img
            src="https://placehold.jp/600x400.png"
            alt="Placeholder"
            className="object-cover w-full md:w-1/2"
          />
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-bold mb-2">メッセージ</h2>
            <p>
              これまで支えてくださったすべての方々に、心から感謝申し上げます。多くの人々との出会いや経験を通じて成長を実感し、それが私の挑戦を支える原動力となっています。
              将来的には、社会課題の解決に寄与するプロジェクトに携わりたいと考えています。私はこれまで、多くの方々に助けられながら成長してきました。その経験から、自分も知識や経験を積み重ねることで、周囲の人や社会に貢献できる存在になりたいと思っています。ITの力を活用し、システムやアプリケーションを通じて、多くの人々に価値ある体験を提供することで、社会に良い影響を与えたいと考えています。
              その実現のためには、自分の明るさや誠実さ、協調性、チャレンジ精神を活かし、特にユーザー視点を大切にした開発を心がけていきます。まだ技術的に学ぶべきことが多いと感じていますが、自己研鑽を怠らず、成長を続けていく所存です。
              これからも多くの方々と関わり合いながら、新しい価値を創り出せることを楽しみにしています。そして、周りの人々や社会に貢献できるエンジニアとして歩み続けたいと思います。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
