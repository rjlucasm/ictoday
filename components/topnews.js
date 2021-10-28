import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/cap-ois/announcing-cap-asset-history-on-the-internet-computer-a6788283c8f3" target="_blank" rel="noopener noreferrer">Announcing CAP: Asset History on the Internet Computer</a></p>
        <p><a href="https://medium.com/dfinity/how-dapp-developers-placing-their-faith-in-total-decentralization-will-inherit-the-world-79419a3e36c9" target="_blank" rel="noopener noreferrer">Why Totally Decentralizing Dapps Wins, And How To Do It</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;