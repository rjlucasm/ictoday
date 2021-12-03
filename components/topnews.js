import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/dfinity/introducing-the-ledger-internet-computer-icp-app-for-nano-wallets-eed38c549f0d" target="_blank" rel="noopener noreferrer">Introducing the Ledger Internet Computer (ICP) App for Nano Wallets</a></p>
        <p><a href="https://medium.com/terabethia-bridge/terabethia-bridging-contracts-assets-across-ethereum-and-the-internet-computer-dc45797de1dd" target="_blank" rel="noopener noreferrer">Terabethia: Bridging Contracts &amp; Assets Across Ethereum and the Internet Computer</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;