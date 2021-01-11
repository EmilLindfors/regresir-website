import '@/css/tailwind.css'
import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import SectionContainer from '@/components/section-container'

export default function App({ Component, pageProps }) {
  return (
    <div className="antialiased">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#00aba9" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
        <Header />
      <SectionContainer>
        <main>
          <Component {...pageProps} />
        </main>
      </SectionContainer>
      <Footer/>
    </div>
  )
}