import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://financialpost.com/globe-newswire/next-gen-amm-holds-successful-round-led-by-polychain-capitals-beacon-fund" target="_blank" rel="noopener noreferrer">Next-gen AMM holds successful round led by PolyChain Capital&apos;s Beacon Fund</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;