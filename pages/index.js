import Head from 'next/head'
import Image from 'next/image'
import Sites from '../components/sites'
import Footer from '../components/footer'
import Topnews from '../components/topnews'
import useSWR, { SWRConfig } from 'swr'

const imgSrc = "https://internetcomputer.today/icp.png";
const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function Home() {
  return (
    <div className="container">
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

      {/* <Topnews/> */}

      <main className="main">
        {/* <div className="highlights">
          <a href="https://dscvr.one/post/1008812/__service-nervous-system--key-takeaways-and-comm" target="_blank" rel="noopener noreferrer">Service Nervous System - Key Takeaways (and Community Concerns)</a>
        </div> */}
        
        <h2 className="title">Internet Computer Today</h2>

        <Image src={imgSrc} alt="icp" width={119} height={58} />

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

  if (error) return <div className="grid">failed to load</div>
  if (!data) return <div className="grid">loading...</div>

  return (
     <div className="grid">
       <div className="card">
         <h4>Price</h4> 
         <p>${data[0].current_price}</p>
       </div>

       <div className="card">
         <h4>24h Low / High</h4> 
         <p>${data[0].low_24h} / ${data[0].high_24h}</p>
       </div>

       <div className="card">
         <h4>24h Volume</h4> 
         <p>${data[0].total_volume.toLocaleString('en-US', {maximumFractionDigits:0})}</p>
       </div>

       <div className="card">
         <h4>Market Cap</h4> 
         <p>${data[0].market_cap.toLocaleString('en-US', {maximumFractionDigits:0})}</p>
       </div>

       <div className="card">
         <h4>Fully Diluted Valuation</h4> 
         <p>${data[0].fully_diluted_valuation.toLocaleString('en-US', {maximumFractionDigits:0})}</p>
       </div>

       <div className="card">
         <h4>Circulating Supply</h4> 
         <p>{data[0].circulating_supply.toLocaleString()}</p>
       </div>
     </div>
  )
}