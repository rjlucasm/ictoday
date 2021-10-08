import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sites from '../components/sites'
import Footer from '../components/footer'
import useSWR, { SWRConfig } from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Internet Computer Today</title>
        <meta name="description" content="Internet Computer (ICP) Price, Market Cap, Volume, Circulating Supply, Wallets and Explorers. All about Dfinity Cyberspace." />
        
        <meta name='og:type' content='website' />
        <meta name='og:title' content='Internet Computer Today'/>
        <meta name='og:description' content='Internet Computer (ICP) Price, Market Cap, Volume, Circulating Supply, Wallets and Explorers. All about Dfinity Cyberspace.' />

        <meta name='twitter:card' content='summary' />
        <meta name='twitter:title' content='Internet Computer Today' />
        <meta name='twitter:description' content='Internet Computer (ICP) Price, Market Cap, Volume, Circulating Supply, Wallets and Explorers. All about Dfinity Cyberspace.' />

        <meta name="google-site-verification" content="3fDCrJUUQIo7GSYLlE-KnTSiesID0eUY3QJo0tys0wI" />
      </Head>

      <main className={styles.main}>
        {/* <div className={styles.highlights}>
          <a href="https://h5aet-waaaa-aaaab-qaamq-cai.raw.ic0.app/post/629405/official-poll-dscvr-hackathon-season-2-the-integ" target="_blank" rel="noopener noreferrer">Go Vote For Your Favorite DSCVR Hackathon Season 2 Game!</a>
        </div> */}
        
        <h2 className={styles.title}>Internet Computer Today</h2>

        <Image src="/icp.png" alt="icp" width={119} height={58} />

        <><SWRConfig value = {{ fetcher }}>
          <Icp />
        </SWRConfig></>

        <Sites/>
      </main>

      <Footer/>

    </div>
  )
}

function Icp(){
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=internet-computer&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const { data, error } = useSWR(url, { refreshInterval: 5000 });

  if (error) return <div className={styles.grid}>failed to load</div>
  if (!data) return <div className={styles.grid}>loading...</div>

  return (
     <div className={styles.grid}>
       <div className={styles.card}>
         <h4>Price</h4> 
         <p>${data[0].current_price}</p>
       </div>

       <div className={styles.card}>
         <h4>24h Low / High</h4> 
         <p>${data[0].low_24h} / ${data[0].high_24h}</p>
       </div>
 
       <div className={styles.card}>
         <h4>24h Volume</h4> 
         <p>${data[0].total_volume.toLocaleString('en-US', {maximumFractionDigits:0})}</p>
       </div>

       <div className={styles.card}>
         <h4>Market Cap</h4> 
         <p>${data[0].market_cap.toLocaleString('en-US', {maximumFractionDigits:0})}</p>
       </div>

       <div className={styles.card}>
         <h4>Fully Diluted Valuation</h4> 
         <p>${data[0].fully_diluted_valuation.toLocaleString('en-US', {maximumFractionDigits:0})}</p>
       </div>

       <div className={styles.card}>
         <h4>Circulating Supply</h4> 
         <p>{data[0].circulating_supply.toLocaleString()}</p>
       </div>
     </div>
  )
}
