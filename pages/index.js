import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-3WJ027ZLG2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-3WJ027ZLG2');
</script>

    <meta

      name="description"

      content="Travello provides you with an opportunity to travel to the destinations you always longed for, join this amazing journey."

    />
export default function Home() {
  return (
    <>
      <Head> 
        <title>Ninja List |Home</title>
        <meta name="keywords" content="ninijas"/>
      </Head>
        <div>
          <h1 className={styles.title}>Homepage</h1>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
          <Link href="/ninjas">
          <a className={styles.btn}>See listing</a>
          </Link>
        </div>
    </>
  )
}
