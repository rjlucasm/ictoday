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
            <div className="pagescard">01/05 -&nbsp;
                <a href="https://coinjournal.net/news/the-rise-and-fall-of-internet-computer-how-icp-imploded/" target="_blank" rel="noopener noreferrer">The rise and fall of Internet Computer: How ICP imploded</a>
            </div>
            </div>
        </main>

        <Footer/>
        
    </div>
    )
}