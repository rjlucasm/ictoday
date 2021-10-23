import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/@houman_87430/customizable-nfts-the-future-of-no-code-2f62534061a5" target="_blank" rel="noopener noreferrer">Customizable NFTs: The Future of No Code</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;