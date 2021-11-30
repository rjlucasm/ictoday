import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://www.livetradingnews.com/the-internet-computer-blockchain-is-the-only-blockchain-that-truly-scales-214136.html" target="_blank" rel="noopener noreferrer">The Internet Computer blockchain is the only blockchain that truly scales</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;