'use client';

import Link from "next/link";

type Props = {
  image: string;
  title: string;
  worklink: string;
  codelink: string;
  detailLink?: string;
  children: React.ReactNode; // 説明とロゴ
}

export default function Worksframe(props: Props) {
  return (
    <div className="js-show-on-scroll mx-5 my-3 group rounded-lg border px-5 py-4 transition-colors">
      <h2 className="my-3 text-2xl font-semibold">
        {props.title}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt; {/* 矢印 */}
        </span>
      </h2>
      {images(props)}
      {props.children}
      <div className="flex items-center m-5">
        {(props.detailLink != undefined) &&
           (
            <Link href={props.detailLink}
              className="badge badge-outline badge-accent hover:bg-accent hover:text-white transition-colors">
              詳細を見る -&gt;
            </Link>
          )
        }
        <div className="flex gap-3 ml-auto">
          {links(props)}
        </div>
      </div>
    </div>
  );
}

const images = (props: Props) => {
  if (props.image != "") {
    return (
      <img src={props.image} alt="サンプルイメージ" className="mx-auto h-50" />
    );
  }
  return <></>
}

const links = (props: Props) => {
  if (props.worklink != "" && props.codelink != "") {
    return (
      <>
        <div className="tooltip" data-tip="ページを開く">
          <Link href={props.worklink} target="_blank" rel="noopener noreferrer"
            className="btn btn-sm btn-circle btn-outline btn-info">
            <i className="bi bi-globe"></i>
          </Link>
        </div>
        <div className="tooltip" data-tip="ソースコードを開く">
          <Link href={props.codelink} target="_blank" rel="noopener noreferrer"
            className="btn btn-sm btn-circle btn-outline btn-neutral">
            <i className="bi bi-github"></i>
          </Link>
        </div>
      </>
    );
  } else if (props.worklink != "" && props.codelink == "") {
    return (
      <div className="tooltip" data-tip="ページを開く">
        <Link href={props.worklink} target="_blank" rel="noopener noreferrer"
          className="btn btn-sm btn-circle btn-outline btn-info">
          <i className="bi bi-globe"></i>
        </Link>
      </div>
    );
  } else if (props.worklink == "" && props.codelink != "") {
    return (
      <div className="tooltip" data-tip="ソースコードを開く">
        <Link href={props.codelink} target="_blank" rel="noopener noreferrer"
          className="btn btn-sm btn-circle btn-outline btn-neutral">
          <i className="bi bi-github"></i>
        </Link>
      </div>
    );
  }
  return <></>
}
