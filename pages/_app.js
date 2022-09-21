import Layout from '../comps/Layout'
import '../styles/globals.css'
<meta

      name="description"

      content="Travello provides you with an opportunity to travel to the destinations you always longed for, join this amazing journey."

    />

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
