'use client';

import Worksframe from "./Worksframe";
import { FadeIn } from "../app/utils/fadeIn";
import { useEffect } from "react";

export default function Works() {
  useEffect(() => {
    FadeIn();
  }, []);
  return (
    <>
      <p className="js-show-on-scroll text-3xl font-bold mb-10">Works</p>
      <div className="grid lg:grid-cols-2 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-left">
        <Worksframe title="災害情報お知らせアプリ" image="/images/disaster-info.png" worklink="https://disaster-info-6cpa.onrender.com/" codelink="https://github.com/koppepam/disaster-info">
          <p className="mt-10 lg:max-w-[55ch] w-full text-sm opacity-50">
            N予備校Webアプリケーションコンテスト2023冬　学園部門<br/>優秀賞受賞<br/>災害情報をお知らせします。気象庁防災情報XMLフォーマットをもとに作成。<br className="md:hidden"/>LINEログイン機能・LINE bot付き。<br/>
            ※データベースの無料期間終了に伴い、一部の機能を停止しました。Renderの無料プランを使用しているため、初回アクセス時に表示まで時間がかかる場合があります。
          </p>
          <div className="lg:max-w-[55ch] w-full m-2 space-x-1 flex">
            <img src="/images/typescript-icon.svg" alt="TypeScript" className="size-10"/>
            <img src="/images/react.svg" alt="React" className="size-10"/>
            <img src="/images/nextjs-icon.svg" alt="Next.js" className="size-10"/>
            <img src="/images/tailwindcss-icon.svg" alt="Tailwind CSS" className="size-10"/>
            <img src="/images/mysql-icon.svg" alt="MySQL" className="size-10"/>
            <img src="/images/google-cloud.svg" alt="Google Cloud" className="size-10"/>
            <img src="/images/Google_Apps_Script.svg.png" alt="Google Apps Script" className="size-10"/>
            <img src="/images/LINE_Brand_icon.png" alt="LINE" className="size-10"/>
          </div>
        </Worksframe>

        <Worksframe title="予定お知らせbot" image="/images/schedule-bot.png" worklink="" codelink="https://gist.github.com/koppepam/afdacaaff754c6a743205e45c967be07">
          <p className="mt-5 lg:max-w-[55ch] w-full text-sm opacity-50">
            Googleカレンダーから今日・明日の予定を取得し、定時に通知するLINE botです。Google Apps Scriptで作成。
          </p>
          <div className="lg:max-w-[55ch] w-full m-2 space-x-1 flex">
            <img src="/images/Google_Apps_Script.svg.png" alt="Google Apps Script" className="size-10"/>
            <img src="/images/LINE_Brand_icon.png" alt="LINE" className="size-10"/>
          </div>
        </Worksframe>

        <Worksframe title="お気に入り記録１" image="/images/favolog1.png" worklink="" codelink="https://github.com/koppepam/favo-log">
          <p className="mt-5 lg:max-w-[55ch] w-full text-sm opacity-50">
            N予備校Webアプリケーションコンテスト2022冬<br/>N・S高等学校部門　健闘賞受賞<br/>お気に入りを記録・共有できます。フレームワークは使用せずに作成しました。
          </p>
          <div className="lg:max-w-[55ch] w-full m-2 space-x-1 flex">
            <img src="/images/javascript.svg" alt="JavaScript" className="size-10"/>
            <img src="/images/pug.svg" alt="Pug" className="size-10"/>
            <img src="/images/postgresql.svg" alt="PostgreSQL" className="size-10"/>
            <img src="/images/bootstrap.svg" alt="Bootstrap" className="size-10"/>
          </div>
        </Worksframe>

        <Worksframe title="パーソナルカラー診断サイト" image="/images/color.png" worklink="https://koppepam.github.io/color/color.html" codelink="https://github.com/koppepam/color">
          <p className="mt-5 lg:max-w-[55ch] w-full text-sm opacity-50">
            N予備校動くWebページコンテスト2022夏<br/>N・S高等学校部門　健闘賞受賞<br/>質問に答えると自分のパーソナルカラーがわかります。GitHub Pagesで公開。正確な診断はできませんが、楽しんでいただければ幸いです。
          </p>
          <div className="lg:max-w-[55ch] w-full m-2 space-x-1 flex">
            <img src="/images/javascript.svg" alt="JavaScript" className="size-10"/>
            <img src="/images/html-5.svg" alt="HTML5" className="size-10"/>
            <img src="/images/css-3.svg" alt="CSS3" className="size-10"/>
          </div>
        </Worksframe>

        <Worksframe title="お気に入り記録２" image="" worklink="" codelink="https://github.com/koppepam/favo-log2">
          <p className="m-0 lg:max-w-[55ch] w-full text-sm opacity-50">
            お気に入り記録１をExpressで再度作成しました。GitHubでログインができます。
          </p>
          <div className="lg:max-w-[55ch] w-full m-2 space-x-1 flex">
            <img src="/images/javascript.svg" alt="JavaScript" className="size-10"/>
            <img src="/images/express.svg" alt="Express" className="size-10"/>
            <img src="/images/pug.svg" alt="Pug" className="size-10"/>
            <img src="/images/postgresql.svg" alt="PostgreSQL" className="size-10"/>
            <img src="/images/bootstrap.svg" alt="Bootstrap" className="size-10"/>
          </div>
        </Worksframe>

        <Worksframe title="ポートフォリオ" image="" worklink="https://portfolio-17455.web.app/" codelink="https://github.com/koppepam/portfolio">
          <p className="m-0 lg:max-w-[55ch] w-full text-sm opacity-50">
            このポートフォリオサイトです。
          </p>
          <div className="lg:max-w-[55ch] w-full m-2 space-x-1 flex">
            <img src="/images/typescript-icon.svg" alt="TypeScript" className="size-10"/>
            <img src="/images/react.svg" alt="React" className="size-10"/>
            <img src="/images/nextjs-icon.svg" alt="Next.js" className="size-10"/>
            <img src="/images/tailwindcss-icon.svg" alt="Tailwind CSS" className="size-10"/>
            <img src="/images/firebase.svg" alt="Firebase" className="size-10"/>
          </div>
        </Worksframe>
      </div>
    </>
  );
}