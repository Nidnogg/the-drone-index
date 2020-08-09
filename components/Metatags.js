export default function MetaTags() {
  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      {/* <!-- Primary Meta Tags --> */}
      <meta name="title" content="the cyber artnet" />
      <meta
        name="description"
        content="making the web cool again, one web artisan at a time"
      />

      {/* <!-- Open Graph / Facebook --/> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://the-cyber-artnet.vercel.app/img/preview.png" />
      <meta property="og:title" content="the cyber artnet" />
      <meta
        property="og:description"
        content="making the web cool again, one web artisan at a time"
      />
      <meta
        property="og:image"
        content="https://the-cyber-artnet.vercel.app/img/preview.png"
      />

      {/* <!-- Twitter --/> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://brazilianswho.design" />
      <meta property="twitter:title" content="Brazilians Who Design" />
      <meta
        property="twitter:description"
        content="making the web cool again, one web artisan at a time"
      />
      <meta
        property="twitter:image"
        content="https://the-cyber-artnet.vercel.app/img/preview.png"
      />
    </>
  );
}
