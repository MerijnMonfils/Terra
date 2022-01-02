import '../styles/globals.css';
import Navigation from '../components/navigation';
import { DefaultSeo } from 'next-seo';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  const baseTitle = 'Terra';
  const siteDescription = 'A personal website that has specific information regarding a homebrew fantasy world.';

  return (
    <>
      <DefaultSeo
        titleTemplate={`${baseTitle} | %s`}
        defaultTitle={baseTitle}
        description={siteDescription}
        openGraph={{
          type: 'website',
          locale: 'nl_NL',
          url: 'https://merijnmonfils.com',
          site_name: baseTitle,
          title: baseTitle,
          description: siteDescription,
        }}
      />

      <Navigation>
        <Component {...pageProps} />
      </Navigation>

      <Footer />
    </>
  );
}

export default MyApp;
