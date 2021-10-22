import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://usethebitcoin.com/what-bitcoin-smart-contracts-will-mean-for-defi/" target="_blank" rel="noopener noreferrer">No Bridge: What Bitcoin Smart Contracts Will Mean for DeFi</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;