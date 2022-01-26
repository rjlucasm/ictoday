import Head from 'next/head'
import Link from 'next/link'
import Footer from '/components/footer'

export default function News22() {
    return (
    <div className="container">
        <Head>
        <title>Internet Computer News</title>
        </Head>
        
        <main className="main">
            <h2 className="title">Internet Computer News</h2>

            <>&#128240;</>

            <Link href="/"><a style={{ color: 'inherit' }}>Home</a></Link>

            <div className="pagesgrid">
            <div className="pagescard">01/26 -&nbsp;
                <a href="https://medium.com/dfinity/the-internet-computer-for-geeks-a-new-dfinity-white-paper-ecb075b2d525" target="_blank" rel="noopener noreferrer">'The Internet Computer for Geeks': A New DFINITY White Paper</a>
            </div>
            <div className="pagescard">01/24 -&nbsp;
                <a href="https://medium.com/dfinity/sonic-dex-launches-new-era-of-defi-with-zero-gas-fees-on-the-internet-computer-f945f84e7793" target="_blank" rel="noopener noreferrer">Sonic DEX Launches New Era of DeFi With Zero Gas Fees on the Internet Computer</a>
                <p>Related:&nbsp;
                <a href="https://uk.sports.yahoo.com/news/first-decentralized-exchange-dfinity-internet-033219886.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAMZS7wdbBQtJfiEj_teuRaxmxpMq_F8iP2IFj9NCr8_TPlwBJkqdyaiIfml7j2rjFVB8803wK7nf7C6urguyLljqPgPy9KOSlX0WcDcYliaRrqkGsRjb0JHmC6CLIA60LRcHaeRIoDx4FrXStKEiVBFcGnt629C7I3zTgcgGg1GB" target="_blank" rel="noopener noreferrer">Yahoo</a></p>
            </div>
            <div className="pagescard">01/21 -&nbsp;
                <a href="https://sonic-ooo.medium.com/sonic-v1-is-out-swapping-tokens-and-liquidity-now-available-on-the-internet-computer-8abc28044cc9" target="_blank" rel="noopener noreferrer">Sonic V1 Is Out! Swapping Tokens and Earning Fees as a Liquidity Provider Now Available on the Internet Computer 🚀</a>
            </div>
            <div className="pagescard">01/19 -&nbsp;
                <a href="https://invezz.com/news/2022/01/19/internet-computer-price-forecast-how-will-icp-perform-by-the-end-of-january-2022/" target="_blank" rel="noopener noreferrer">Internet Computer price forecast: how will ICP perform by the end of January 2022?</a>
            </div>
            <div className="pagescard">01/19 -&nbsp;
                <a href="https://www.investing.com/news/cryptocurrency-news/origyn-foundation-to-launch-ogy-token-amid-major-partnerships-2742241" target="_blank" rel="noopener noreferrer">ORIGYN Foundation to Launch OGY Token Amid Major Partnerships</a>
            </div>
            <div className="pagescard">01/17 -&nbsp;
                <a href="https://venturebeat.com/2022/01/17/united-esports-and-dfinity-foundation-create-10m-blockchain-game-dev-contest/" target="_blank" rel="noopener noreferrer">United Esports and Dfinity Foundation create $10M blockchain game dev contest</a>
            </div>
            <div className="pagescard">01/14 -&nbsp;
                <a href="https://medium.com/contentfly-app-blog/content-fly-bringing-nft-2-0-to-internet-computer-acb7b12a7ca2" target="_blank" rel="noopener noreferrer">Content Fly is Bringing NFT 2.0 to Internet Computer</a>
            </div>
            <div className="pagescard">01/12 -&nbsp;
                <a href="https://medium.com/dfinity/built-for-scalability-how-the-internet-computer-allows-web3-dapps-to-infinitely-scale-35bbe4253318" target="_blank" rel="noopener noreferrer">Built for Scalability: How the Internet Computer Allows Web3 Dapps to Infinitely Scale</a>
            </div>
            <div className="pagescard">01/10 -&nbsp;
                <a href="https://www.tronweekly.com/dfinity-integration-icp-with-btc/" target="_blank" rel="noopener noreferrer">DFINITY foundation inches closer for direct integration of ICP with BTC</a>
            </div>
            <div className="pagescard">01/10 -&nbsp;
                <a href="https://www.banklesstimes.com/2022/01/10/internet-computer-price-at-risk-as-icp-forms-a-double-top/" target="_blank" rel="noopener noreferrer">Internet Computer price at risk as ICP forms a double-top</a>
            </div>
            <div className="pagescard">01/06 -&nbsp;
                <a href="https://www.crowdfundinsider.com/2022/01/185189-internet-computer-dfinity-shares-performance-updates-reports-solid-year-of-developer-and-community-growth/" target="_blank" rel="noopener noreferrer">Internet Computer: DFINITY Shares Performance Updates, Reports Solid Year of Developer and Community Growth</a>
            </div>
            <div className="pagescard">01/05 -&nbsp;
                <a href="https://medium.com/dfinity/the-internet-computers-transaction-speed-and-finality-outpace-other-l1-blockchains-8e7d25e4b2ef" target="_blank" rel="noopener noreferrer">The Internet Computer&apos;s Transaction Speed and Finality Outpace Other L1 Blockchains</a>
            </div>
            <div className="pagescard">01/05 -&nbsp;
                <a href="https://cointelegraph.com/news/internet-computer-correction-risk-rises-after-icp-price-gains-nearly-60-in-5-days" target="_blank" rel="noopener noreferrer">Internet Computer: Correction risk rises after ICP price gains nearly 60% in 5 days</a>
            </div>
            <div className="pagescard">01/05 -&nbsp;
                <a href="https://medium.com/icp-league/the-foundation-of-defi-how-does-icp-work-in-ic-containers-9e515a90e055" target="_blank" rel="noopener noreferrer">The foundation of DeFi, how does ICP work in IC containers?</a>
            </div>
            <div className="pagescard">01/04 -&nbsp;
                <a href="https://medium.com/dfinity/dfinity-in-2021-a-year-of-developer-and-community-growth-on-the-internet-computer-2b8bd36450d8" target="_blank" rel="noopener noreferrer">DFINITY in 2021: A Year of Developer and Community Growth on the Internet Computer</a>
            </div>
            </div>
        </main>

        <Footer/>
        
    </div>
    )
}