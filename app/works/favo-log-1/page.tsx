'use client';

import Link from "next/link";

export default function FavoLog1Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:mx-0 mx-10 md:px-24 pt-24 pb-24">
      <div className="w-full max-w-4xl">
        <Link href="/#works" className="text-emerald-500 hover:underline mb-8 inline-block">
          ← 戻る
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">お気に入り記録１</h1>
        
        <div className="flex justify-center mb-8">
          <img 
            src="/images/favolog1.png" 
            alt="お気に入り記録１" 
            className="lg:w-3/4 rounded-lg mb-6"
          />
        </div>

          <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="badge badge-outline rounded-full">2022年制作</div>
          <Link
            href="https://github.com/koppepam/favo-log"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline"
          >
            ソースコードを開く
          </Link>
        </div>

        <div className="prose max-w-none mb-8">
          <p className="text-base leading-relaxed mb-4">
            お気に入りのコト・モノを記録し、共有できる Web アプリケーションです。N予備校Webアプリケーションコンテスト2022冬 N・S高等学校部門で健闘賞を受賞しました。
          </p>

          <h2 className="text-2xl font-semibold mb-4">使用技術</h2>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="badge badge-lg badge-neutral">JavaScript</div>
            <div className="badge badge-lg badge-neutral">Pug</div>
            <div className="badge badge-lg badge-neutral">PostgreSQL</div>
            <div className="badge badge-lg badge-neutral">Bootstrap</div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">概要</h2>
          <p className="text-base leading-relaxed mb-4">
            お気に入りの情報をメモのように残し、他のユーザーと共有したり、検索したりできるようにしています。また、URLをワンクリックでコピーできる機能を実装し、シンプルながらも日常的に使いやすいアプリを目指しました。
          </p>
          <p className="text-base leading-relaxed mb-4">
            フレームワークを使用せず、JavaScriptで実装しています。データベースにはPostgreSQLを採用し、UIにはBootstrapを使用して、使いやすく、親しみやすい見た目になるよう意識しました
          </p>
          <h2 className="text-2xl font-semibold mb-4">制作背景</h2>
          <p className="text-base leading-relaxed mb-4">
            高校時代に制作したWebアプリケーションです。当時学んでいた範囲の中で、ユーザー登録やデータベースを用いた情報管理など、Webアプリケーションの基本的な機能を一通り実装することを目標に制作しました。<br />
          </p>
          <p className="text-base leading-relaxed mb-4">
            制作当時は、OAuthなどの外部サービスを利用したログイン機能の実装がまだ難しく、ユーザーリストを用いた簡易的な認証方式を採用するなど、今見ると不十分な部分も多くあります。<br />
            セキュリティ面でも、ワンタイムトークンの発行など、当時の知識の中でできる限りの対応をした記憶があります。
          </p>
          <p className="text-base leading-relaxed mb-4">
            しかし、拙いながらもWebアプリケーションの基本的な機能を一通り実装できたことは、継続して学習・開発を続ける原動力になりました。
          </p>
          <h2 className="text-2xl font-semibold my-4">主な機能</h2>
          <ul className="list-disc list-inside text-base leading-relaxed mb-4">
            <li>ユーザは自分のお気に入りを投稿・削除できます。</li>
            <li>他ユーザが投稿した「お気に入り記録」を一覧で見ることができます。</li>
            <li>キーワードで「お気に入り記録」を検索できます。</li>
            <li>投稿のURLをワンクリックでコピーできます。</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
