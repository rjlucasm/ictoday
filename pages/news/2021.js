import Head from 'next/head'
import Link from 'next/link'
import Footer from '/components/footer'

export default function News21() {
    return (
    <div className="container">
        <Head>
        <title>Internet Computer News</title>
        </Head>
        
        <main className="main">
            <h2 className="title">Internet Computer News</h2>

            <>&#128240;</>

            <Link href="/"><a style={{ color: 'inherit' }}>Home</a></Link>
            {/* <a href="https://www.weekindfinity.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'blue' }}>Week in Dfinity News</a> */}

            <div className="pagesgrid">
            <div className="pagescard">10/21 -&nbsp;
                <a href="https://medium.com/dfinity/optimizing-the-internet-computer-memory-systems-performance-c0253e94f60" target="_blank" rel="noopener noreferrer">Optimizing the Internet Computer Memory System’s Performance</a>
            </div>
            <div className="pagescard">10/21 -&nbsp;
                <a href="https://usethebitcoin.com/what-bitcoin-smart-contracts-will-mean-for-defi/" target="_blank" rel="noopener noreferrer">No Bridge: What Bitcoin Smart Contracts Will Mean for DeFi</a>
            </div>
            <div className="pagescard">10/20 -&nbsp;
                <a href="https://medium.com/dfinity/secure-scalability-the-internet-computers-peer-to-peer-layer-6662d451f2cc" target="_blank" rel="noopener noreferrer">Secure Scalability: The Internet Computer’s Peer-to-Peer Layer</a>
            </div>
            <div className="pagescard">10/19 -&nbsp;
                <a href="https://youtu.be/7WvgON_5XCU" target="_blank" rel="noopener noreferrer">Blockchain Singularity with Dominic Williams</a>
            </div>
            <div className="pagescard">10/18 -&nbsp;
                <a href="https://www.crowdfundinsider.com/2021/10/181778-internet-computer-project-dfinity-dev-grant-program-provides-102-grants-valued-at-2m/" target="_blank" rel="noopener noreferrer">DFINITY Dev Grant Program Provides 102 Grants Valued at $2M+</a>
            </div>
            <div className="pagescard">10/15 -&nbsp;
                <a href="https://medium.com/infinityswap/how-the-token-economy-will-power-internet-computer-adoption-information-on-infinityswaps-4e38706bd2ba" target="_blank" rel="noopener noreferrer">How the Token Economy will Power Internet Computer Adoption</a>
            </div>
            <div className="pagescard">10/15 -&nbsp;
                <a href="https://toniqlabs.medium.com/introducing-epic-nfts-bc3ecb90a782" target="_blank" rel="noopener noreferrer">Introducing Epic NFTs</a>
            </div>
            <div className="pagescard">10/15 -&nbsp;
                <a href="https://dailycoin.com/great-news-for-3d-artists-interactive-nft-platform-has-launched/" target="_blank" rel="noopener noreferrer">Great News for 3D Artists: Interactive NFT Platform Has Launched</a>
            </div>
            <div className="pagescard">10/14 -&nbsp;
                <a href="https://medium.com/dfinity/dfinity-developer-grant-program-awards-102-grants-worth-2-04m-b49005d181cf" target="_blank" rel="noopener noreferrer">DFINITY Developer Grant Program Awards 102 Grants Worth $2.04M</a>
            </div>
            <div className="pagescard">10/14 -&nbsp;
                <a href="https://www.marketwatch.com/press-release/icme-awarded-grant-from-the-dfinity-foundation-to-build-on-the-internet-computer-2021-10-14" target="_blank" rel="noopener noreferrer">ICME Awarded Grant From the DFINITY Foundation</a>
            </div>
            </div>
        </main>

        <Footer/>
        
    </div>
    )
}