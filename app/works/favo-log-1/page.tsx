'use client';

import Link from "next/link";

export default function FavoLog1Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-24 pt-24 pb-24">
      <div className="w-full max-w-4xl">
        <Link href="/#works" className="text-emerald-500 hover:underline mb-8 inline-block">
          ← 戻る
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">お気に入り記録１</h1>
        
        <div className="mb-8">
          <img 
            src="/images/favolog1.png" 
            alt="お気に入り記録１" 
            className="w-full rounded-lg mb-6"
          />
        </div>

        <div className="prose max-w-none mb-8">
          <h2 className="text-2xl font-semibold mb-4">概要</h2>
          <p className="text-base leading-relaxed mb-4">
            N予備校Webアプリケーションコンテスト2022冬 N・S高等学校部門で健闘賞を受賞した作品です。
          </p>
          <p className="text-base leading-relaxed mb-4">
            お気に入りの情報を記録・管理・共有できるWebアプリケーションです。モダンなフレームワークを使用せず、Vanilla JavaScriptで実装されています。Pugテンプレートエンジンを用いてサーバーサイドでHTMLを生成し、PostgreSQLをデータベースとして採用しています。
          </p>
          <p className="text-base leading-relaxed mb-4">
            Bootstrapを使用した応答性の高いUIデザインにより、デスクトップからモバイルまで幅広い環境で快適に利用できます。
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">使用技術</h2>
          <div className="flex flex-wrap gap-4">
            <div className="flex flex-col items-center">
              <img src="/images/javascript.svg" alt="JavaScript" className="size-12 mb-2" />
              <span className="text-sm">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/pug.svg" alt="Pug" className="size-12 mb-2" />
              <span className="text-sm">Pug</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/postgresql.svg" alt="PostgreSQL" className="size-12 mb-2" />
              <span className="text-sm">PostgreSQL</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/images/bootstrap.svg" alt="Bootstrap" className="size-12 mb-2" />
              <span className="text-sm">Bootstrap</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-8">
          <a 
            href="https://github.com/koppepam/favo-log" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-full inline-block transition bg-black hover:scale-110 text-white px-6 py-3"
          >
            ソースコードを開く
          </a>
        </div>
      </div>
    </main>
  );
}
