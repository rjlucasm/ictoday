import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://cointelegraph.com/news/terabithia-cross-chain-protocol-bridges-internet-computer-and-ethereum" target="_blank" rel="noopener noreferrer">Terabethia cross-chain protocol bridges Internet Computer and Ethereum</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;