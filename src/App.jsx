import { Helmet } from 'react-helmet-async'
import Layout from './components/Layout'
import { SEO, SITE_URL } from './lib/seo'

export default function App() {
  const ogImageUrl = `${SITE_URL}${SEO.ogImage}`

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{SEO.title}</title>
        <meta name="description" content={SEO.description} />
        <meta name="keywords" content={SEO.keywords} />
        <link rel="canonical" href={`${SITE_URL}/`} />

        {/* Dynamic overrides — static index.html tags are the primary crawl source */}
        <meta property="og:title" content={SEO.title} />
        <meta property="og:description" content={SEO.description} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={ogImageUrl} />

        <meta name="twitter:title" content={SEO.title} />
        <meta name="twitter:description" content={SEO.description} />
        <meta name="twitter:image" content={ogImageUrl} />
      </Helmet>
      <Layout />
    </>
  )
}
