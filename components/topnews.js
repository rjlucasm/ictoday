import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/dfinity/the-internet-computer-blockchains-privacy-advantages-73340c6c42db" target="_blank" rel="noopener noreferrer">The Internet Computer Blockchain&apos;s Privacy Advantages</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;