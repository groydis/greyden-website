import { Link } from "react-router-dom";
import { Seo } from "../Seo.tsx";
import "./About.css";

export default function About() {
  return (
    <div className="abWrap">
      <Seo
        title="About Me"
        description="About Greyden Scott: software developer from Brisbane, Australia, and a bunch of stuff he could have done had he organised his life better."
        path="/about"
      />
      <div className="ab-marquee" aria-hidden="true">
        <div className="ab-marquee-track">
          <span>
            ★ WELCOME TO MY ABOUT PAGE ★ SIGN MY GUESTBOOK ★ HOT HOT HOT ★ BEST
            VIEWED IN GREYDOS 1.0 ★
          </span>
          <span>
            ★ WELCOME TO MY ABOUT PAGE ★ SIGN MY GUESTBOOK ★ HOT HOT HOT ★ BEST
            VIEWED IN GREYDOS 1.0 ★
          </span>
        </div>
      </div>
      <div className="ab-stage">
        <h1 className="ab-title">About Me!!!</h1>
        <Link to="/" className="ab-home">
          ★ HOME ★ <span className="ab-hot">NEW!</span>
        </Link>
        <div className="ab-plaque">
          <p>
            My name is Greyden and I am a software developer from Brisbane,
            Australia.
            <br />
            This website was built as a homage to the era of internet I grew up
            with.
            <br />
            Talking about yourself is boring, here's a bunch of stuff I could
            have done, had I organised my life better.
          </p>
        </div>
        <figure className="ab-figure">
          <img
            className="ab-pic"
            alt="Me meeting the queen."
            src="/queen.png"
            width={976}
            height={549}
          />
          <figcaption className="ab-caption">
            This one time I really wanted to meet the queen, but not be dressed
            for the occasion. In this instance I'm dressed up as Malakili the
            Rancor Handler from star wars. This is a low effort cosplay. I am
            patiently waiting my turn to shake her hand.
          </figcaption>
        </figure>
        <figure className="ab-figure">
          <img
            className="ab-pic"
            alt="Me meeting former president obama."
            src="/obama.png"
            width={900}
            height={600}
          />
          <figcaption className="ab-caption">
            I've always felt like I had the potential to influence global
            politics, in this instance I had just helped Obama with global
            policies and had casually talked about upcomming new olympic sport
            categories.
          </figcaption>
        </figure>
        <figure className="ab-figure">
          <img
            className="ab-pic"
            alt="Me doing a karate kick."
            src="/karate.png"
            width={900}
            height={600}
          />
          <figcaption className="ab-caption">
            With enough training anything is possible. Here I am stretching
            before an upcomming karate tournament. I won first place with a
            deadly scissor kick. My legs are now registered as deadly weapons.
          </figcaption>
        </figure>
        <figure className="ab-figure">
          <img
            className="ab-pic"
            alt="Me winning a logie."
            src="/logie.png"
            width={900}
            height={600}
          />
          <figcaption className="ab-caption">
            This is my 10th Logie win for oustanding performance on the hit show
            "Secret Life of Us".
          </figcaption>
        </figure>
        <p className="ab-footer-hit">you are visitor #0001337 ~ xoxo</p>
      </div>
    </div>
  );
}
