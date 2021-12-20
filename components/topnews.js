import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/dfinity/ultimate-decentralization-using-virtual-people-parties-that-deliver-proof-of-personhood-at-de575522c80" target="_blank" rel="noopener noreferrer">Ultimate Decentralization Using Virtual “People Parties” That Deliver “Proof of Personhood” At Scale</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;