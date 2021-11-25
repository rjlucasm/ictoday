import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/dfinity/defi-boom-coming-internet-computer-smart-contracts-can-now-transfer-icp-tokens-c9916ede1060" target="_blank" rel="noopener noreferrer">DeFi Boom Coming: Internet Computer Smart Contracts Can Now Transfer ICP Tokens</a></p>
        <p><a href="https://cryptomode.com/how-toniq-labs-is-shaping-gamefi-on-the-internet-computer/" target="_blank" rel="noopener noreferrer">How Toniq Labs Is Shaping GameFi on the Internet Computer</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;