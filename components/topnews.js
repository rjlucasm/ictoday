import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/dfinity/achievement-unblocked-a-new-blockchain-gaming-program-from-dfinity-and-united-esports-6850d20b3398" target="_blank" rel="noopener noreferrer">‘Achievement Unblocked’: A New Blockchain Gaming Program From DFINITY and United Esports</a></p>
        <p><a href="https://medium.com/cap-ois/crowns-news-11-4-3bbc5e5f510f" target="_blank" rel="noopener noreferrer">Crowns News 👑</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;