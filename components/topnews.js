import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://www.crowdfundinsider.com/2022/01/185189-internet-computer-dfinity-shares-performance-updates-reports-solid-year-of-developer-and-community-growth/" target="_blank" rel="noopener noreferrer">Internet Computer: DFINITY Shares Performance Updates, Reports Solid Year of Developer and Community Growth</a></p>
        <Link href="/news/2022"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;