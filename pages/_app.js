import "../styles/index.css";
//import Head from 'next/head'
import Header from "@/components/header";
import Footer from "@/components/footer";
import SectionContainer from "@/components/section-container";

function MyApp({ Component, pageProps }) {
  return (
    <div className="antialiased">
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
