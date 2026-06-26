import { Helmet } from 'react-helmet-async'
import Layout from './components/Layout'

export default function App() {
  return (
    <>
      <Helmet>
        <title>Muhammad Subhan Siddiqui | Portfolio</title>
        <meta
          name="description"
          content="AI/Full-Stack Engineer specializing in LLM application development, agentic systems, and MERN development."
        />
      </Helmet>
      <Layout />
    </>
  )
}
