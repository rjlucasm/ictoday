import Head from 'next/head'
import Link from 'next/link'
import Footer from '/components/footer'

export default function News23() {
    return (
    <div className="container">
        <Head>
        <title>Internet Computer News</title>
        </Head>
        
        <main className="main">
            <h2 className="title">Internet Computer News</h2>

            <>&#128240;</>

            <Link href="/"><a style={{ color: 'inherit' }}>Home</a></Link>

            <Link href="/archive"><a style={{ color: 'inherit' }}>Archives</a></Link>

            <div className="pagesgrid">
            <div className="pagescard">01/18 -&nbsp;
                <a href="https://www.banklesstimes.com/news/2023/01/18/internet-computer-stages-a-59percent-comeback-what-next-for-icp/" target="_blank" rel="noopener noreferrer">Internet Computer Stages a 59% Comeback: What Next for ICP?</a>
            </div>
            <div className="pagescard">01/17 -&nbsp;
                <a href="https://medium.com/dfinity/nns-and-icp-token-metrics-monthly-report-dec-2022-39faec907138" target="_blank" rel="noopener noreferrer">NNS and ICP Token Metrics Monthly Report, Dec 2022</a>
            </div>
            <div className="pagescard">01/17 -&nbsp;
                <a href="https://www.benzinga.com/markets/cryptocurrency/23/01/30448758/cryptocurrency-internet-computers-price-increased-more-than-5-within-24-hours" target="_blank" rel="noopener noreferrer">Cryptocurrency Internet Computer&apos;s Price Increased More Than 5% Within 24 hours</a>
            </div>
            <div className="pagescard">01/12 -&nbsp;
                <a href="https://www.thecoinrepublic.com/2023/01/12/internet-computer-price-prediction-bulls-keen-to-register-fresh-swing-above-the-4-50-mark/" target="_blank" rel="noopener noreferrer">Internet Computer Price Prediction: Bulls keen to register fresh swing above the $4.50 mark</a>
            </div>
            <div className="pagescard">01/11 -&nbsp;
                <a href="https://www.thecoinrepublic.com/2023/01/11/icp-price-analysis-token-continues-to-consolidate-in-a-range-hits-resistance-level-twice-whats-next/" target="_blank" rel="noopener noreferrer">ICP Price Analysis: Token continues to consolidate in a range, hits resistance level twice, what&apos;s next?</a>
            </div>
            <div className="pagescard">01/05 -&nbsp;
                <a href="https://coinjournal.net/news/the-rise-and-fall-of-internet-computer-how-icp-imploded/" target="_blank" rel="noopener noreferrer">The rise and fall of Internet Computer: How ICP imploded</a>
            </div>
            </div>
        </main>

        <Footer/>
        
    </div>
    )
}