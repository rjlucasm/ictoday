import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://www.bloomberg.com/news/videos/2021-12-10/dfinity-ceo-on-web3-moving-away-from-cloud-video?sref=kHbagO2u" target="_blank" rel="noopener noreferrer">DFINITY CEO on Web3, Moving Away From Cloud</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;