import Link from 'next/link'

const Topnews = () => (
    <div className="topnews">
        <p><a href="https://medium.com/@sly_ooo/272a64a261f0" target="_blank" rel="noopener noreferrer">SLY: A Seamless CLI for the Internet Computer 🐈</a></p>
        <Link href="/news/2021"><a style={{ color: 'inherit' }, {fontWeight: 'bold'}}>+News</a></Link>
    </div>
);

export default Topnews;