import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/dfinity/the-internet-computer-community-adopts-25-proposals-for-future-crypto-innovation-7465984c5ad1" target="_blank" rel="noopener noreferrer">The Internet Computer Community Adopts 25 Proposals for Future Crypto Innovation</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;