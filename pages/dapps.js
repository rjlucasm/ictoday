import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer'

export default function Dapps() {
    return (
    <div className="container">
        <Head>
        <title>Internet Computer Dapps</title>
        </Head>
        
        <main className="main">
            <h2 className="title">Internet Computer Dapps</h2>

            <>&#128172;</>

            <Link href="/">Home</Link>

            <div className="pagesgrid">
            <div className="pagescard">
                <a href="https://catalyze.one/" target="_blank" rel="noopener noreferrer">Catalyze</a> - The premier Web 3 Discord/Telegram alternative for community engagement & growth
            </div>
            <div className="pagescard">
                <a href="https://contentfly.app/" target="_blank" rel="noopener noreferrer">Content Fly</a> - Web3 job management tool &amp; marketplace
            </div>
            <div className="pagescard">
                <a href="https://distrikt.app/" target="_blank" rel="noopener noreferrer">Distrikt</a> - A decentralized, professional social media network that empowers users. 100% on the blockchain
            </div>
            <div className="pagescard">
                <a href="https://dmail.ai/" target="_blank" rel="noopener noreferrer">DMail</a> - The first blockchain mailbox product
            </div>
            <div className="pagescard">
                <a href="https://dscvr.one/" target="_blank" rel="noopener noreferrer">Dscvr</a> - A completely decentralized social content platform
            </div>
            <div className="pagescard">
                <a href="https://dsocial.app" target="_blank" rel="noopener noreferrer">DSocial</a> - Decentralised &amp; censorship-resistant version of YouTube
            </div>
            <div className="pagescard">
                <a href="https://hotornot.wtf/" target="_blank" rel="noopener noreferrer">Hot or Not</a> - IC&apos;s first decentralised TikTok
            </div>
            <div className="pagescard">
                <a href="http://icdrive.co/" target="_blank" rel="noopener noreferrer">IC Drive</a> - A decentralized private storage app built on the Internet Computer
            </div>
            <div className="pagescard">
                <a href="https://icworks.xyz/" target="_blank" rel="noopener noreferrer">ICWorks</a> - A decentralized job marketplace for the Web3 era
            </div>
            <div className="pagescard">
                <a href="https://kontribute.app/" target="_blank" rel="noopener noreferrer">Kontribute</a> - Interactive dapp that brings together readers, writers and NFTs
            </div>
            <div className="pagescard">
                <a href="https://modclub.app/" target="_blank" rel="noopener noreferrer">ModClub</a> - Decentralized user generated content moderation service, to integrate with existing Internet Computer dapps
            </div>
            <div className="pagescard">
                <a href="https://exwqn-uaaaa-aaaaf-qaeaa-cai.ic0.app/" target="_blank" rel="noopener noreferrer">Nuance</a> - Web3 blogging. Built on, and for, the new web
            </div>
            <div className="pagescard">
                <a href="https://oc.app/?ref=7vpgo-vaaaa-aaaaf-aah5a-cai" target="_blank" rel="noopener noreferrer">Open Chat</a> - Chat. On the blockchain. In real time
            </div>
            <div className="pagescard">
                <a href="https://papy.rs/" target="_blank" rel="noopener noreferrer">Papyrs</a> - An open-source, privacy-first, decentralized blogging platform that lives 100% on chain
            </div>
            <div className="pagescard">
                <a href="https://y3f56-pyaaa-aaaad-qaxoq-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Piped</a> - An alternative privacy-friendly YouTube frontend which is efficient by design
            </div>
            <div className="pagescard">
                <a href="https://portal.one/" target="_blank" rel="noopener noreferrer">Portal</a> - Decentralized live streaming service
            </div>
            <div className="pagescard">
                <a href="https://querio.io/" target="_blank" rel="noopener noreferrer">Querio</a> - Decentralized web3.0 search engine of exceptional speed and accuracy that empowers its users to search over the Internet Computer
            </div>
            <div className="pagescard">
                <a href="https://sfjch-siaaa-aaaak-qarnq-cai.ic0.app/" target="_blank" rel="noopener noreferrer">Seachan</a> - Censorship resistant decentralized fileboard
            </div>
            <div className="pagescard">
                <a href="https://seers.social/" target="_blank" rel="noopener noreferrer">Seers</a> - Social Network for forecasting. Prediction Markets and much more
            </div>
            <div className="pagescard">
                <a href="https://2fydv-iqaaa-aaaak-qap6q-cai.ic0.app/" target="_blank" rel="noopener noreferrer">Signals</a> -  A location based chat app for making connections, creating communities and discovering events
            </div>
            <div className="pagescard">
                <a href="https://taggr.top/" target="_blank" rel="noopener noreferrer">Taggr</a> - An experimental social network
            </div>
            <div className="pagescard">
                <a href="https://rivyl-6aaaa-aaaaf-qaapq-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">The Wall</a> - A crossover Ethereum/Internet Computer demo app
            </div>
            </div>
        </main>

        <Footer/>
        
    </div>
    )
}