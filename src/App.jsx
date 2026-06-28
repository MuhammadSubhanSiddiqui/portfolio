import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import PageLoader from './components/PageLoader'
import NotFound from './sections/NotFound'
import { SEO, SITE_URL } from './lib/seo'

export default function App() {
  const [loading, setLoading] = useState(true)
  const ogImageUrl = `${SITE_URL}${SEO.ogImage}`

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 850)
    return () => window.clearTimeout(timer)
  }, [])

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
      <PageLoader visible={loading} />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </>
  )
}
