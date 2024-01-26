import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon/favicon.ico" />

          <meta name="title" content="Your Website Title" />
          <meta name="description" content="A brief description of your page" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://gorilla-labs-sandbox.org" />
          <meta property="og:title" content="Your Website Title" />
          <meta
            property="og:description"
            content="A brief description of your page"
          />
          <meta
            property="og:image"
            content="https://gorilla-labs-sandbox.org/some.png"
          />

          {/* Here you can add global scripts, stylesheets, meta tags, etc. */}
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
