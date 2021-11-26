import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://cryptoslate.com/3d-nfts-make-their-way-to-the-internet-computer-icp-network/" target="_blank" rel="noopener noreferrer">3D NFTs make their way to the Internet Computer (ICP) network</a></p>
        <p><a href="https://medium.com/dfinity/defi-boom-coming-internet-computer-smart-contracts-can-now-transfer-icp-tokens-c9916ede1060" target="_blank" rel="noopener noreferrer">DeFi Boom Coming: Internet Computer Smart Contracts Can Now Transfer ICP Tokens</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;