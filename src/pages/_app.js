import "@/css/tailwind.css";
import Head from 'next/head'
import Header from "@/components/header";
import Footer from "@/components/footer";
import SectionContainer from "@/components/section-container";

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased">
      <Head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      </Head>
      <Header />
      <SectionContainer>
        <main>
          <Component {...pageProps} />
        </main>
      </SectionContainer>
      <Footer />
    </div>
  );
}

export default MyApp;
