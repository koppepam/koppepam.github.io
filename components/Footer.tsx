'use client';

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-15">
      <div className="flex flex-col items-center gap-6">
        <nav className="flex flex-wrap gap-6 md:gap-8 justify-center">
          <Link href="/" className="hover:text-emerald-500 transition-colors">
            ホーム
          </Link>
          <Link href="/#works" className="hover:text-emerald-500 transition-colors">
            ポートフォリオ
          </Link>
        </nav>
        <nav className="flex justify-center gap-6 md:gap-8">
          <a
            href="https://github.com/koppepam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition-colors"
            aria-label="GitHub"
            title="GitHub"
          >
            <img src="/images/github-icon.svg" alt="GitHub" className="size-8"/>
          </a>
          <a
            href="https://qiita.com/koppepam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-500 transition-colors"
            aria-label="Qiita"
            title="Qiita"
          >
            <img src="/images/favicon.png" alt="Qiita" className="size-8"/>
          </a>
        </nav>
        <p className="text-sm opacity-50">
          © 2026 Rise Yoneyama
        </p>
      </div>
    </footer>
  );
}