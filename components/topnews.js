import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/dank-ois/new-release-wrapped-icp-wicp-884f0e84e62f" target="_blank" rel="noopener noreferrer">New Release: Wrapped ICP (WICP)</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;