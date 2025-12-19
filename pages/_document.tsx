import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="km">
        <Head>
          {/* Favicon */}
          <link rel="icon" href="/images/icon.png" />
          {/* Preload Niradei woff2 if available; fallback to ttf will be used by @font-face */}
          <link
            rel="preload"
            href="/fonts/Niradei-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Niradei-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          {/* Structured Data for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "1000 Bags for Kids Cambodia",
                "url": "https://www.bagsofsmile.asia",
                "logo": "https://www.bagsofsmile.asia/images/metaimage.png",
                "description": "Help us provide school bags and educational supplies to children in Cambodia",
                "foundingDate": "2025",
                "areaServed": "Cambodia",
                "sameAs": [
                  "https://www.facebook.com/CADT.sa"
                ]
              })
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
