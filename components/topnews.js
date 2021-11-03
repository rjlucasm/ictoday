import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/dfinity/the-internet-computer-at-shanghai-international-blockchain-week-4de75b43cf5f" target="_blank" rel="noopener noreferrer">The Internet Computer at Shanghai International Blockchain Week</a></p>
        <p><a href="https://medium.com/psychedelic-dao/announcing-dfinance-joins-psychedelic-and-rebrands-to-sonic-9399ddcb648d" target="_blank" rel="noopener noreferrer">Announcing DFinance Joins Psychedelic and Rebrands to Sonic 👽</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;