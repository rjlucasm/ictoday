import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://news.klever.io/p/internet-computer-live-in-klever-wallet" target="_blank" rel="noopener noreferrer">Klever &amp; Internet Computer collaborates to enable ICP Blockchain in Klever ecosystem</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;