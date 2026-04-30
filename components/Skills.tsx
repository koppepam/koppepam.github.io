export default function Skills() {
  return (
    <>
      <div className="lg:w-3/4 ml-5 text-left lg:grid lg:grid-cols-2 divide-y divide-dashed">
        <div className="js-show-on-scroll">
          <p className="text-3xl font-bold">Skills</p>
          <p className="mt-2">※今までに個人で行った内容を記載しています。</p>
        </div>
        <div className="js-show-on-scroll lg:ml-8 py-3 space-y-3">
          <p className="text-lg font-semibold">Environments</p>
          <ul className="">
            <li>MacOS</li>
            <li>Windows</li>
            <li>Docker</li>
            <li>Node.js</li>
            <li>Linux (ubuntu)</li>
          </ul>
        </div>
        <div className="js-show-on-scroll py-3 space-y-3">
          <p className="text-lg font-semibold">Languages</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>SQL</li>
            <li>PHP(キャッチアップが必要)</li>
            <li>Java(キャッチアップが必要)</li>
            <li>Markdown</li>
          </ul>
        </div>
        <div className="js-show-on-scroll lg:ml-8 py-3 space-y-3">
          <p className="text-lg font-semibold">Frameworks / Libraries</p>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Express</li>
            <li>Prisma</li>
            <li>Webpack</li>
            <li>BootStrap</li>
            <li>TainwindCSS</li>
          </ul>
        </div>
        <div className="js-show-on-scroll py-3 space-y-3">
          <p className="text-lg font-semibold">Tools</p>
          <ul>
            <li>VSCode</li>
            <li>Git, GitHub</li>
            <li>Google Workspace</li>
            <li>LINE Developers→LINE botやLINEログインに使用
            </li>
          </ul>
        </div>
        <div className="js-show-on-scroll lg:ml-8 py-3 space-y-3">
          <p className="text-lg font-semibold">Others</p>
          <ul>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>WordPress</li>
            <li>Adobe Photoshop/XD→学校で触れた程度
            </li>
            <li>Google Apps Script</li>
          </ul>
        </div>
      </div>
    </>
  );
}