import Link from "next/link";

export default function AboutMe() {
  const icon = {fontSize: "1.5rem", marginRight: "0.3rem"};
  const text = {fontSize: "1.2rem"};

  return (
    <div className="js-show-on-scroll lg:w-1/2 lg:mx-0 mx-10">
      <h2 className="text-xl">ヨネヤマ リセ</h2>
      <div className="flex items-stretch my-3 space-x-2 place-content-center lg:place-content-start">
        <a href="https://github.com/koppepam" target="_blank" rel="noopener noreferrer"><img src="/images/github-icon.svg" alt="GitHub" className="size-10"/></a>
        <a href="https://qiita.com/koppepam" target="_blank" rel="noopener noreferrer"><img src="/images/favicon.png" alt="Qiita" className="size-10"/></a>
      </div>
      <p style={text}>学生</p>
      <p style={text}><i className="bi bi-geo-alt-fill" style={icon}></i>東京都</p>
      {/* <a href="/contact" target="_blank" rel="noopener noreferrer"><i className="bi bi-send" style={icon}></i>お問い合わせ</a> */}
      <p style={text}><i className="bi bi-balloon" style={icon}></i>2006/03/15</p>
      <dl className="mt-5" style={text}><i className="bi bi-journal-check" style={icon}></i>経歴
        <dt style={text}>2024/03　株式会社Spookies アルバイト入社</dt>
        <dd className="mx-2 text-sm">
          主に Laravel や Nuxt.js を用いたWebアプリケーションの開発・運用・保守を担当。<br/>
          業務全般において Docker, Node.js, Git, GitHub, Slack を使用。<br/>
          2024/06　退社
        </dd>
        <dt style={text} className="mt-3">2024/07　株式会社ドワンゴ アルバイト入社</dt>
        <dd className="mx-2 text-sm">
          ZEN Studyのプログラミング教材制作業務に従事。<br/>
          主に Web アプリケーション開発教材の更新・改善を担当。<br/>
          業務全般において Docker, Node.js, Markdown, Git, GitHub, Slack を使用。
        </dd>
      </dl>
      <Link href="/career" className="badge badge-outline badge-accent hover:bg-accent hover:text-white transition-colors mt-3">
        経歴の詳細を見る -&gt;
      </Link>
      <p style={text} className="mt-5"><i className="bi bi-award" style={icon}></i>資格</p>
      <ul style={text}>
        <li>2025/05　基本情報技術者試験 合格</li>
        <li>2025/12　応用情報技術者試験 合格</li>
        <li className="text-sm">現在は、情報処理安全確保支援士試験の勉強をしています。</li>
      </ul>
    </div>
  );
}
