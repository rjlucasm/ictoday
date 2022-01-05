import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/icp-league/the-foundation-of-defi-how-does-icp-work-in-ic-containers-9e515a90e055" target="_blank" rel="noopener noreferrer">The foundation of DeFi, how does ICP work in IC containers?</a></p>
        <Link href="/news/2022"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;