import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://www.coindesk.com/tech/2021/12/24/dfinitys-internet-computer-opens-ethereum-bridge/" target="_blank" rel="noopener noreferrer">Dfinity&apos;s Internet Computer Opens Ethereum Bridge</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;