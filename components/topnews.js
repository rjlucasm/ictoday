import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://cryptomode.com/how-toniq-labs-is-shaping-gamefi-on-the-internet-computer/" target="_blank" rel="noopener noreferrer">How Toniq Labs Is Shaping GameFi on the Internet Computer</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;