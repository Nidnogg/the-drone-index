import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "../components/Nav.js";
import Filter from "../components/Filter.js";
import Title from "../components/Title.js";
//import Logo from "../components/Logo.js";
import MetaTags from "../components/Metatags.js";
import Analytics from "../components/Analytics.js";
import FilterSVG from "../components/Icons/FilterSVG.js";

export async function getStaticProps() {
  const origin =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000"
      : "https://the-cyber-artnet.vercel.app";

  const res = await fetch(`${origin}/api/designers`);
  const designers = await res.json();

  let uniqueExpertise = new Set();
  designers.map((d) => uniqueExpertise.add(d.expertise));
  let filters = Array.from(uniqueExpertise).map((e) => {
    return { label: e, active: false };
  });

  return {
    props: {
      designers,
      filters,
    },
  };
}

export default function Home({ designers, filters }) {
  const [isReady, setIsReady] = useState(false);
  const [designersList, setDesignersList] = useState(null);
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [filterList, setFilterList] = useState(filters);

  useEffect(() => {
    setDesignersList(shuffle(designers).sort((a, b) => a.order - b.order));
  }, []);

  // Filter
  const handleCloseFilter = (e) => {
    setFilterIsOpen(false);

    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  const handleOpenFilter = (e) => {
    setFilterIsOpen(true);

    e.preventDefault();
  };

  const clearFilter = () => {
    let newFilter = filters.map(({ label }) => {
      return { label: label, active: false };
    });

    setFilterList(newFilter);
    setDesignersList(
      shuffle(designers).sort((a, b) => a.featured - b.featured)
    );
  };

  const handleFilterClick = (indexof) => {
    filterList[indexof].active = filterList[indexof].active ? false : true;
    setFilterList(filterList);

    let activeFilters = filterList
      .filter((d) => d.active == true)
      .map((d) => d.label);

    if (activeFilters.length > 0)
      setDesignersList(
        designers.filter((d) => activeFilters.includes(d.expertise))
      );
    else clearFilter();
  };

  return (
    <div
      className="container"
      style={{
        overflow: isReady ? "hidden" : "auto",
      }}
    >
      <Head>
        <title>the cyber artnet</title>
        <link id="favicon" rel="alternate icon" href="/favicon.ico" />
        <MetaTags />
      </Head>

      {!isReady ? (
        <Content
          designers={designersList}
          handleOpenFilter={handleOpenFilter}
          onClick={filterIsOpen ? handleCloseFilter : false}
          className={filterIsOpen ? "filterIsOpen" : ""}
        />
      ) : null}

      <AnimatePresence>
        {filterIsOpen ? (
          <Filter
            items={filterList}
            handleFilterClick={handleFilterClick}
            handleCloseFilter={handleCloseFilter}
          />
        ) : null}
      </AnimatePresence>

      <style global jsx>{`
        html,
        body {
          overflow: ${filterIsOpen ? "hidden" : "auto"};
        }
      `}</style>
    </div>
  );
}

function Content({ designers, handleOpenFilter, className, onClick }) {
  const tableHeaderRef = useRef();

  useEffect(() => {
    const header = tableHeaderRef.current;
    const sticky = header.getBoundingClientRect().top + 40;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <div className={className} onClick={onClick}>
      <Nav />


      {/* 
      <Title className="title m0 p0" text="cyber&nbsp;artnet" />
      */}

      <div>
        <img className="logoImage" src="/logo.png" alt="the cyber artnet"></img>
      </div>
      
      <h2 className="title shiftUp m0 p0">
        A social media of web artisans who make the web cool again, compiled by 
        <a href="https://nidnogg.github.io/mood-drone/" className="nidLink"> nidnogg.</a>
        <br />
        Made possible by the power of Open Source software. Cheers from #SiliconRio de Janeiro!
        <br />
        <h2>Artisans of the month</h2>

        <h3><a href="https://pl.cdprojektred.com/">CDPROJEKTRED</a> <br />
        Witam CDPROJEKT RED, nazywam się Henrique Vermelho. Witamy w Cyber Artnet.</h3>

        <h3><a href="https://nidnogg.github.io/sky-drone/">Rogério Skylab</a> <br />  
        The culest cyber musician there ever is and ever will be.</h3>
        
        <h3><a href="https://nidnogg.github.io/scar-drone/">Scarface</a> <br />  
        Better not f*** with this movie. Someone go watch it and push it to the limit! (I do not own this movie, watch out!)</h3>

        <h3>Welcome <a href="http://www.im.ufrj.br/index.php/pt/pessoal/docentes/docentes/30-ageu-cavalcanti-pacheco-junior">Ageu</a> - one of the first web artisans!</h3>

        <h3><a href="https://www.canada.ca/en.html">Canada</a> <br />
        We love you, Canada. &#x2665;. Please wear a cool mask. Thanks! Stay safe.</h3>
        
        <h3><a href="https://betaclimbs.herokuapp.com">Betaclimbs</a> <br />
        The coolest climbing routes compiled by <a href="https://github.com/ChristopheNonato">ChristopheNonato</a></h3>

        <h3><a href="https://www.linkedin.com/company/linkedin/">LinkedIn</a> <br />
        The biggest funemployment network ever. You rule the kung ko-fi strets. Long live the cyber artnet!</h3>

        <h3><a href="https://devpost.com/software/augmented-reality-social-media#updates">DevPost</a> <br />
        You guys rock and roll! Long live DevPost and Augmented Reality #future!</h3>

        <h3><a href="https://the-cyber-artnet.vercel.app/">the cyber artnet!</a> <br />
        Just celebrating art + computer science. :)</h3>

        <h3><a href="https://nidnogg.github.io/cylo-drone/">cyloDrone</a> <br />
        One of the my coolest <a href="https://www.patreon.com/nidnogg">patreons</a>.</h3>

        <h3><a href=" http://www.marcoalemar.com">marcoAlemar</a> <br />
        The first cyber artist! Taught me a lot. Thanks buddy.</h3>

        
      </h2> 

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <table className="large tableContent" cellSpacing="0">
          <thead id="tableHeader" ref={tableHeaderRef}>
            <tr>
              <td>Name</td>
              <td className="thsize-aux dn">Location</td>
              <td className="thsize-aux filterTable" onClick={handleOpenFilter}>
                Expertise <FilterSVG />
              </td>
              <td className="thsize-link"></td>
            </tr>
          </thead>
          {designers != null ? (
            <tbody>
              {designers.map((d, i) => (
                <tr key={`${d.name}-${i}`}>
                  <td><a href={d.link}>{d.name}</a></td>
                  <td className="thsize-aux dn"><a href={d.link}>{d.location}</a></td>
                  <td className="thsize-aux"><a href={d.link}>{d.expertise}</a></td>
                  <td className="thsize-link"><a href={d.link}>→</a></td>
                </tr>
              ))}
            </tbody>
          ) : null}
        </table>
      </motion.div>
      <style jsx>{`

        .shiftUp {
          position: relative;
          bottom: 120px;
          left: 20px;
          
        }

        .logoImage {
          position: relative;
          width: 100vw;
          right: 3%;
          height: auto;
          justify-content: center;
          z-index: -1;
        }

        .nidLink {

        }

        a {
          text-decoration: none;
        }
        .tableContent {
          padding-top: 18vh;
        }

        .filterTable {
          cursor: pointer;
        }

        thead {
          height: 2.2rem;
        }

        .thsize-aux {
          width: 20%;
        }

        .thsize-link {
          width: 2rem;
          text-align: right;
        }

        @media (max-width: 480px) {
          .thsize-aux {
            width: 30%;
          }
        }

        tbody a {
          width: 100%;
          padding-bottom: 0.6em;
          padding-top: 0.6em;
          color: inherit;
          display: inline-block;
        }

        table tbody td {
          padding-top: 0;
          padding-bottom: 0;
        }
      `}</style>

      <Analytics />
    </div>
  );
}

function shuffle(array) {
  var m = array.length,
    temp,
    i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    temp = array[m];
    array[m] = array[i];
    array[i] = temp;
  }

  return array;
}
