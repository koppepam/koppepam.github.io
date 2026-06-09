"use client";

import { FormEvent } from "react";

export default async function Contact() {
  const sendContent = (event: FormEvent) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form as HTMLFormElement);
    fetch(`https://script.google.com/macros/s/AKfycbw2UI0puuKQ56L8zcIjkeOaYEV7Ox_7v1fZkBWytYJ3Wx1sFOWxO7i3RGZLd9L6_9VF/exec`, {
      mode: 'no-cors',
      method: 'POST',
      headers: {
        // Accept: 'application/json',
        'Content-type': 'application/x-www-form-urlencoded',
        // 'Access-Control-Allow-Credentials': 'true',
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      console.log(response.status);
      // リダイレクト
      if (response.status === 200) { // 成功は302?
        alert('お問い合わせありがとうございました！');
        console.log(formData);
        location.href = '/';
      } else if (response.status === 400) {
        alert('送信ができませんでした。');
        location.href = '/';
      }
    });
  };

  return (
    <main className="m-24">
      <h1 className="text-lg mb-10">お問い合わせフォーム</h1>
      <div>
          <form id="contactForm" onSubmit={sendContent} >
            <div>
              お名前
              <input className="bg-gray-200 appearance-none border-2 border-gray-400 rounded-sm w-full py-2 px-4 text-gray-700 leading-tight focus:outline-hidden focus:bg-white focus:border-purple-500"
                type="text" name="name" id="name" placeholder="お名前を入力してください" />
            </div>
            <div>
              メールアドレス
              <input className="bg-gray-200 appearance-none border-2 border-gray-400 rounded-sm w-full py-2 px-4 text-gray-700 leading-tight focus:outline-hidden focus:bg-white focus:border-purple-500"
                type="email" name="email" id="email" placeholder="メールアドレスを入力してください" />
            </div>
            <div>
              お問い合わせ内容
              <textarea className="bg-gray-200 appearance-none border-2 border-gray-400 rounded-sm w-full py-2 px-4 text-gray-700 leading-tight focus:outline-hidden focus:bg-white focus:border-purple-500"
                name="content" id="content" rows={10} placeholder="お問い合わせ内容を入力してください" ></textarea>
            </div>
            <button className="rounded-2xl bg-sky-400 hover:bg-sky-600 text-white p-3 mr-3"
              type="submit" >送信する</button>
          </form>
        </div>
    </main>
  );
}