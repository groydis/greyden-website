import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Seo } from "../Seo.tsx";
import "snes.css/dist/snes.min.css";
import "./Projects.css";

function YouTubeEmbed({ src, title }: { src: string; title: string }) {
  return (
    <div className="snes-embed">
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

function Stage({
  file,
  title,
  status,
  containerClass,
  children,
}: {
  file: string;
  title: string;
  status: string;
  containerClass: string;
  children: ReactNode;
}) {
  return (
    <section className={`snes-container ${containerClass}`}>
      <p className="snes-file-label">
        {file} <span className="text-plumber-color">{status}</span>
      </p>
      <h2 className="snes-container-title">{title}</h2>
      {children}
    </section>
  );
}

export default function Projects() {
  return (
    <div className="snes-page">
      <Seo
        title="Projects"
        description="Greyden Scott's projects: Hoppy Dungeon, Squared Stiff, GeoColour, SCANZ.SPACE, Big Brain Bash, Pizza Roulette, Meal Wheel, and Bin Chicken Dinner Royale."
        path="/projects"
      />
      <div className="snes-page-inner">
        <header className="snes-container has-secondary-purple-bg snes-hud">
          <p className="text-plumber-color">PLAYER 1</p>
          <h1 className="snes-container-title">PROJECTS</h1>
          <p>FILE SELECT</p>
          <p className="snes-hud-stats">
            <span className="text-rose-color">♥♥♥</span> WORLD 1-1
          </p>
          <Link to="/" className="snes-button has-plumber-color">
            TITLE SCREEN
          </Link>
        </header>

        <Stage
          file="FILE 1"
          title="Hoppy Dungeon"
          status="NOW PLAYING"
          containerClass="has-grey-bg"
        >
          <img
            className="snes-image"
            alt="Hoppy Dungeon rogue hopping with daggers raised"
            src="/hoppydungeon.jpg"
            width={1024}
            height={576}
          />
          <blockquote className="snes-blockquote has-ember-bg">
            <p>Hop into the dungeon. Survive one row at a time.</p>
          </blockquote>
          <p>
            Hoppy Dungeon is a mobile-first, tile-based dungeon roguelite. Pick
            a class, tap a glowing tile, and advance one row at a time through a
            three-lane dungeon. You are not free to roam.
          </p>
          <p>
            Every step is a choice: fight, evade, take the gold, or trip an
            alarm that pulls the dead closer. Combat is automatic. Survival is
            not. Spend gold with a travelling merchant, choose how you grow, and
            see how far the dungeon will take you.
          </p>
          <ul className="snes-list is-ember-list-color">
            <li>Five classes with different ways to survive</li>
            <li>Weapons, merchants and upgrades that change every run</li>
            <li>Play the browser alpha now, iOS coming soon</li>
          </ul>
          <a
            className="snes-button has-ember-color"
            href="https://hoppydungeon.com/"
          >
            NEW GAME
          </a>
        </Stage>

        <Stage
          file="FILE 2"
          title="Squared Stiff"
          status="NOW PLAYING"
          containerClass="has-grey-bg"
        >
          <img
            className="snes-image"
            alt="Squared Stiff spelled in concrete cubes in a dark tunnel, lit by a fallen flashlight"
            src="/squaredstiff.jpg"
            width={1200}
            height={630}
          />
          <blockquote className="snes-blockquote has-phantom-bg">
            <p>Stay in the light.</p>
          </blockquote>
          <p>
            Squared Stiff is a dark, atmospheric survival game for iPhone and
            iPad, currently in progress. Armed with only a flashlight, you
            explore an endless, ever-changing maze of abandoned hotel corridors,
            underground tunnels and sewers, hunting for batteries to keep the
            darkness at bay.
          </p>
          <p>
            The deeper you travel, the more dangerous it gets. Ghostly creatures
            patrol the corridors, forcing you to change direction and make quick
            decisions with limited visibility. Your flashlight can reveal what
            is waiting ahead, but it cannot protect you. Every second of light
            is borrowed time.
          </p>
          <ul className="snes-list is-phantom-list-color">
            <li>Endless procedural maze</li>
            <li>Swipe controls, low-poly horror</li>
            <li>Find batteries or the light dies</li>
            <li>No exit. Stay alive.</li>
          </ul>
          <a
            className="snes-button has-phantom-color"
            href="https://squaredstiff.app/"
          >
            NEW GAME
          </a>
        </Stage>

        <Stage
          file="FILE 3"
          title="GeoColour"
          status="COMING SOON"
          containerClass="has-soft-green-bg"
        >
          <img
            className="snes-image snes-logo-square"
            alt="GeoColour App Icon"
            src="/geocolour.png"
            width={180}
            height={180}
          />
          <blockquote className="snes-blockquote has-nature-bg">
            <p>Field colour reference, without the bulky chart.</p>
          </blockquote>
          <p>
            After noticing someone return from a remote PNG field trip, where
            they rapeled into the jungle via helicopter with a back pack of
            gear. I questioned why they were carrying a giant book of colour
            samples.
          </p>
          <p>
            The samples where used to identify rock/soil colour. Knowing there
            could be a better way, I digitised the product and tossed it up on
            the app store. Unbenknownst to me it was a world wide problem and
            the original Geo-Color app quickly shot up the charts to 9th
            position in the productivity app section.
          </p>
          <p>
            GeoColour is the next version of that idea: a fast, searchable
            Munsell colour reference for iPhone. Browse soil, Gley and
            geological rock palettes, compare swatches, and search by Munsell
            notation, description or HEX. Colour data stays on the phone, so it
            works in the field with no account and no internet.
          </p>
          <a
            className="snes-button has-nature-color"
            href="https://geocolour.app/"
          >
            NEW GAME
          </a>
        </Stage>

        <Stage
          file="FILE 4"
          title="SCANZ.SPACE"
          status="NOW PLAYING"
          containerClass="has-white-bg"
        >
          <img
            className="snes-image snes-logo-square"
            alt="SCANZ.SPACE Logo"
            src="/scanz.png"
            width={280}
            height={280}
          />
          <blockquote className="snes-blockquote has-ocean-bg">
            <p>The Star Citizen hub for Australia and New Zealand.</p>
          </blockquote>
          <p>
            Community stories, practical tools, guides, events and verse data,
            built by SCANZ.
          </p>
          <ul className="snes-list is-ocean-list-color">
            <li>Plan multi-leg cargo hauls</li>
            <li>Build and share ship loadouts</li>
            <li>Find stations, loot rolls, crew payouts</li>
            <li>Read citizen logs from the AU/NZ verse</li>
          </ul>
          <a className="snes-button has-ocean-color" href="https://scanz.space/">
            CONTINUE
          </a>
        </Stage>

        <Stage
          file="FILE 5"
          title="Big Brain Bash"
          status="GAME OVER"
          containerClass="has-secondary-purple-bg"
        >
          <img
            className="snes-image"
            alt="Big Brain Bash Logo"
            src="/bigbrainbash.jpg"
            width={750}
            height={422}
          />
          <blockquote className="snes-blockquote has-galaxy-bg">
            <p>Battle Royale AI Nonsense. Insert coin. Summon a fighter.</p>
          </blockquote>
          <p>
            Big Brain Bash was an automated AI battle game. Players took their
            wildest or dumbest ideas, mixed them with AI magic, and generated a
            unique digital fighter.
          </p>
          <ul className="snes-list is-galaxy-list-color">
            <li>Type a cursed idea</li>
            <li>Watch AI spawn a fighter</li>
            <li>Auto-brawl other players' creations</li>
            <li>Stream the chaos and climb the leaderboard</li>
          </ul>
          <p>
            Matches and general chaos could be watched live via community
            streams, where players tracked their creations and climbed the
            global leaderboards.
          </p>
          <button className="snes-button has-phantom-color" disabled>
            CONTINUE? NO
          </button>
        </Stage>

        <Stage
          file="FILE 6"
          title="Pizza Roulette"
          status="GAME OVER"
          containerClass="has-aged-yellow-bg"
        >
          <img
            className="snes-image"
            alt="Pizza Roulette Logo"
            src="/pizzaroulettelogo.png"
            width={750}
            height={252}
          />
          <blockquote className="snes-blockquote has-ember-bg">
            <p>15 players. $2 each. 1 winner gets a pizza.</p>
          </blockquote>
          <p>
            Pizza Roulette started as an exercise in entrepreneurship amongst 3
            friends. It quickly grew into a underground cult hit with over
            10,000 players.
          </p>
          <p>
            Each player paid $2 and was placed on to a waiting list. When the
            list reached 15 people, they were automatically directed to a page
            with a wheel on it. The wheel would spin and who ever it landed on
            won a pizza.
          </p>
          <p>
            The pizza order was completely automated, taking details already
            provided by the customer and processing a pizza order through
            Australias largest Pizza Franchines.
          </p>
          <ul className="snes-list is-ember-list-color">
            <li>Charity night launch for the uni food bank</li>
            <li>Facebook live streams of mates playing games</li>
            <li>Then the wheel ran itself every night</li>
            <li>ACMA entered the final boss fight</li>
          </ul>
          <p>
            We launched with a charity night to raise awareness and money for
            our universities food bank. Over the next few weeks the game was
            adapted into a live stream where a friend played video games over
            facebook live and encouraged people to participate in Pizza
            Roulette.
          </p>
          <p>
            One week our friend wasn't available to play video games on stream,
            so we turned the site on without him and it sustained itself without
            additional entertainment. We then began switching the game on every
            night and it grew beyond anything we could of ever imagine.
          </p>
          <p>
            As the game was shared amongsts people all over Australia we began
            to recieve media attention.
          </p>
          <div className="snes-actions">
            <a
              className="snes-button has-ember-color"
              href="https://www.couriermail.com.au/questnews/how-to-get-a-dominos-pizza-delivered-to-your-door-for-2/news-story/e7f2b80a40eb1c13bfcd5cbefca71481"
            >
              Courier Mail
            </a>
            <a
              className="snes-button has-sunshine-color"
              href="https://www.smartcompany.com.au/startupsmart/profiles/pizza-roulette/"
            >
              Smart Company
            </a>
          </div>
          <YouTubeEmbed
            src="https://www.youtube.com/embed/QTyYAWEow_g"
            title="Pizza Roulette on the news"
          />
          <p>
            We were featued in the local news paper, Today Tonight and a sluth
            of "start up" web blogs. We marketed the product mostly via facebook
            using memes to make fun of the experience and the customer base.
          </p>
          <YouTubeEmbed
            src="https://www.youtube.com/embed/lrRfnJXTWck"
            title="Pizza Roulette fan music video"
          />
          <p>
            Eventually, fans began making their own content. One awesome
            collective of lads even put together a song and music video.
          </p>
          <p>
            When covid hit we reached new heights. People sat at home bored and
            lonely looking for a way to keep connected with friends and family.
            Our platform grew and we eventaully caught the attention of the
            Australian Communications and Media Authority.
          </p>
          <blockquote className="snes-blockquote has-plumber-bg">
            <p>
              Rather than clown-a-bout doing a dance with a goverment body we
              decided to cease operations and pursue other projects.
            </p>
          </blockquote>
        </Stage>

        <Stage
          file="FILE 7"
          title="Meal Wheel"
          status="GAME OVER"
          containerClass="has-aged-yellow-bg"
        >
          <img
            className="snes-image"
            alt="Meal Wheel Logo"
            src="/MealWheel.png"
            width={1500}
            height={350}
          />
          <p>
            Meal Wheel is a promotional game licensed to a Brisbane based
            university to promote eating within the campus food court.
          </p>
        </Stage>

        <Stage
          file="FILE 8"
          title="Bin Chicken Dinner Royale"
          status="GAME OVER"
          containerClass="has-grey-bg"
        >
          <img
            className="snes-image snes-logo-square"
            alt="Bin Chicken Dinner Royale Logo"
            src="/droyale.png"
            width={337}
            height={346}
          />
          <p>
            Bin Chicken Dinner Royale was an experiment post Pizza Roulette to
            promote food products through a daily game of flappy bird, where the
            players with the top score won prizes.
          </p>
          <blockquote className="snes-blockquote has-rose-bg">
            <p>
              Unfortunately we were unable to convert players to customers of
              the promoted products and decided to cease operations.
            </p>
          </blockquote>
        </Stage>

        <p className="snes-end-text">
          THANKS FOR PLAYING{" "}
          <Link to="/" className="snes-link text-plumber-color">
            INSERT COIN TO RETURN
          </Link>
        </p>
      </div>
    </div>
  );
}
