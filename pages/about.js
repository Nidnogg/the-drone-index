import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Title from "../components/Title.js";
import MetaTags from "../components/Metatags.js";
import Analytics from "../components/Analytics.js";

const item = {
  hidden: { opacity: 0, y: "15%" },
  show: { opacity: 1, y: "0%" },
  transition: {
    easing: "easeInOut",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home({ designers }) {
  return (
    <div className="container">
      <Head>
        <title>the cyber artnet | wtf</title>
        <link rel="icon" href="/favicon.ico" />
        <MetaTags />
      </Head>

      <Link href="/" shallow={true}>
        <a className="auxNav arrowback">←</a>
      </Link>

      <Title
        className="title m0 p0"
        text="the*cyber&nbsp;art&nbsp;net&nbsp;is"
        noAnimation
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <p className="f1 extend">
          <motion.span variants={item}>where web artisans get recognition.</motion.span>{" "}
         
        </p>
      </motion.div>

      <div className="moreabout">
        <div className="col-left">
          <h3>WTF is this?</h3>
          <p>
            This is like linkedin but without the #GNUcrap. Only link cool work created by cool people. All work is welcome.
          </p>
          <h3>WTF is a web artisan?</h3>
          <p>
            From Laravel's <a className="nidLink" href="https://laravel.com/">page</a> and from my <a href="https://ko-fi.com/post/WTF-is-a-web-artisan-celebrating-fathers-day-O4O1217KO"> my blog </a> a web artisan is any content creator on the internet
            who inspires someone. In this case the people on the list have all inspired me greatly. They rock and roll!
          </p>

          <h3>How do I nominate someone?</h3>
          <p>
            Fill out <a className="nidLink" href="https://thenidnogg.typeform.com/to/VXVWgd2m">this form</a> with a user handle of an artist you're inspired by. 
            Say something about why you like them. Link their work.
          </p>

          <h3>How did you come up with this idea?</h3>
          <p>
            Someone else did - people are amazing. Check it out:
          </p>
          <ul>
            <li>
              <a className="link" href="https://womenwho.design/">
                Women Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://www.womenwhodraw.com/">
                Women Who Draw
              </a>
            </li>
            <li>
              <a className="link" href="http://www.28blacks.com/">
                28 Black Designers
              </a>
            </li>
            <li>
              <a className="link" href="https://www.latinxswhodesign.com/">
                Latinx Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://queerdesign.club/">
                Queer Design Club
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://filipinos-who-design.webflow.io/"
              >
                Filipinos Who Design
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://filipinos-who-design.webflow.io/"
              >
                People Of Craft
              </a>
            </li>
            <li>
              <a className="link" href="https://indianswhodesign.in/">
                Indians Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://www.apiwho.design/">
                Asian & Pacific Islanders Who Design
              </a>
            </li>
            <li>
              <a className="link" href="https://brazilianswho.design/">
                Brazilians Who Design
              </a>
            </li>
          </ul>

          <h3>How did you build this?</h3>
          <p>
            the cyber art net was absolutely built on top of <br />
            <a className="nidLink" href="https://brazilianswho.design/">
               brazilians who design,
            </a>
            <br />godly made available on <br />
            <a className="nidLink" href="https://github.com/zehfernandes/brazilianswhodesign">
              Github
            </a> <br />
              after building
            <a
              className="nidLink"
              href="https://github.com/julesforrest/womenwhodesign"
            >
            <br />Women Who Design.<br />
            </a>
           Huge shout-out to Zeh Fernandes, the <bold>giant</bold> whose shoulders this project rests on.
          </p>

          <h3>Who did this?</h3>
          <ul>
            <li>
              <a className="link" href="https://twitter.com/nidnogg_">
                Henrique Vermelho AKA nidnogg
              </a>
            </li>
            <li>
              <a className="link" href="https://twitter.com/zehf">
                Zeh Fernandes (and all the people who helped this cool guy!)
              </a>
            </li>
          </ul>
        </div>
        <div className="col-right">
          <h3>How can I remove my name?</h3>
          <p>
            Beep me at <a href="https://twitter.com/nidnogg_">Twitter</a> or e-mail me @ <a href="mailto: the.nidnogg@gmail.com">the.nidnogg@gmail.com</a>
          </p>
          <h3>Why poop brown?</h3>
          <p>
            Because software is poop and I like it. Deal with it.
          </p>
        </div>

        <Analytics />
      </div>

      <style jsx>{`
        .extend {
          margin: 0;
          max-width: 17ch;
        }

        .moreabout {
          font-weight: normal;
          font-size: 1.5rem;
          line-height: 140%;
          letter-spacing: 0.01em;
          display: flex;
          margin-top: 8rem;
        }

        .moreabout > div {
          width: 50%;
          max-width: 50ch;
        }

        .col-right {
          padding-left: 3rem;
        }
        .col-left {
          padding-right: 3rem;
        }

        .moreabout p {
          margin: 0;
          padding: 0;
        }

        .moreabout h3 {
          padding: 0;
          margin: 0;
          font-size: 1.5rem;
        }

        .moreabout h3 {
          margin: 4rem 0 0 0;
        }

        ul,
        li {
          padding: 0;
          margin: 0;
          list-style: none;
          margin-top: 0.3rem;
        }

        @media (max-width: 480px) {
          .moreabout {
            display: block;
          }

          .moreabout > div {
            width: 100%;
            max-width: 100%;
            display: block;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
}
