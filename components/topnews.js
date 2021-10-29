import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/cap-ois/cap-crowns-a-collection-of-10-000-psychedelic-3d-crowns-on-the-internet-computer-1df279bfcf1f" target="_blank" rel="noopener noreferrer">CAP Crowns: A Collection of 10,000 Psychedelic &amp; 3D Crowns on the Internet Computer 👑</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;