'use client';

import Link from "next/link";

export default function DisasterInfoPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:mx-0 mx-10 md:px-24 pt-24 pb-24">
      <div className="w-full max-w-4xl">
        <Link href="/#works" className="text-emerald-500 hover:underline mb-8 inline-block">
          ← 戻る
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">災害情報お知らせアプリ</h1>

        <div className="mb-8">
          <img
            src="/images/disaster-info.png"
            alt="災害情報お知らせアプリ"
            className="w-full rounded-lg mb-6"
            width={800}
            height={450}
          />
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="badge badge-outline rounded-full">2023年制作</div>
          <Link
            href="https://disaster-info-6cpa.onrender.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline btn-primary"
          >
            ページを開く
          </Link>
          <Link
            href="https://github.com/koppepam/disaster-info"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline"
          >
            ソースコードを開く
          </Link>
        </div>

        <div className="prose max-w-none mb-8">
          <p className="text-base leading-relaxed mb-4">
            全国の災害情報を表示し、登録した地域は LINE で通知する Web アプリケーションです。N予備校 Web アプリケーションコンテスト 2023 冬 学園部門で優秀賞を受賞しました。
          </p>

          <h2 className="text-2xl font-semibold mb-4">使用技術</h2>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="badge badge-lg badge-neutral">TypeScript</div>
            <div className="badge badge-lg badge-neutral">React</div>
            <div className="badge badge-lg badge-neutral">Next.js</div>
            <div className="badge badge-lg badge-neutral">NextAuth.js</div>
            <div className="badge badge-lg badge-neutral">MySQL</div>
            <div className="badge badge-lg badge-neutral">Google Cloud</div>
            <div className="badge badge-lg badge-neutral">Tailwind CSS</div>
            <div className="badge badge-lg badge-neutral">Google Apps Script</div>
            <div className="badge badge-lg badge-neutral">LINE API</div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">概要・制作背景</h2>
          <p className="text-base leading-relaxed mb-4">
            気象庁の防災情報 XML フォーマットをもとに、災害情報をリアルタイムで通知するWebアプリケーションです。LINE ログイン後は、登録した地域の災害情報を LINE Bot で通知します。
            <br />
            上京を控え、今後離れて暮らす家族の周囲で起きている災害の状況を知ることができれば、少しでも安心につながるのではないかと考え、「登録した地域の災害情報を継続的に受け取れるアプリ」をテーマに制作しました。
            <br /><br />
            実装には、初めて TypeScript・React・Next.js を採用し、静的型付けやコンポーネント分割を活かして開発しました。<br />
            また、Google Apps Script では気象庁の災害情報を自動取得する処理と、LINE Bot による通知を実装し、単なる閲覧用アプリではなく、利用者ごとに必要な情報を届けられる構成にしています。
          </p>
          <p className="text-base leading-relaxed mb-4 bg-secondary-content">
            ※注意：データベースの無料期間終了に伴い、一部の機能を停止しています。また、Render の無料プランを使用しているため、初回アクセス時に表示まで時間がかかる場合があります。
          </p>
        </div>
        <h2 className="text-2xl font-semibold my-4">主な機能</h2>
        <ul className="list-disc list-inside text-base leading-relaxed mb-4">
          <li>トップページでは、全国の災害情報をリアルタイム表示します。</li>
          <li>LINEログイン後、地域登録が可能になります。登録が完了すると、その地域の災害情報が発表された場合、LINE Botが通知を送信します。</li>
        </ul>
        </div>
    </main>
  );
}