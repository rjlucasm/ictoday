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