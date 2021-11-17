import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer'

export default function Watchlist() {
    return (
    <div className="container">
        <Head>
        <title>Watchlist</title>
        </Head>
        
        <main className="main">
            <h2 className="title">Watchlist</h2>

            <>&#128064;</>

            <Link href="/"><a style={{ color: 'inherit' }}>Home</a></Link> 

            <div className="pagesgrid">
            <div className="pagescard">
                <a href="https://eemeo-taaaa-aaaad-qakjq-cai.ic.fleek.co/" target="_blank" rel="noopener noreferrer">Aedile</a> - Project management dapp
            </div>
            <div className="pagescard">
                <a href="https://aizxe-qaaaa-aaaah-aapya-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">AstroX</a> - Dart developer tools and “mini apps” framework
            </div>
            <div className="pagescard">
                <a href="https://vzaga-2aaaa-aaaaf-qaaxq-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Bunchd</a> - Create, collaborate, and earn on the subscription platform controlled by creators
            </div>
            <div className="pagescard">
                <a href="https://bv7wf-6qaaa-aaaai-qahbq-cai.raw.ic0.app/sign-up" target="_blank" rel="noopener noreferrer">CanCan</a> - A scalable video sharing service
            </div>
            <div className="pagescard">
                <a href="https://canistore.io/" target="_blank" rel="noopener noreferrer">Canistore</a> - Next-gen social store powered by DFINITY
            </div>
            <div className="pagescard">
                <a href="https://www.cipherproxy.com/" target="_blank" rel="noopener noreferrer">CipherProxy</a> - An Open Data Marketplace on the Internet Computer
            </div>
            {/* <div className="pagescard">
                <a href="https://www.civol.co/" target="_blank" rel="noopener noreferrer">Civol</a> - Asynchronous video conversation platform enabling decentralized discourse, debate, and collective decision-making
            </div> */}
            <div className="pagescard">
                <a href="https://grwwk-gaaaa-aaaah-aapma-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Content Fly</a> - Content marketplace connecting high-quality creators with brands
            </div>
            <div className="pagescard">
                <a href="https://sn4ia-7qaaa-aaaad-qa22a-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Cover</a> - Open internet service that can be used by developers to verify and prove that a canister&apos;s code matches the open source code
            </div>
            <div className="pagescard">
                <a href="https://sdnoa-fiaaa-aaaah-aaubq-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Crowd Creative Collections</a> - Open and autonomous organization dedicated to building a decentralized artistic creation organization
            </div>
            <div className="pagescard">
                <a href="https://crowdrecords.com/" target="_blank" rel="noopener noreferrer">Crowd Records</a> - Decentralized economy for creating music
            </div>
            <div className="pagescard">
                <a href="https://www.crowdeats.io/" target="_blank" rel="noopener noreferrer">CrowdEats</a> - Restaurant review dapp with social and reward components
            </div>
            <div className="pagescard">
                <a href="https://deckdeckgo.com/en/" target="_blank" rel="noopener noreferrer">DeckDeckGo</a> - Presentations on the Internet Computer
            </div>
            <div className="pagescard">
                <a href="https://jbioa-siaaa-aaaai-qanfq-cai.ic0.app/" target="_blank" rel="noopener noreferrer">DeFind</a> - A staking-based search engine
            </div>
            <div className="pagescard">
                <a href="https://deland.one/" target="_blank" rel="noopener noreferrer">Deland</a> - Fungible Token Standard and DeFi components
            </div>
            {/* <div className="pagescard">
                <a href="https://dfinance.ai/" target="_blank" rel="noopener noreferrer">DFinance</a> - Foundational DeFi components for the Internet Computer
            </div> */}
            <div className="pagescard">
                <a href="https://ymglq-2qaaa-aaaah-qcbzq-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">DFiRocks</a> - Generate your unique rock
            </div>
            <div className="pagescard">
                <a href="https://dmail.ai/" target="_blank" rel="noopener noreferrer">DMail</a> - The first blockchain mailbox product
            </div>
            <div className="pagescard">
                <a href="https://yunqk-aqaaa-aaaai-qawva-cai.ic0.app/" target="_blank" rel="noopener noreferrer">Dstar</a> - Get your favorite Internet Identity numbers
            </div>
            <div className="pagescard">
                <a href="https://getimpactnow.org/" target="_blank" rel="noopener noreferrer">Get Impact Now</a> - Digital platform that enables responsible citizens to be a part of the decision-making process
            </div>
            <div className="pagescard">
                <a href="https://kdc2c-uaaaa-aaaae-qaafq-cai.ic0.app/" target="_blank" rel="noopener noreferrer">IC Go</a> - Go links for the Internet Computer
            </div>
            <div className="pagescard">
                <a href="https://jbxh5-eqaaa-aaaae-qaaoq-cai.ic0.app/" target="_blank" rel="noopener noreferrer">IC Notary</a> - Notarized data on the Internet Computer
            </div>
            <div className="pagescard">
                <a href="https://kgrph-3yaaa-aaaaj-aacuq-cai.raw.ic0.app/home" target="_blank" rel="noopener noreferrer">IC Notes</a> - Your private notes on the blockchain
            </div>
            <div className="pagescard">
                <a href="https://2fpku-eiaaa-aaaad-qaq4a-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">ICNS</a> - A naming service for the Internet Computer, built on top of ENS (Ethereum Name Service)
            </div>
            <div className="pagescard">
                <a href="https://xh4sm-oyaaa-aaaai-qaiva-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">ICPlaces</a> - Virtual reality prototype
            </div>
            <div className="pagescard">
                <a href="https://www.icpmeet.com/" target="_blank" rel="noopener noreferrer">ICPmeet</a> - A Tinder on Internet Computer
            </div>
            <div className="pagescard">
                <a href="https://icpswap.com/" target="_blank" rel="noopener noreferrer">ICPSwap</a> - The Hub of Future Decentralized Finance
            </div>
            <div className="pagescard">
                <a href="http://icwallet.org/" target="_blank" rel="noopener noreferrer">ICWallet</a> - Your gateway to Dfinity ecosystem
            </div>
            <div className="pagescard">
                <a href="https://infinityswap.one/" target="_blank" rel="noopener noreferrer">Infinity Swap</a> - A platform to create, stake and swap Dfinity tokens
            </div>
            <div className="pagescard">
                <a href="https://nceop-maaaa-aaaae-qaavq-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">JSONIC</a> - The first EXT token written in TypeScript/JavaScript and deployed to the Internet Computer
            </div>
            <div className="pagescard">
                <a href="https://learnd.dedn.eu/" target="_blank" rel="noopener noreferrer">LEARND</a> - Community driven educational platform running on Internet Computer
            </div>
            <div className="pagescard">
                <a href="https://memecake.io/" target="_blank" rel="noopener noreferrer">Meme Cake</a> - Decentralized comedy platform
            </div>
            <div className="pagescard">
                <a href="https://modclub.app/" target="_blank" rel="noopener noreferrer">ModClub</a> - Decentralized user generated content moderation service, to integrate with existing Internet Computer dapps
            </div>
            <div className="pagescard">
                <a href="https://muga.media/nft" target="_blank" rel="noopener noreferrer">MugaTunes</a> - Music curation and NFT platform
            </div>
            <div className="pagescard">
                <a href="https://overchute.com/" target="_blank" rel="noopener noreferrer">Overchute</a> - Decentralized smart-contract application for crowdfunding the release of intellectual property 
            </div>
            <div className="pagescard">
                <a href="https://c3qag-6yaaa-aaaah-aaqta-cai.ic0.app/" target="_blank" rel="noopener noreferrer">SkyDocs</a> - Decentralized Google Docs alternative
            </div>
            <div className="pagescard">
                <a href="https://sonic.ooo/" target="_blank" rel="noopener noreferrer">Sonic</a> - Swap tokens, earn fees as a liquidity provider, &amp; build on the Internet Computer’s AMM
            </div>
            <div className="pagescard">
                <a href="https://fbbjb-oyaaa-aaaah-qaojq-cai.raw.ic0.app/" target="_blank" rel="noopener noreferrer">Usergeek</a> - The first decentralised product analytics tool built on the Internet Computer
            </div>
            <div className="pagescard">
                <a href="https://voicemarkr.com/shell/map" target="_blank" rel="noopener noreferrer">VoiceMarkr</a> - P2P voice on the Internet Computer
            </div>
            <div className="pagescard">
                <a href="https://waterslide.app/" target="_blank" rel="noopener noreferrer">Waterslide</a> - Frontend to interact with the Liquity Protocol. Powered by Dfinity
            </div>
            <div className="pagescard">
                <a href="https://www.weact.chat/" target="_blank" rel="noopener noreferrer">WeAct</a> - All in one collaboration app designed by activists for activists
            </div>
            <div className="pagescard">
                <a href="https://www.webi.ai/" target="_blank" rel="noopener noreferrer">WebI</a> - A decentralized mapping solution on the Internet Computer
            </div>
            </div>
        </main>

        <Footer/>
        
    </div>
    )
}