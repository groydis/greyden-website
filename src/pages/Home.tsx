import { Link } from "react-router-dom";
import { Seo } from "../Seo.tsx";

export default function Home() {
  return (
    <div>
      <Seo
        title="GreyDOS 1.0 | Greyden Scott"
        description="Welcome to GreyDOS 1.0. Greyden Scott's personal website — a Windows 98 / GeoCities homage from a software developer in Brisbane, Australia."
        path="/"
      />
      <div className="bgWrap">
        <img src="/background.jpg" alt="Majestic View" />
      </div>
      <div className="center">
        <img
          className="wordart"
          src="/wordart-gs.png"
          alt="Classic Word out that reads - Greyden Scott"
          width={1797}
          height={885}
        />
      </div>
      <div className="center">
        <div className="window">
          <div className="title-bar">
            <div className="title-bar-text">Command Prompt</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize" />
              <button aria-label="Maximize" />
              <button aria-label="Close" />
            </div>
          </div>
          <div className="window-body">
            <pre>
              Welcome To GreyDOS 1.0 ❮C❯
              <br />
              C:\dir
              <br />
              {" Volume in drive C is OS"}
              <br />
              {" Volume Serial Number is 1337-C0D3R"}
              <br />
              <br />
              {" Directory of C:\\"}
              <br />
              <br />
              {"2021-03-26 12:02PM  ❮DIR❯  "}
              <Link to="/about">ABOUT</Link>
              <br />
              {"2021-03-10 12:16PM  ❮DIR❯  "}
              <Link to="/projects">PROJECTS</Link>
              <br />
              {"2021-02-02 12:01PM  ❮DIR❯  "}
              <a href="https://github.com/groydis">GITHUB</a>
              <br />
              {"2021-04-20 12:08PM  ❮DIR❯  "}
              <a href="https://www.linkedin.com/in/greyden-scott-734122175/">
                LINKEDIN
              </a>
              <br />
              {"2021-01-01 12:01PM  ❮DIR❯  "}
              <Link to="/resume">RESUME</Link>
              <br />
              {"    5 Dir(s) 34,871,164 bytes free"}
              <br />
              {"C:\\"}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
