import Link from "next/link";

const careers = [
  {
    period: '2024/03 - 2024/06',
    title: '株式会社Spookies',
    role: 'Webアプリケーション開発・運用・保守',
    descriptions: [
      'Web アプリケーションの受託開発に、エンジニアアルバイトとしてチーム開発で参加しました。',
      '主に PHP、Laravel によるバックエンドおよび TypeScript、Nuxt.js によるフロントエンドの実装を担当し、既存案件の機能追加や改修を行いました。',
      '開発環境として Docker、Node.js、Git、GitHubを使用しました。',
    ],
    // works: [
    //   "既存 Web アプリケーションの機能改修",
    //   "運用中サービスの保守対応",
    //   "Docker を用いた開発環境での実装・確認",
    //   "GitHub を使ったコード管理とチーム開発",
    // ],
    tools: ['PHP', 'Laravel','TypeScript', 'Nuxt.js', 'Docker', 'Node.js', 'Git', 'GitHub'],
  },
  {
    period: '2024/07 - 現在',
    title: '株式会社ドワンゴ',
    role: 'ZEN Study プログラミング教材制作',
    descriptions: [
      'ZEN Studyのプログラミング教材制作業務に従事し、主にWebアプリケーション開発教材の更新・改善および新規制作を担当しています。',
      '具体的には、TypeScript、React、Next.js を用いた教材用デモアプリの設計・実装、それに対応する新教材本文の執筆を行い、レビューを経て公開まで担当しました。',
      '開発・執筆環境として Docker、Node.js、Markdown、Git、GitHub を使用しています。',
    ],
    // works: [
    //   "Web アプリケーション開発教材の内容更新",
    //   "教材の説明・コード例の改善",
    //   "Markdown を用いた教材コンテンツの編集",
    //   "Docker・Node.js 環境での教材コード確認",
    // ],
    tools: ['TypeScript', 'React', 'Next.js', 'Docker', 'Node.js', 'Markdown', 'Git', 'GitHub'],
  },
];

const qualifications = [
  '2025年5月　基本情報技術者試験 合格',
  '2025年12月　応用情報技術者試験 合格',
];

export default function CareerPage() {
  return (
    <main className="flex min-h-screen flex-col items-center lg:mx-0 mx-10 md:px-24 pt-24 pb-24">
      <div className="w-full max-w-4xl">
        <Link href="/" className="text-emerald-500 hover:underline mb-8 inline-block">
          ← 戻る
        </Link>

        <div className="mb-10">
          <p className="text-md font-semibold text-emerald-500 mb-2">Career</p>
          <h1 className="text-4xl font-bold mb-4">経歴</h1>
          <p className="text-base leading-relaxed opacity-80">
            高校時代にプログラミング学習を始め、Web アプリケーション開発やコンテスト作品の制作に取り組みました。<br />
            大学入学後は、Web アプリケーション開発に加え、資格取得や教材制作のアルバイトにも継続して取り組んでいます。
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">アルバイト</h2>
          <div className="space-y-6">
            {careers.map((career) => (
              <article key={career.title} className="rounded-lg border p-6">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <p className="text-md text-emerald-500 font-semibold mb-1">{career.period}</p>
                    <h3 className="text-2xl font-semibold">{career.title}</h3>
                    <p className="text-sm opacity-70 mt-1">{career.role}</p>
                  </div>
                </div>

                <div className="text-base leading-relaxed mb-5 space-y-2">
                  {career.descriptions.map((description, index) => (
                    <p key={index}>{description}</p>
                  ))}
                </div>

                {/* <h4 className="font-semibold mb-2">担当したこと</h4>
                <ul className="list-disc list-inside text-base leading-relaxed mb-5">
                  {career.works.map((work) => (
                    <li key={work}>{work}</li>
                  ))}
                </ul> */}

                <h4 className="font-semibold mb-3">使用技術・ツール</h4>
                <div className="flex flex-wrap gap-2">
                  {career.tools.map((tool) => (
                    <span key={tool} className="badge badge-outline badge-lg">
                      {tool}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">資格</h2>
          <ul className="list-disc list-inside text-base leading-relaxed mb-4">
            {qualifications.map((qualification) => (
              <li key={qualification}>{qualification}</li>
            ))}
          </ul>
          <p className="">
            現在は、情報処理安全確保支援士試験に向けた勉強をしています。
          </p>
        </section>
      </div>
    </main>
  );
}
